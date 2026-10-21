// Core Verification Engine & Output Hasher
// Implements PRD_NIB_Four_Field_Verification_v0.3 specifications
// ponytall: stdlib only (node:crypto), clean transparent verification with final output cryptographic seal

const crypto = require('node:crypto');
const { ROUTES, ALL_TEST_CASES } = require('./referenceData');

/**
 * Normalizes string inputs while preserving literal format (leading zeros, case-sensitivity rules)
 */
function normalizeInput(val) {
  if (val === undefined || val === null) return '';
  return String(val).trim();
}

/**
 * Canonical serializer for computing deterministic SHA-256 hash on final output
 */
function canonicalStringify(obj) {
  if (obj === null || typeof obj !== 'object') {
    return JSON.stringify(obj);
  }
  if (Array.isArray(obj)) {
    return '[' + obj.map(canonicalStringify).join(',') + ']';
  }
  const keys = Object.keys(obj).sort();
  const keyValues = keys.map(k => `"${k}":${canonicalStringify(obj[k])}`);
  return '{' + keyValues.join(',') + '}';
}

/**
 * Computes SHA-256 digest of an object or string
 */
function sha256(data) {
  const payload = typeof data === 'string' ? data : canonicalStringify(data);
  return crypto.createHash('sha256').update(payload, 'utf8').digest('hex');
}

/**
 * Execute unhashed, transparent business verification across 4 fields.
 * Hashing is applied ONLY on the final output certificate to ensure the status remains crystal clear.
 *
 * @param {Object} input - { nib, pj_id, npwp, name, identity_context }
 * @returns {Object} Final verification result with clear status and final output hash seal
 */
function verifyFourFields(input) {
  const nib = normalizeInput(input.nib);
  const pj_id = normalizeInput(input.pj_id);
  const npwp = normalizeInput(input.npwp);
  const name = normalizeInput(input.name);

  const timestamp = new Date().toISOString();
  const randomRefSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  const dateStr = timestamp.slice(0, 10).replace(/-/g, '');
  const verificationRef = `VRF-${dateStr}-${randomRefSuffix}`;

  // 1. Mandatory Input Validation (FR-01, FR-02)
  const missingFields = [];
  if (!nib) missingFields.push('nib');
  if (!pj_id) missingFields.push('pj_id');
  if (!npwp) missingFields.push('npwp');
  if (!name) missingFields.push('name');

  if (missingFields.length > 0) {
    const errorOutput = {
      status: 'INPUT_ERROR',
      status_display: 'INPUT_ERROR — Missing Field',
      is_conclusive: false,
      explanation: `Missing required verification fields: ${missingFields.join(', ')}. All four fields are mandatory for conclusive assessment.`,
      missing_fields: missingFields,
      checked_at: timestamp,
      verification_reference: verificationRef,
      verified_version: null,
      latest_reference_version: null,
      scope_notice: 'No conclusive business result produced. Field errors must be corrected prior to verification.',
      process_audit: {
        stage_completed: 'INPUT_VALIDATION',
        validation_passed: false,
        steps: [
          { name: 'Input Validation', status: 'FAILED', message: `Missing fields: ${missingFields.join(', ')}` },
          { name: 'OSS Registry Lookup', status: 'SKIPPED' },
          { name: 'Relationship & Tax Linkage', status: 'SKIPPED' },
          { name: 'Version & Evidence Resolution', status: 'SKIPPED' }
        ]
      }
    };

    // Final Output Hashing
    errorOutput.output_hash = sha256(errorOutput);
    errorOutput.hash_algorithm = 'SHA-256';
    errorOutput.hash_scope = 'Final verification receipt payload (tamper-evident seal)';
    return errorOutput;
  }

  // 2. OSS Authoritative Entity Resolution (FR-03)
  // Transparent, unhashed lookup by business NIB identifier
  let matchedRoute = null;
  for (const routeKey of Object.keys(ROUTES)) {
    const r = ROUTES[routeKey];
    if (r.nib === nib) {
      matchedRoute = r;
      break;
    }
  }

  // If business identifier is not found in OSS namespace
  if (!matchedRoute) {
    const wrongOutput = {
      status: 'WRONG',
      status_display: 'WRONG',
      is_conclusive: true,
      explanation: 'The submitted information or associated evidence does not match the reference checked.',
      checked_at: timestamp,
      verification_reference: verificationRef,
      verified_version: null,
      latest_reference_version: null,
      scope_notice: 'Does not establish creditworthiness, current representation authority, or legal NIB validity. Private comparison details are restricted.',
      process_audit: {
        stage_completed: 'OSS_REGISTRY_LOOKUP',
        validation_passed: true,
        steps: [
          { name: 'Input Validation', status: 'PASSED', message: 'All 4 inputs provided and normalized' },
          { name: 'OSS Registry Lookup', status: 'NOT_FOUND', message: 'NIB not found in authoritative reference' },
          { name: 'Relationship & Tax Linkage', status: 'NOT_EVALUATED' },
          { name: 'Version & Evidence Resolution', status: 'NOT_EVALUATED' }
        ]
      }
    };

    wrongOutput.output_hash = sha256(wrongOutput);
    wrongOutput.hash_algorithm = 'SHA-256';
    wrongOutput.hash_scope = 'Final verification receipt payload (tamper-evident seal)';
    return wrongOutput;
  }

  // 3. Match inputs against OSS snapshots (FR-04, FR-05, FR-06, FR-07)
  // Evaluate latest version first (V3)
  const v3 = matchedRoute.snapshots.V3;
  const v1 = matchedRoute.snapshots.V1;

  const matchesV3 = v3 && (v3.pj_id === pj_id) && (v3.npwp === npwp) && (v3.name === name);
  const matchesV1 = v1 && (v1.pj_id === pj_id) && (v1.npwp === npwp) && (v1.name === name);

  let finalResult = null;

  if (matchesV3) {
    // Matched Latest Version
    finalResult = {
      status: 'TRUE_LATEST',
      status_display: 'TRUE — Latest Version',
      is_conclusive: true,
      explanation: 'The submitted information matches the verified latest reference version.',
      business_info: {
        nib: matchedRoute.nib,
        business_type: matchedRoute.business_type,
        identity_route: matchedRoute.identity_route,
        representative_role: matchedRoute.pj_role,
        name_interpretation: matchedRoute.name_role,
        country: matchedRoute.country
      },
      verified_version: 'V3',
      latest_reference_version: 'V3',
      checked_at: timestamp,
      verification_reference: verificationRef,
      blockchain_evidence: {
        network: v3.network,
        block_height: v3.block_height,
        transaction_hash: v3.ledger_tx,
        snapshot_fingerprint: v3.evidence_fingerprint,
        finality: v3.finality,
        effective_date: v3.effective_date
      },
      scope_notice: 'Verification confirms submitted parameters against authoritative OSS and ledger-bound evidence. It does not establish creditworthiness, current representation authority, or legal NIB validity.',
      process_audit: {
        stage_completed: 'EVIDENCE_VERIFIED',
        validation_passed: true,
        steps: [
          { name: 'Input Validation', status: 'PASSED', message: 'All 4 inputs provided and normalized' },
          { name: 'OSS Registry Lookup', status: 'PASSED', message: `Business resolved: ${matchedRoute.business_type}` },
          { name: 'Relationship & Tax Linkage', status: 'PASSED', message: `Role verified: ${matchedRoute.pj_role}, Taxpayer linked` },
          { name: 'Version & Evidence Resolution', status: 'PASSED', message: 'Matched latest reference version V3 with finalized ledger proof' }
        ]
      }
    };
  } else if (matchesV1) {
    // Matched Historical Version
    finalResult = {
      status: 'TRUE_OLD',
      status_display: 'TRUE — Old Version',
      is_conclusive: true,
      explanation: 'The submitted information matches a verified previous reference version. A newer version is available.',
      business_info: {
        nib: matchedRoute.nib,
        business_type: matchedRoute.business_type,
        identity_route: matchedRoute.identity_route,
        representative_role: matchedRoute.pj_role,
        name_interpretation: matchedRoute.name_role,
        country: matchedRoute.country
      },
      verified_version: 'V1',
      latest_reference_version: 'V3',
      checked_at: timestamp,
      verification_reference: verificationRef,
      blockchain_evidence: {
        network: v1.network,
        block_height: v1.block_height,
        transaction_hash: v1.ledger_tx,
        snapshot_fingerprint: v1.evidence_fingerprint,
        finality: v1.finality,
        effective_date: v1.effective_date
      },
      scope_notice: 'The result confirms a historical record. It does not imply that an historical responsible person retains current authority, or that financing should be approved.',
      process_audit: {
        stage_completed: 'EVIDENCE_VERIFIED',
        validation_passed: true,
        steps: [
          { name: 'Input Validation', status: 'PASSED', message: 'All 4 inputs provided and normalized' },
          { name: 'OSS Registry Lookup', status: 'PASSED', message: `Business resolved: ${matchedRoute.business_type}` },
          { name: 'Relationship & Tax Linkage', status: 'PASSED', message: `Historical role verified: ${matchedRoute.pj_role}` },
          { name: 'Version & Evidence Resolution', status: 'PASSED', message: 'Matched historical reference version V1. Newer version V3 exists in registry.' }
        ]
      }
    };
  } else {
    // Parameters do not match any recognized snapshot
    finalResult = {
      status: 'WRONG',
      status_display: 'WRONG',
      is_conclusive: true,
      explanation: 'The submitted information or associated evidence does not match the reference checked.',
      checked_at: timestamp,
      verification_reference: verificationRef,
      verified_version: null,
      latest_reference_version: null,
      scope_notice: 'Does not establish creditworthiness, current representation authority, or legal NIB validity. Private comparison details are restricted.',
      process_audit: {
        stage_completed: 'RELATIONSHIP_MISMATCH',
        validation_passed: true,
        steps: [
          { name: 'Input Validation', status: 'PASSED', message: 'All 4 inputs provided and normalized' },
          { name: 'OSS Registry Lookup', status: 'PASSED', message: `Business found in registry: ${matchedRoute.business_type}` },
          { name: 'Relationship & Tax Linkage', status: 'MISMATCH', message: 'Submitted PJ, NPWP, or Name does not match reference linkage' },
          { name: 'Version & Evidence Resolution', status: 'REJECTED', message: 'No matching version snapshot found' }
        ]
      }
    };
  }

  // 4. Cryptographic Hashing on the FINAL OUTPUT
  // Per user requirement:
  // "do a hashing on the final output , not hashing in overall process, teh key things is to still under stand the statius"
  // The status, explanation, and details remain completely clear and human-readable.
  // The SHA-256 hash seals the entire final output payload as a tamper-evident digital certificate!
  finalResult.output_hash = sha256(finalResult);
  finalResult.hash_algorithm = 'SHA-256';
  finalResult.hash_scope = 'Final verification receipt payload (tamper-evident seal)';

  return finalResult;
}

/**
 * Verify cryptographic integrity of an output receipt against its hash
 */
function verifyOutputHash(outputReceipt, expectedHash) {
  if (!outputReceipt || typeof outputReceipt !== 'object') {
    return { valid: false, error: 'Invalid receipt payload' };
  }
  // Clone object and remove hash fields to recompute canonical hash
  const receiptCopy = JSON.parse(JSON.stringify(outputReceipt));
  delete receiptCopy.output_hash;
  delete receiptCopy.hash_algorithm;
  delete receiptCopy.hash_scope;

  const recomputedHash = sha256(receiptCopy);
  const targetHash = expectedHash || outputReceipt.output_hash;

  return {
    valid: recomputedHash === targetHash,
    expected_hash: targetHash,
    recomputed_hash: recomputedHash,
    algorithm: 'SHA-256',
    verified_at: new Date().toISOString()
  };
}

module.exports = {
  verifyFourFields,
  verifyOutputHash,
  sha256,
  canonicalStringify,
  ROUTES,
  ALL_TEST_CASES
};
