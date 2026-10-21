// Production-grade Native HTTP Server
// Implements NIB & Identity Verification Platform with Blockchain Evidence & Output Hashing
// ponytall: stdlib only (node:http, node:fs, node:path), zero external npm dependencies

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const {
  verifyFourFields,
  verifyOutputHash,
  ROUTES,
  ALL_TEST_CASES
} = require('./verifier');

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

/**
 * Helper to parse JSON request body
 */
function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) { // 1MB limit
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON format: ' + err.message));
      }
    });
    req.on('error', reject);
  });
}

/**
 * Helper to send JSON responses
 */
function sendJson(res, statusCode, data) {
  const jsonStr = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(jsonStr),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(jsonStr);
}

const server = http.createServer(async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  try {
    // 1. Health check endpoint
    if (req.method === 'GET' && pathname === '/api/health') {
      return sendJson(res, 200, {
        status: 'UP',
        service: 'NIB-Verification-Engine',
        version: '0.3',
        timestamp: new Date().toISOString()
      });
    }

    // 2. Main Verification Endpoint
    if (req.method === 'POST' && pathname === '/api/verify') {
      const body = await readJsonBody(req);
      const result = verifyFourFields(body);
      return sendJson(res, 200, result);
    }

    // 3. Receipt / Output Hash Verification Endpoint
    if (req.method === 'POST' && pathname === '/api/verify-receipt') {
      const body = await readJsonBody(req);
      const verification = verifyOutputHash(body);
      return sendJson(res, 200, verification);
    }

    // 4. Test Cases & Routes Metadata Endpoint
    if (req.method === 'GET' && pathname === '/api/test-cases') {
      return sendJson(res, 200, {
        total_routes: Object.keys(ROUTES).length,
        total_cases: ALL_TEST_CASES.length,
        routes: ROUTES,
        test_cases: ALL_TEST_CASES
      });
    }

    // 5. Batch Runner Endpoint: Execute all 220 PRD cases
    if (req.method === 'POST' && pathname === '/api/run-all-tests') {
      const startTime = Date.now();
      let passed = 0;
      let failed = 0;
      const details = [];

      for (const tc of ALL_TEST_CASES) {
        const result = verifyFourFields({
          nib: tc.nib,
          pj_id: tc.pj_id,
          npwp: tc.npwp,
          name: tc.name
        });

        let expectedStatus = tc.expected_output;
        if (expectedStatus.includes('INPUT_ERROR')) {
          expectedStatus = 'INPUT_ERROR';
        }

        const isPass = result.status === expectedStatus;
        if (isPass) passed++;
        else failed++;

        details.push({
          case_id: tc.case_id,
          nib: tc.nib,
          pj_id: tc.pj_id,
          npwp: tc.npwp,
          name: tc.name,
          expected_status: expectedStatus,
          actual_status: result.status,
          output_hash: result.output_hash,
          passed: isPass
        });
      }

      const elapsed = Date.now() - startTime;
      return sendJson(res, 200, {
        total: ALL_TEST_CASES.length,
        passed,
        failed,
        compliance_rate: ((passed / ALL_TEST_CASES.length) * 100).toFixed(1) + '%',
        execution_time_ms: elapsed,
        details
      });
    }

    // 6. Static File Serving (Landing Page / UI)
    if (req.method === 'GET' && (pathname === '/' || pathname === '/index.html')) {
      const filePath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(filePath)) {
        const html = fs.readFileSync(filePath);
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Content-Length': html.length
        });
        return res.end(html);
      }
    }

    // 404 Not Found
    sendJson(res, 404, { error: 'Not Found', path: pathname });
  } catch (err) {
    console.error('Server error handling request:', err);
    sendJson(res, 500, { error: 'Internal Server Error', message: err.message });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`========================================================`);
  console.log(`✓ NIB & Identity Verification Platform is LIVE`);
  console.log(`✓ Local Access: http://localhost:${PORT}`);
  console.log(`✓ Network Access: http://${HOST}:${PORT}`);
  console.log(`✓ Authoritative Reference: 36 Legal Routes Loaded`);
  console.log(`✓ Staging Test Pack: 220 Test Cases Ready`);
  console.log(`✓ Final Output Hashing: SHA-256 Enabled`);
  console.log(`========================================================`);
});

// Handle graceful termination
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Closing HTTP server.');
  server.close(() => process.exit(0));
});
process.on('SIGINT', () => {
  console.log('SIGINT signal received. Closing HTTP server.');
  server.close(() => process.exit(0));
});

module.exports = server;
