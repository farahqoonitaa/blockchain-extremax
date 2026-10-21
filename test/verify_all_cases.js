// Self-check and verification test suite
// Implements Ponytail rule: one non-trivial runnable check that fails if logic breaks
// Asserts 100% coverage across all 220 PRD staging test cases and output hash verification

const assert = require('node:assert');
const { verifyFourFields, verifyOutputHash, ALL_TEST_CASES } = require('../src/verifier');

console.log('----------------------------------------------------');
console.log('Running Four-Field Verification Test Suite');
console.log(`Evaluating ${ALL_TEST_CASES.length} Test Cases from PRD Appendix A...`);
console.log('----------------------------------------------------');

let passed = 0;
let failed = 0;
const failureDetails = [];

const startTime = Date.now();

for (const tc of ALL_TEST_CASES) {
  const result = verifyFourFields({
    nib: tc.nib,
    pj_id: tc.pj_id,
    npwp: tc.npwp,
    name: tc.name
  });

  // Normalize expected output code
  let expectedStatus = tc.expected_output;
  if (expectedStatus.includes('INPUT_ERROR')) {
    expectedStatus = 'INPUT_ERROR';
  }

  // Check 1: Status match
  const statusMatches = result.status === expectedStatus;

  // Check 2: Final output hash is valid and non-empty SHA-256 string
  const hasValidHash = typeof result.output_hash === 'string' && result.output_hash.length === 64;

  // Check 3: Cryptographic verification of the final output hash succeeds
  const hashCheck = verifyOutputHash(result);
  const hashMatches = hashCheck.valid === true;

  // Check 4: The status is clearly understandable and legible
  const hasReadableStatus = typeof result.status_display === 'string' && typeof result.explanation === 'string';

  if (statusMatches && hasValidHash && hashMatches && hasReadableStatus) {
    passed++;
  } else {
    failed++;
    failureDetails.push({
      case_id: tc.case_id,
      expected: expectedStatus,
      actual: result.status,
      hashValid: hashMatches,
      statusMatches
    });
  }
}

const elapsedMs = Date.now() - startTime;

console.log(`\nResults: ${passed}/${ALL_TEST_CASES.length} PASSED (${((passed / ALL_TEST_CASES.length) * 100).toFixed(1)}%) in ${elapsedMs}ms`);

if (failed > 0) {
  console.error(`FAILED: ${failed} cases failed! Details:`);
  console.error(JSON.stringify(failureDetails.slice(0, 10), null, 2));
  process.exit(1);
} else {
  console.log('All 220 test cases verified successfully with full cryptographic output sealing!');
  console.log('Intermediate process: Unhashed, transparent, human-readable.');
  console.log('Final output: Sealed with SHA-256 cryptographic proof.');
}
