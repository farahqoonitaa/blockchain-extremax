// Authoritative Reference Data and Staging Test Suite
// Generated from PRD_NIB_Four_Field_Verification_v0.3.docx Table 3, Table 14, and Appendix A

const ROUTES = {
  "R01": {
    "route_id": "R01",
    "business_type": "Usaha Perseorangan",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Individual owner",
    "name_role": "Official pelaku-usaha name",
    "country": "ID",
    "nib": "0000000000101",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000101",
        "pj_id": "0000000000000101",
        "npwp": "0000000000008101",
        "name": "Pengguna Uji R01 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0103c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0103d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948203,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000101",
        "pj_id": "0000000000000101",
        "npwp": "0000000000008101",
        "name": "Pengguna Uji R01 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0101c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0101d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832102,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R01-LATEST",
        "nib": "0000000000101",
        "pj_id": "0000000000000101",
        "npwp": "0000000000008101",
        "name": "Pengguna Uji R01 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R01-OLD",
        "nib": "0000000000101",
        "pj_id": "0000000000000101",
        "npwp": "0000000000008101",
        "name": "Pengguna Uji R01 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R01-WRONG-PJ",
        "nib": "0000000000101",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008101",
        "name": "Pengguna Uji R01 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R01-WRONG-SECONDARY",
        "nib": "0000000000101",
        "pj_id": "0000000000000101",
        "npwp": "0000000000888888",
        "name": "Pengguna Uji R01 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R01-WRONG-NAME",
        "nib": "0000000000101",
        "pj_id": "0000000000000101",
        "npwp": "0000000000008101",
        "name": "Demo Nama Salah R01",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R01-WRONG-NIB",
        "nib": "0000000090001",
        "pj_id": "0000000000000101",
        "npwp": "0000000000008101",
        "name": "Pengguna Uji R01 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R02": {
    "route_id": "R02",
    "business_type": "PT",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Director or president director",
    "name_role": "Registering PT",
    "country": "ID",
    "nib": "0000000000102",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000102",
        "pj_id": "0000000000000102",
        "npwp": "0000000000008102",
        "name": "PT Demo R02 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0203c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0203d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948205,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000102",
        "pj_id": "0000000000000102",
        "npwp": "0000000000008102",
        "name": "PT Demo R02 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0201c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0201d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832104,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R02-LATEST",
        "nib": "0000000000102",
        "pj_id": "0000000000000102",
        "npwp": "0000000000008102",
        "name": "PT Demo R02 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R02-OLD",
        "nib": "0000000000102",
        "pj_id": "0000000000000102",
        "npwp": "0000000000008102",
        "name": "PT Demo R02 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R02-WRONG-PJ",
        "nib": "0000000000102",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008102",
        "name": "PT Demo R02 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R02-WRONG-SECONDARY",
        "nib": "0000000000102",
        "pj_id": "0000000000000102",
        "npwp": "0000000000888888",
        "name": "PT Demo R02 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R02-WRONG-NAME",
        "nib": "0000000000102",
        "pj_id": "0000000000000102",
        "npwp": "0000000000008102",
        "name": "Demo Nama Salah R02",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R02-WRONG-NIB",
        "nib": "0000000090002",
        "pj_id": "0000000000000102",
        "npwp": "0000000000008102",
        "name": "PT Demo R02 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R03": {
    "route_id": "R03",
    "business_type": "PT",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Director or president director",
    "name_role": "Registering PT",
    "country": "SG",
    "nib": "0000000000103",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000103",
        "pj_id": "TESTP103",
        "npwp": "0000000000008103",
        "name": "PT Demo R03 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0303c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0303d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948207,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000103",
        "pj_id": "TESTP103",
        "npwp": "0000000000008103",
        "name": "PT Demo R03 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0301c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0301d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832106,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R03-LATEST",
        "nib": "0000000000103",
        "pj_id": "TESTP103",
        "npwp": "0000000000008103",
        "name": "PT Demo R03 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R03-OLD",
        "nib": "0000000000103",
        "pj_id": "TESTP103",
        "npwp": "0000000000008103",
        "name": "PT Demo R03 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R03-WRONG-PJ",
        "nib": "0000000000103",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008103",
        "name": "PT Demo R03 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R03-WRONG-SECONDARY",
        "nib": "0000000000103",
        "pj_id": "TESTP103",
        "npwp": "0000000000888888",
        "name": "PT Demo R03 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R03-WRONG-NAME",
        "nib": "0000000000103",
        "pj_id": "TESTP103",
        "npwp": "0000000000008103",
        "name": "Demo Nama Salah R03",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R03-WRONG-NIB",
        "nib": "0000000090003",
        "pj_id": "TESTP103",
        "npwp": "0000000000008103",
        "name": "PT Demo R03 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R04": {
    "route_id": "R04",
    "business_type": "PT Perseorangan",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded director",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000104",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000104",
        "pj_id": "0000000000000104",
        "npwp": "0000000000008104",
        "name": "PT Perseorangan Demo R04 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0403c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0403d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948209,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000104",
        "pj_id": "0000000000000104",
        "npwp": "0000000000008104",
        "name": "PT Perseorangan Demo R04 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0401c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0401d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832108,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R04-LATEST",
        "nib": "0000000000104",
        "pj_id": "0000000000000104",
        "npwp": "0000000000008104",
        "name": "PT Perseorangan Demo R04 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R04-OLD",
        "nib": "0000000000104",
        "pj_id": "0000000000000104",
        "npwp": "0000000000008104",
        "name": "PT Perseorangan Demo R04 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R04-WRONG-PJ",
        "nib": "0000000000104",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008104",
        "name": "PT Perseorangan Demo R04 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R04-WRONG-SECONDARY",
        "nib": "0000000000104",
        "pj_id": "0000000000000104",
        "npwp": "0000000000888888",
        "name": "PT Perseorangan Demo R04 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R04-WRONG-NAME",
        "nib": "0000000000104",
        "pj_id": "0000000000000104",
        "npwp": "0000000000008104",
        "name": "Demo Nama Salah R04",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R04-WRONG-NIB",
        "nib": "0000000090004",
        "pj_id": "0000000000000104",
        "npwp": "0000000000008104",
        "name": "PT Perseorangan Demo R04 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R05": {
    "route_id": "R05",
    "business_type": "CV",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Active partner",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000105",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000105",
        "pj_id": "0000000000000105",
        "npwp": "0000000000008105",
        "name": "CV Demo R05 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0503c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0503d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948211,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000105",
        "pj_id": "0000000000000105",
        "npwp": "0000000000008105",
        "name": "CV Demo R05 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0501c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0501d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832110,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R05-LATEST",
        "nib": "0000000000105",
        "pj_id": "0000000000000105",
        "npwp": "0000000000008105",
        "name": "CV Demo R05 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R05-OLD",
        "nib": "0000000000105",
        "pj_id": "0000000000000105",
        "npwp": "0000000000008105",
        "name": "CV Demo R05 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R05-WRONG-PJ",
        "nib": "0000000000105",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008105",
        "name": "CV Demo R05 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R05-WRONG-SECONDARY",
        "nib": "0000000000105",
        "pj_id": "0000000000000105",
        "npwp": "0000000000888888",
        "name": "CV Demo R05 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R05-WRONG-NAME",
        "nib": "0000000000105",
        "pj_id": "0000000000000105",
        "npwp": "0000000000008105",
        "name": "Demo Nama Salah R05",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R05-WRONG-NIB",
        "nib": "0000000090005",
        "pj_id": "0000000000000105",
        "npwp": "0000000000008105",
        "name": "CV Demo R05 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R06": {
    "route_id": "R06",
    "business_type": "Firma",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Active partner",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000106",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000106",
        "pj_id": "0000000000000106",
        "npwp": "0000000000008106",
        "name": "Firma Demo R06 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0603c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0603d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948213,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000106",
        "pj_id": "0000000000000106",
        "npwp": "0000000000008106",
        "name": "Firma Demo R06 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0601c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0601d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832112,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R06-LATEST",
        "nib": "0000000000106",
        "pj_id": "0000000000000106",
        "npwp": "0000000000008106",
        "name": "Firma Demo R06 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R06-OLD",
        "nib": "0000000000106",
        "pj_id": "0000000000000106",
        "npwp": "0000000000008106",
        "name": "Firma Demo R06 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R06-WRONG-PJ",
        "nib": "0000000000106",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008106",
        "name": "Firma Demo R06 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R06-WRONG-SECONDARY",
        "nib": "0000000000106",
        "pj_id": "0000000000000106",
        "npwp": "0000000000888888",
        "name": "Firma Demo R06 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R06-WRONG-NAME",
        "nib": "0000000000106",
        "pj_id": "0000000000000106",
        "npwp": "0000000000008106",
        "name": "Demo Nama Salah R06",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R06-WRONG-NIB",
        "nib": "0000000090006",
        "pj_id": "0000000000000106",
        "npwp": "0000000000008106",
        "name": "Firma Demo R06 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R07": {
    "route_id": "R07",
    "business_type": "Persekutuan Perdata",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Active partner",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000107",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000107",
        "pj_id": "0000000000000107",
        "npwp": "0000000000008107",
        "name": "Persekutuan Perdata Demo R07 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0703c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0703d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948215,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000107",
        "pj_id": "0000000000000107",
        "npwp": "0000000000008107",
        "name": "Persekutuan Perdata Demo R07 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0701c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0701d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832114,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R07-LATEST",
        "nib": "0000000000107",
        "pj_id": "0000000000000107",
        "npwp": "0000000000008107",
        "name": "Persekutuan Perdata Demo R07 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R07-OLD",
        "nib": "0000000000107",
        "pj_id": "0000000000000107",
        "npwp": "0000000000008107",
        "name": "Persekutuan Perdata Demo R07 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R07-WRONG-PJ",
        "nib": "0000000000107",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008107",
        "name": "Persekutuan Perdata Demo R07 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R07-WRONG-SECONDARY",
        "nib": "0000000000107",
        "pj_id": "0000000000000107",
        "npwp": "0000000000888888",
        "name": "Persekutuan Perdata Demo R07 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R07-WRONG-NAME",
        "nib": "0000000000107",
        "pj_id": "0000000000000107",
        "npwp": "0000000000008107",
        "name": "Demo Nama Salah R07",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R07-WRONG-NIB",
        "nib": "0000000090007",
        "pj_id": "0000000000000107",
        "npwp": "0000000000008107",
        "name": "Persekutuan Perdata Demo R07 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R08": {
    "route_id": "R08",
    "business_type": "Perum",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Appropriate management/PJ",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000108",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000108",
        "pj_id": "0000000000000108",
        "npwp": "0000000000008108",
        "name": "Perum Demo R08 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0803c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0803d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948217,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000108",
        "pj_id": "0000000000000108",
        "npwp": "0000000000008108",
        "name": "Perum Demo R08 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0801c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0801d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832116,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R08-LATEST",
        "nib": "0000000000108",
        "pj_id": "0000000000000108",
        "npwp": "0000000000008108",
        "name": "Perum Demo R08 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R08-OLD",
        "nib": "0000000000108",
        "pj_id": "0000000000000108",
        "npwp": "0000000000008108",
        "name": "Perum Demo R08 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R08-WRONG-PJ",
        "nib": "0000000000108",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008108",
        "name": "Perum Demo R08 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R08-WRONG-SECONDARY",
        "nib": "0000000000108",
        "pj_id": "0000000000000108",
        "npwp": "0000000000888888",
        "name": "Perum Demo R08 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R08-WRONG-NAME",
        "nib": "0000000000108",
        "pj_id": "0000000000000108",
        "npwp": "0000000000008108",
        "name": "Demo Nama Salah R08",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R08-WRONG-NIB",
        "nib": "0000000090008",
        "pj_id": "0000000000000108",
        "npwp": "0000000000008108",
        "name": "Perum Demo R08 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R09": {
    "route_id": "R09",
    "business_type": "Perumda",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Appropriate management/PJ",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000109",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000109",
        "pj_id": "0000000000000109",
        "npwp": "0000000000008109",
        "name": "Perumda Demo R09 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr0903c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr0903d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948219,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000109",
        "pj_id": "0000000000000109",
        "npwp": "0000000000008109",
        "name": "Perumda Demo R09 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr0901c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr0901d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832118,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R09-LATEST",
        "nib": "0000000000109",
        "pj_id": "0000000000000109",
        "npwp": "0000000000008109",
        "name": "Perumda Demo R09 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R09-OLD",
        "nib": "0000000000109",
        "pj_id": "0000000000000109",
        "npwp": "0000000000008109",
        "name": "Perumda Demo R09 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R09-WRONG-PJ",
        "nib": "0000000000109",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008109",
        "name": "Perumda Demo R09 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R09-WRONG-SECONDARY",
        "nib": "0000000000109",
        "pj_id": "0000000000000109",
        "npwp": "0000000000888888",
        "name": "Perumda Demo R09 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R09-WRONG-NAME",
        "nib": "0000000000109",
        "pj_id": "0000000000000109",
        "npwp": "0000000000008109",
        "name": "Demo Nama Salah R09",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R09-WRONG-NIB",
        "nib": "0000000090009",
        "pj_id": "0000000000000109",
        "npwp": "0000000000008109",
        "name": "Perumda Demo R09 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R10": {
    "route_id": "R10",
    "business_type": "Badan Hukum Lainnya",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Appropriate management/PJ",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000110",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000110",
        "pj_id": "0000000000000110",
        "npwp": "0000000000008110",
        "name": "Badan Hukum Lainnya Demo R10 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1003c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1003d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948221,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000110",
        "pj_id": "0000000000000110",
        "npwp": "0000000000008110",
        "name": "Badan Hukum Lainnya Demo R10 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1001c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1001d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832120,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R10-LATEST",
        "nib": "0000000000110",
        "pj_id": "0000000000000110",
        "npwp": "0000000000008110",
        "name": "Badan Hukum Lainnya Demo R10 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R10-OLD",
        "nib": "0000000000110",
        "pj_id": "0000000000000110",
        "npwp": "0000000000008110",
        "name": "Badan Hukum Lainnya Demo R10 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R10-WRONG-PJ",
        "nib": "0000000000110",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008110",
        "name": "Badan Hukum Lainnya Demo R10 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R10-WRONG-SECONDARY",
        "nib": "0000000000110",
        "pj_id": "0000000000000110",
        "npwp": "0000000000888888",
        "name": "Badan Hukum Lainnya Demo R10 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R10-WRONG-NAME",
        "nib": "0000000000110",
        "pj_id": "0000000000000110",
        "npwp": "0000000000008110",
        "name": "Demo Nama Salah R10",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R10-WRONG-NIB",
        "nib": "0000000090010",
        "pj_id": "0000000000000110",
        "npwp": "0000000000008110",
        "name": "Badan Hukum Lainnya Demo R10 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R11": {
    "route_id": "R11",
    "business_type": "Koperasi",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Cooperative chairperson",
    "name_role": "Registering cooperative",
    "country": "ID",
    "nib": "0000000000111",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000111",
        "pj_id": "0000000000000111",
        "npwp": "0000000000008111",
        "name": "Koperasi Demo R11 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1103c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1103d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948223,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000111",
        "pj_id": "0000000000000111",
        "npwp": "0000000000008111",
        "name": "Koperasi Demo R11 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1101c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1101d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832122,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R11-LATEST",
        "nib": "0000000000111",
        "pj_id": "0000000000000111",
        "npwp": "0000000000008111",
        "name": "Koperasi Demo R11 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R11-OLD",
        "nib": "0000000000111",
        "pj_id": "0000000000000111",
        "npwp": "0000000000008111",
        "name": "Koperasi Demo R11 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R11-WRONG-PJ",
        "nib": "0000000000111",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008111",
        "name": "Koperasi Demo R11 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R11-WRONG-SECONDARY",
        "nib": "0000000000111",
        "pj_id": "0000000000000111",
        "npwp": "0000000000888888",
        "name": "Koperasi Demo R11 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R11-WRONG-NAME",
        "nib": "0000000000111",
        "pj_id": "0000000000000111",
        "npwp": "0000000000008111",
        "name": "Demo Nama Salah R11",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R11-WRONG-NIB",
        "nib": "0000000090011",
        "pj_id": "0000000000000111",
        "npwp": "0000000000008111",
        "name": "Koperasi Demo R11 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R12": {
    "route_id": "R12",
    "business_type": "Persekutuan dan Perkumpulan",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Appropriate management/PJ",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000112",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000112",
        "pj_id": "0000000000000112",
        "npwp": "0000000000008112",
        "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1203c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1203d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948225,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000112",
        "pj_id": "0000000000000112",
        "npwp": "0000000000008112",
        "name": "Persekutuan dan Perkumpulan Demo R12 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1201c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1201d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832124,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R12-LATEST",
        "nib": "0000000000112",
        "pj_id": "0000000000000112",
        "npwp": "0000000000008112",
        "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R12-OLD",
        "nib": "0000000000112",
        "pj_id": "0000000000000112",
        "npwp": "0000000000008112",
        "name": "Persekutuan dan Perkumpulan Demo R12 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R12-WRONG-PJ",
        "nib": "0000000000112",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008112",
        "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R12-WRONG-SECONDARY",
        "nib": "0000000000112",
        "pj_id": "0000000000000112",
        "npwp": "0000000000888888",
        "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R12-WRONG-NAME",
        "nib": "0000000000112",
        "pj_id": "0000000000000112",
        "npwp": "0000000000008112",
        "name": "Demo Nama Salah R12",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R12-WRONG-NIB",
        "nib": "0000000090012",
        "pj_id": "0000000000000112",
        "npwp": "0000000000008112",
        "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R13": {
    "route_id": "R13",
    "business_type": "Yayasan",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Foundation chairperson",
    "name_role": "Registering foundation",
    "country": "ID",
    "nib": "0000000000113",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000113",
        "pj_id": "0000000000000113",
        "npwp": "0000000000008113",
        "name": "Yayasan Demo R13 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1303c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1303d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948227,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000113",
        "pj_id": "0000000000000113",
        "npwp": "0000000000008113",
        "name": "Yayasan Demo R13 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1301c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1301d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832126,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R13-LATEST",
        "nib": "0000000000113",
        "pj_id": "0000000000000113",
        "npwp": "0000000000008113",
        "name": "Yayasan Demo R13 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R13-OLD",
        "nib": "0000000000113",
        "pj_id": "0000000000000113",
        "npwp": "0000000000008113",
        "name": "Yayasan Demo R13 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R13-WRONG-PJ",
        "nib": "0000000000113",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008113",
        "name": "Yayasan Demo R13 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R13-WRONG-SECONDARY",
        "nib": "0000000000113",
        "pj_id": "0000000000000113",
        "npwp": "0000000000888888",
        "name": "Yayasan Demo R13 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R13-WRONG-NAME",
        "nib": "0000000000113",
        "pj_id": "0000000000000113",
        "npwp": "0000000000008113",
        "name": "Demo Nama Salah R13",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R13-WRONG-NIB",
        "nib": "0000000090013",
        "pj_id": "0000000000000113",
        "npwp": "0000000000008113",
        "name": "Yayasan Demo R13 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R14": {
    "route_id": "R14",
    "business_type": "BLU",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Appropriate management/PJ",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000114",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000114",
        "pj_id": "0000000000000114",
        "npwp": "0000000000008114",
        "name": "BLU Demo R14 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1403c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1403d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948229,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000114",
        "pj_id": "0000000000000114",
        "npwp": "0000000000008114",
        "name": "BLU Demo R14 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1401c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1401d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832128,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R14-LATEST",
        "nib": "0000000000114",
        "pj_id": "0000000000000114",
        "npwp": "0000000000008114",
        "name": "BLU Demo R14 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R14-OLD",
        "nib": "0000000000114",
        "pj_id": "0000000000000114",
        "npwp": "0000000000008114",
        "name": "BLU Demo R14 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R14-WRONG-PJ",
        "nib": "0000000000114",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008114",
        "name": "BLU Demo R14 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R14-WRONG-SECONDARY",
        "nib": "0000000000114",
        "pj_id": "0000000000000114",
        "npwp": "0000000000888888",
        "name": "BLU Demo R14 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R14-WRONG-NAME",
        "nib": "0000000000114",
        "pj_id": "0000000000000114",
        "npwp": "0000000000008114",
        "name": "Demo Nama Salah R14",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R14-WRONG-NIB",
        "nib": "0000000090014",
        "pj_id": "0000000000000114",
        "npwp": "0000000000008114",
        "name": "BLU Demo R14 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R15": {
    "route_id": "R15",
    "business_type": "BUM Desa",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded director",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000115",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000115",
        "pj_id": "0000000000000115",
        "npwp": "0000000000008115",
        "name": "BUM Desa Demo R15 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1503c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1503d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948231,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000115",
        "pj_id": "0000000000000115",
        "npwp": "0000000000008115",
        "name": "BUM Desa Demo R15 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1501c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1501d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832130,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R15-LATEST",
        "nib": "0000000000115",
        "pj_id": "0000000000000115",
        "npwp": "0000000000008115",
        "name": "BUM Desa Demo R15 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R15-OLD",
        "nib": "0000000000115",
        "pj_id": "0000000000000115",
        "npwp": "0000000000008115",
        "name": "BUM Desa Demo R15 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R15-WRONG-PJ",
        "nib": "0000000000115",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008115",
        "name": "BUM Desa Demo R15 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R15-WRONG-SECONDARY",
        "nib": "0000000000115",
        "pj_id": "0000000000000115",
        "npwp": "0000000000888888",
        "name": "BUM Desa Demo R15 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R15-WRONG-NAME",
        "nib": "0000000000115",
        "pj_id": "0000000000000115",
        "npwp": "0000000000008115",
        "name": "Demo Nama Salah R15",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R15-WRONG-NIB",
        "nib": "0000000090015",
        "pj_id": "0000000000000115",
        "npwp": "0000000000008115",
        "name": "BUM Desa Demo R15 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R16": {
    "route_id": "R16",
    "business_type": "BUM Desa Bersama",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded director",
    "name_role": "Registering entity",
    "country": "ID",
    "nib": "0000000000116",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000116",
        "pj_id": "0000000000000116",
        "npwp": "0000000000008116",
        "name": "BUM Desa Bersama Demo R16 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1603c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1603d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948233,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000116",
        "pj_id": "0000000000000116",
        "npwp": "0000000000008116",
        "name": "BUM Desa Bersama Demo R16 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1601c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1601d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832132,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R16-LATEST",
        "nib": "0000000000116",
        "pj_id": "0000000000000116",
        "npwp": "0000000000008116",
        "name": "BUM Desa Bersama Demo R16 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R16-OLD",
        "nib": "0000000000116",
        "pj_id": "0000000000000116",
        "npwp": "0000000000008116",
        "name": "BUM Desa Bersama Demo R16 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R16-WRONG-PJ",
        "nib": "0000000000116",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008116",
        "name": "BUM Desa Bersama Demo R16 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R16-WRONG-SECONDARY",
        "nib": "0000000000116",
        "pj_id": "0000000000000116",
        "npwp": "0000000000888888",
        "name": "BUM Desa Bersama Demo R16 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R16-WRONG-NAME",
        "nib": "0000000000116",
        "pj_id": "0000000000000116",
        "npwp": "0000000000008116",
        "name": "Demo Nama Salah R16",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R16-WRONG-NIB",
        "nib": "0000000090016",
        "pj_id": "0000000000000116",
        "npwp": "0000000000008116",
        "name": "BUM Desa Bersama Demo R16 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R17": {
    "route_id": "R17",
    "business_type": "BUT",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Appropriate recorded PJ",
    "name_role": "Registering BUT",
    "country": "ID",
    "nib": "0000000000117",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000117",
        "pj_id": "0000000000000117",
        "npwp": "0000000000008117",
        "name": "BUT Demo R17 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1703c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1703d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948235,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000117",
        "pj_id": "0000000000000117",
        "npwp": "0000000000008117",
        "name": "BUT Demo R17 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1701c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1701d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832134,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R17-LATEST",
        "nib": "0000000000117",
        "pj_id": "0000000000000117",
        "npwp": "0000000000008117",
        "name": "BUT Demo R17 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R17-OLD",
        "nib": "0000000000117",
        "pj_id": "0000000000000117",
        "npwp": "0000000000008117",
        "name": "BUT Demo R17 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R17-WRONG-PJ",
        "nib": "0000000000117",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008117",
        "name": "BUT Demo R17 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R17-WRONG-SECONDARY",
        "nib": "0000000000117",
        "pj_id": "0000000000000117",
        "npwp": "0000000000888888",
        "name": "BUT Demo R17 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R17-WRONG-NAME",
        "nib": "0000000000117",
        "pj_id": "0000000000000117",
        "npwp": "0000000000008117",
        "name": "Demo Nama Salah R17",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R17-WRONG-NIB",
        "nib": "0000000090017",
        "pj_id": "0000000000000117",
        "npwp": "0000000000008117",
        "name": "BUT Demo R17 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R18": {
    "route_id": "R18",
    "business_type": "BUT",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Appropriate recorded PJ",
    "name_role": "Registering BUT",
    "country": "SG",
    "nib": "0000000000118",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000118",
        "pj_id": "TESTP118",
        "npwp": "0000000000008118",
        "name": "BUT Demo R18 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1803c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1803d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948237,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000118",
        "pj_id": "TESTP118",
        "npwp": "0000000000008118",
        "name": "BUT Demo R18 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1801c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1801d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832136,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R18-LATEST",
        "nib": "0000000000118",
        "pj_id": "TESTP118",
        "npwp": "0000000000008118",
        "name": "BUT Demo R18 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R18-OLD",
        "nib": "0000000000118",
        "pj_id": "TESTP118",
        "npwp": "0000000000008118",
        "name": "BUT Demo R18 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R18-WRONG-PJ",
        "nib": "0000000000118",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008118",
        "name": "BUT Demo R18 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R18-WRONG-SECONDARY",
        "nib": "0000000000118",
        "pj_id": "TESTP118",
        "npwp": "0000000000888888",
        "name": "BUT Demo R18 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R18-WRONG-NAME",
        "nib": "0000000000118",
        "pj_id": "TESTP118",
        "npwp": "0000000000008118",
        "name": "Demo Nama Salah R18",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R18-WRONG-NIB",
        "nib": "0000000090018",
        "pj_id": "TESTP118",
        "npwp": "0000000000008118",
        "name": "BUT Demo R18 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R19": {
    "route_id": "R19",
    "business_type": "Pemberi Waralaba/STPW",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded PJ linked to registrant",
    "name_role": "Principal name",
    "country": "ID",
    "nib": "0000000000119",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000119",
        "pj_id": "0000000000000119",
        "npwp": "0000000000008119",
        "name": "Demo Principal R19 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr1903c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr1903d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948239,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000119",
        "pj_id": "0000000000000119",
        "npwp": "0000000000008119",
        "name": "Demo Principal R19 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr1901c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr1901d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832138,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R19-LATEST",
        "nib": "0000000000119",
        "pj_id": "0000000000000119",
        "npwp": "0000000000008119",
        "name": "Demo Principal R19 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R19-OLD",
        "nib": "0000000000119",
        "pj_id": "0000000000000119",
        "npwp": "0000000000008119",
        "name": "Demo Principal R19 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R19-WRONG-PJ",
        "nib": "0000000000119",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008119",
        "name": "Demo Principal R19 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R19-WRONG-SECONDARY",
        "nib": "0000000000119",
        "pj_id": "0000000000000119",
        "npwp": "0000000000888888",
        "name": "Demo Principal R19 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R19-WRONG-NAME",
        "nib": "0000000000119",
        "pj_id": "0000000000000119",
        "npwp": "0000000000008119",
        "name": "Demo Nama Salah R19",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R19-WRONG-NIB",
        "nib": "0000000090019",
        "pj_id": "0000000000000119",
        "npwp": "0000000000008119",
        "name": "Demo Principal R19 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R20": {
    "route_id": "R20",
    "business_type": "Pemberi Waralaba/STPW",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded PJ linked to registrant",
    "name_role": "Principal name",
    "country": "SG",
    "nib": "0000000000120",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000120",
        "pj_id": "TESTP120",
        "npwp": "0000000000008120",
        "name": "Demo Principal R20 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2003c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2003d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948241,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000120",
        "pj_id": "TESTP120",
        "npwp": "0000000000008120",
        "name": "Demo Principal R20 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2001c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2001d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832140,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R20-LATEST",
        "nib": "0000000000120",
        "pj_id": "TESTP120",
        "npwp": "0000000000008120",
        "name": "Demo Principal R20 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R20-OLD",
        "nib": "0000000000120",
        "pj_id": "TESTP120",
        "npwp": "0000000000008120",
        "name": "Demo Principal R20 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R20-WRONG-PJ",
        "nib": "0000000000120",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008120",
        "name": "Demo Principal R20 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R20-WRONG-SECONDARY",
        "nib": "0000000000120",
        "pj_id": "TESTP120",
        "npwp": "0000000000888888",
        "name": "Demo Principal R20 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R20-WRONG-NAME",
        "nib": "0000000000120",
        "pj_id": "TESTP120",
        "npwp": "0000000000008120",
        "name": "Demo Nama Salah R20",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R20-WRONG-NIB",
        "nib": "0000000090020",
        "pj_id": "TESTP120",
        "npwp": "0000000000008120",
        "name": "Demo Principal R20 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R21": {
    "route_id": "R21",
    "business_type": "Pedagang Berjangka Asing",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded PJ linked to registrant",
    "name_role": "Principal name",
    "country": "ID",
    "nib": "0000000000121",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000121",
        "pj_id": "0000000000000121",
        "npwp": "0000000000008121",
        "name": "Demo Principal R21 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2103c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2103d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948243,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000121",
        "pj_id": "0000000000000121",
        "npwp": "0000000000008121",
        "name": "Demo Principal R21 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2101c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2101d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832142,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R21-LATEST",
        "nib": "0000000000121",
        "pj_id": "0000000000000121",
        "npwp": "0000000000008121",
        "name": "Demo Principal R21 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R21-OLD",
        "nib": "0000000000121",
        "pj_id": "0000000000000121",
        "npwp": "0000000000008121",
        "name": "Demo Principal R21 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R21-WRONG-PJ",
        "nib": "0000000000121",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008121",
        "name": "Demo Principal R21 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R21-WRONG-SECONDARY",
        "nib": "0000000000121",
        "pj_id": "0000000000000121",
        "npwp": "0000000000888888",
        "name": "Demo Principal R21 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R21-WRONG-NAME",
        "nib": "0000000000121",
        "pj_id": "0000000000000121",
        "npwp": "0000000000008121",
        "name": "Demo Nama Salah R21",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R21-WRONG-NIB",
        "nib": "0000000090021",
        "pj_id": "0000000000000121",
        "npwp": "0000000000008121",
        "name": "Demo Principal R21 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R22": {
    "route_id": "R22",
    "business_type": "Pedagang Berjangka Asing",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded PJ linked to registrant",
    "name_role": "Principal name",
    "country": "SG",
    "nib": "0000000000122",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000122",
        "pj_id": "TESTP122",
        "npwp": "0000000000008122",
        "name": "Demo Principal R22 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2203c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2203d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948245,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000122",
        "pj_id": "TESTP122",
        "npwp": "0000000000008122",
        "name": "Demo Principal R22 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2201c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2201d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832144,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R22-LATEST",
        "nib": "0000000000122",
        "pj_id": "TESTP122",
        "npwp": "0000000000008122",
        "name": "Demo Principal R22 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R22-OLD",
        "nib": "0000000000122",
        "pj_id": "TESTP122",
        "npwp": "0000000000008122",
        "name": "Demo Principal R22 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R22-WRONG-PJ",
        "nib": "0000000000122",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008122",
        "name": "Demo Principal R22 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R22-WRONG-SECONDARY",
        "nib": "0000000000122",
        "pj_id": "TESTP122",
        "npwp": "0000000000888888",
        "name": "Demo Principal R22 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R22-WRONG-NAME",
        "nib": "0000000000122",
        "pj_id": "TESTP122",
        "npwp": "0000000000008122",
        "name": "Demo Nama Salah R22",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R22-WRONG-NIB",
        "nib": "0000000090022",
        "pj_id": "TESTP122",
        "npwp": "0000000000008122",
        "name": "Demo Principal R22 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R23": {
    "route_id": "R23",
    "business_type": "PSE Asing",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded PJ linked to registrant",
    "name_role": "Principal name",
    "country": "ID",
    "nib": "0000000000123",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000123",
        "pj_id": "0000000000000123",
        "npwp": "0000000000008123",
        "name": "Demo Principal R23 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2303c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2303d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948247,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000123",
        "pj_id": "0000000000000123",
        "npwp": "0000000000008123",
        "name": "Demo Principal R23 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2301c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2301d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832146,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R23-LATEST",
        "nib": "0000000000123",
        "pj_id": "0000000000000123",
        "npwp": "0000000000008123",
        "name": "Demo Principal R23 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R23-OLD",
        "nib": "0000000000123",
        "pj_id": "0000000000000123",
        "npwp": "0000000000008123",
        "name": "Demo Principal R23 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R23-WRONG-PJ",
        "nib": "0000000000123",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008123",
        "name": "Demo Principal R23 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R23-WRONG-SECONDARY",
        "nib": "0000000000123",
        "pj_id": "0000000000000123",
        "npwp": "0000000000888888",
        "name": "Demo Principal R23 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R23-WRONG-NAME",
        "nib": "0000000000123",
        "pj_id": "0000000000000123",
        "npwp": "0000000000008123",
        "name": "Demo Nama Salah R23",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R23-WRONG-NIB",
        "nib": "0000000090023",
        "pj_id": "0000000000000123",
        "npwp": "0000000000008123",
        "name": "Demo Principal R23 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R24": {
    "route_id": "R24",
    "business_type": "PSE Asing",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded PJ linked to registrant",
    "name_role": "Principal name",
    "country": "SG",
    "nib": "0000000000124",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000124",
        "pj_id": "TESTP124",
        "npwp": "0000000000008124",
        "name": "Demo Principal R24 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2403c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2403d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948249,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000124",
        "pj_id": "TESTP124",
        "npwp": "0000000000008124",
        "name": "Demo Principal R24 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2401c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2401d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832148,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R24-LATEST",
        "nib": "0000000000124",
        "pj_id": "TESTP124",
        "npwp": "0000000000008124",
        "name": "Demo Principal R24 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R24-OLD",
        "nib": "0000000000124",
        "pj_id": "TESTP124",
        "npwp": "0000000000008124",
        "name": "Demo Principal R24 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R24-WRONG-PJ",
        "nib": "0000000000124",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008124",
        "name": "Demo Principal R24 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R24-WRONG-SECONDARY",
        "nib": "0000000000124",
        "pj_id": "TESTP124",
        "npwp": "0000000000888888",
        "name": "Demo Principal R24 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R24-WRONG-NAME",
        "nib": "0000000000124",
        "pj_id": "TESTP124",
        "npwp": "0000000000008124",
        "name": "Demo Nama Salah R24",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R24-WRONG-NIB",
        "nib": "0000000090024",
        "pj_id": "TESTP124",
        "npwp": "0000000000008124",
        "name": "Demo Principal R24 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R25": {
    "route_id": "R25",
    "business_type": "KPPA",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "ID",
    "nib": "0000000000125",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000125",
        "pj_id": "0000000000000125",
        "npwp": "0000000000008125",
        "name": "Demo Principal R25 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2503c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2503d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948251,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000125",
        "pj_id": "0000000000000125",
        "npwp": "0000000000008125",
        "name": "Demo Principal R25 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2501c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2501d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832150,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R25-LATEST",
        "nib": "0000000000125",
        "pj_id": "0000000000000125",
        "npwp": "0000000000008125",
        "name": "Demo Principal R25 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R25-OLD",
        "nib": "0000000000125",
        "pj_id": "0000000000000125",
        "npwp": "0000000000008125",
        "name": "Demo Principal R25 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R25-WRONG-PJ",
        "nib": "0000000000125",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008125",
        "name": "Demo Principal R25 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R25-WRONG-SECONDARY",
        "nib": "0000000000125",
        "pj_id": "0000000000000125",
        "npwp": "0000000000888888",
        "name": "Demo Principal R25 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R25-WRONG-NAME",
        "nib": "0000000000125",
        "pj_id": "0000000000000125",
        "npwp": "0000000000008125",
        "name": "Demo Nama Salah R25",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R25-WRONG-NIB",
        "nib": "0000000090025",
        "pj_id": "0000000000000125",
        "npwp": "0000000000008125",
        "name": "Demo Principal R25 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R26": {
    "route_id": "R26",
    "business_type": "KPPA",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "SG",
    "nib": "0000000000126",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000126",
        "pj_id": "TESTP126",
        "npwp": "0000000000008126",
        "name": "Demo Principal R26 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2603c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2603d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948253,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000126",
        "pj_id": "TESTP126",
        "npwp": "0000000000008126",
        "name": "Demo Principal R26 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2601c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2601d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832152,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R26-LATEST",
        "nib": "0000000000126",
        "pj_id": "TESTP126",
        "npwp": "0000000000008126",
        "name": "Demo Principal R26 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R26-OLD",
        "nib": "0000000000126",
        "pj_id": "TESTP126",
        "npwp": "0000000000008126",
        "name": "Demo Principal R26 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R26-WRONG-PJ",
        "nib": "0000000000126",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008126",
        "name": "Demo Principal R26 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R26-WRONG-SECONDARY",
        "nib": "0000000000126",
        "pj_id": "TESTP126",
        "npwp": "0000000000888888",
        "name": "Demo Principal R26 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R26-WRONG-NAME",
        "nib": "0000000000126",
        "pj_id": "TESTP126",
        "npwp": "0000000000008126",
        "name": "Demo Nama Salah R26",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R26-WRONG-NIB",
        "nib": "0000000090026",
        "pj_id": "TESTP126",
        "npwp": "0000000000008126",
        "name": "Demo Principal R26 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R27": {
    "route_id": "R27",
    "business_type": "KPJPTLA",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "ID",
    "nib": "0000000000127",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000127",
        "pj_id": "0000000000000127",
        "npwp": "0000000000008127",
        "name": "Demo Principal R27 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2703c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2703d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948255,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000127",
        "pj_id": "0000000000000127",
        "npwp": "0000000000008127",
        "name": "Demo Principal R27 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2701c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2701d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832154,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R27-LATEST",
        "nib": "0000000000127",
        "pj_id": "0000000000000127",
        "npwp": "0000000000008127",
        "name": "Demo Principal R27 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R27-OLD",
        "nib": "0000000000127",
        "pj_id": "0000000000000127",
        "npwp": "0000000000008127",
        "name": "Demo Principal R27 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R27-WRONG-PJ",
        "nib": "0000000000127",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008127",
        "name": "Demo Principal R27 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R27-WRONG-SECONDARY",
        "nib": "0000000000127",
        "pj_id": "0000000000000127",
        "npwp": "0000000000888888",
        "name": "Demo Principal R27 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R27-WRONG-NAME",
        "nib": "0000000000127",
        "pj_id": "0000000000000127",
        "npwp": "0000000000008127",
        "name": "Demo Nama Salah R27",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R27-WRONG-NIB",
        "nib": "0000000090027",
        "pj_id": "0000000000000127",
        "npwp": "0000000000008127",
        "name": "Demo Principal R27 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R28": {
    "route_id": "R28",
    "business_type": "KPJPTLA",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "SG",
    "nib": "0000000000128",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000128",
        "pj_id": "TESTP128",
        "npwp": "0000000000008128",
        "name": "Demo Principal R28 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2803c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2803d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948257,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000128",
        "pj_id": "TESTP128",
        "npwp": "0000000000008128",
        "name": "Demo Principal R28 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2801c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2801d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832156,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R28-LATEST",
        "nib": "0000000000128",
        "pj_id": "TESTP128",
        "npwp": "0000000000008128",
        "name": "Demo Principal R28 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R28-OLD",
        "nib": "0000000000128",
        "pj_id": "TESTP128",
        "npwp": "0000000000008128",
        "name": "Demo Principal R28 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R28-WRONG-PJ",
        "nib": "0000000000128",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008128",
        "name": "Demo Principal R28 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R28-WRONG-SECONDARY",
        "nib": "0000000000128",
        "pj_id": "TESTP128",
        "npwp": "0000000000888888",
        "name": "Demo Principal R28 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R28-WRONG-NAME",
        "nib": "0000000000128",
        "pj_id": "TESTP128",
        "npwp": "0000000000008128",
        "name": "Demo Nama Salah R28",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R28-WRONG-NIB",
        "nib": "0000000090028",
        "pj_id": "TESTP128",
        "npwp": "0000000000008128",
        "name": "Demo Principal R28 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R29": {
    "route_id": "R29",
    "business_type": "KP3A Non-PMSE",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded office PJ",
    "name_role": "Nama Perusahaan Luar Negeri yang Menunjuk",
    "country": "ID",
    "nib": "0000000000129",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000129",
        "pj_id": "0000000000000129",
        "npwp": "0000000000008129",
        "name": "Demo Principal R29 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr2903c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr2903d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948259,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000129",
        "pj_id": "0000000000000129",
        "npwp": "0000000000008129",
        "name": "Demo Principal R29 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr2901c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr2901d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832158,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R29-LATEST",
        "nib": "0000000000129",
        "pj_id": "0000000000000129",
        "npwp": "0000000000008129",
        "name": "Demo Principal R29 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R29-OLD",
        "nib": "0000000000129",
        "pj_id": "0000000000000129",
        "npwp": "0000000000008129",
        "name": "Demo Principal R29 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R29-WRONG-PJ",
        "nib": "0000000000129",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008129",
        "name": "Demo Principal R29 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R29-WRONG-SECONDARY",
        "nib": "0000000000129",
        "pj_id": "0000000000000129",
        "npwp": "0000000000888888",
        "name": "Demo Principal R29 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R29-WRONG-NAME",
        "nib": "0000000000129",
        "pj_id": "0000000000000129",
        "npwp": "0000000000008129",
        "name": "Demo Nama Salah R29",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R29-WRONG-NIB",
        "nib": "0000000090029",
        "pj_id": "0000000000000129",
        "npwp": "0000000000008129",
        "name": "Demo Principal R29 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R30": {
    "route_id": "R30",
    "business_type": "KP3A Non-PMSE",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded office PJ",
    "name_role": "Nama Perusahaan Luar Negeri yang Menunjuk",
    "country": "SG",
    "nib": "0000000000130",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000130",
        "pj_id": "TESTP130",
        "npwp": "0000000000008130",
        "name": "Demo Principal R30 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr3003c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr3003d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948261,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000130",
        "pj_id": "TESTP130",
        "npwp": "0000000000008130",
        "name": "Demo Principal R30 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr3001c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr3001d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832160,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R30-LATEST",
        "nib": "0000000000130",
        "pj_id": "TESTP130",
        "npwp": "0000000000008130",
        "name": "Demo Principal R30 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R30-OLD",
        "nib": "0000000000130",
        "pj_id": "TESTP130",
        "npwp": "0000000000008130",
        "name": "Demo Principal R30 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R30-WRONG-PJ",
        "nib": "0000000000130",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008130",
        "name": "Demo Principal R30 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R30-WRONG-SECONDARY",
        "nib": "0000000000130",
        "pj_id": "TESTP130",
        "npwp": "0000000000888888",
        "name": "Demo Principal R30 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R30-WRONG-NAME",
        "nib": "0000000000130",
        "pj_id": "TESTP130",
        "npwp": "0000000000008130",
        "name": "Demo Nama Salah R30",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R30-WRONG-NIB",
        "nib": "0000000090030",
        "pj_id": "TESTP130",
        "npwp": "0000000000008130",
        "name": "Demo Principal R30 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R31": {
    "route_id": "R31",
    "business_type": "KP3A PMSE",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "ID",
    "nib": "0000000000131",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000131",
        "pj_id": "0000000000000131",
        "npwp": "0000000000008131",
        "name": "Demo Principal R31 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr3103c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr3103d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948263,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000131",
        "pj_id": "0000000000000131",
        "npwp": "0000000000008131",
        "name": "Demo Principal R31 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr3101c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr3101d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832162,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R31-LATEST",
        "nib": "0000000000131",
        "pj_id": "0000000000000131",
        "npwp": "0000000000008131",
        "name": "Demo Principal R31 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R31-OLD",
        "nib": "0000000000131",
        "pj_id": "0000000000000131",
        "npwp": "0000000000008131",
        "name": "Demo Principal R31 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R31-WRONG-PJ",
        "nib": "0000000000131",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008131",
        "name": "Demo Principal R31 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R31-WRONG-SECONDARY",
        "nib": "0000000000131",
        "pj_id": "0000000000000131",
        "npwp": "0000000000888888",
        "name": "Demo Principal R31 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R31-WRONG-NAME",
        "nib": "0000000000131",
        "pj_id": "0000000000000131",
        "npwp": "0000000000008131",
        "name": "Demo Nama Salah R31",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R31-WRONG-NIB",
        "nib": "0000000090031",
        "pj_id": "0000000000000131",
        "npwp": "0000000000008131",
        "name": "Demo Principal R31 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R32": {
    "route_id": "R32",
    "business_type": "KP3A PMSE",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "SG",
    "nib": "0000000000132",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000132",
        "pj_id": "TESTP132",
        "npwp": "0000000000008132",
        "name": "Demo Principal R32 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr3203c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr3203d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948265,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000132",
        "pj_id": "TESTP132",
        "npwp": "0000000000008132",
        "name": "Demo Principal R32 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr3201c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr3201d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832164,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R32-LATEST",
        "nib": "0000000000132",
        "pj_id": "TESTP132",
        "npwp": "0000000000008132",
        "name": "Demo Principal R32 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R32-OLD",
        "nib": "0000000000132",
        "pj_id": "TESTP132",
        "npwp": "0000000000008132",
        "name": "Demo Principal R32 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R32-WRONG-PJ",
        "nib": "0000000000132",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008132",
        "name": "Demo Principal R32 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R32-WRONG-SECONDARY",
        "nib": "0000000000132",
        "pj_id": "TESTP132",
        "npwp": "0000000000888888",
        "name": "Demo Principal R32 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R32-WRONG-NAME",
        "nib": "0000000000132",
        "pj_id": "TESTP132",
        "npwp": "0000000000008132",
        "name": "Demo Nama Salah R32",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R32-WRONG-NIB",
        "nib": "0000000090032",
        "pj_id": "TESTP132",
        "npwp": "0000000000008132",
        "name": "Demo Principal R32 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R33": {
    "route_id": "R33",
    "business_type": "KP3A",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "ID",
    "nib": "0000000000133",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000133",
        "pj_id": "0000000000000133",
        "npwp": "0000000000008133",
        "name": "Demo Principal R33 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr3303c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr3303d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948267,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000133",
        "pj_id": "0000000000000133",
        "npwp": "0000000000008133",
        "name": "Demo Principal R33 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr3301c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr3301d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832166,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R33-LATEST",
        "nib": "0000000000133",
        "pj_id": "0000000000000133",
        "npwp": "0000000000008133",
        "name": "Demo Principal R33 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R33-OLD",
        "nib": "0000000000133",
        "pj_id": "0000000000000133",
        "npwp": "0000000000008133",
        "name": "Demo Principal R33 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R33-WRONG-PJ",
        "nib": "0000000000133",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008133",
        "name": "Demo Principal R33 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R33-WRONG-SECONDARY",
        "nib": "0000000000133",
        "pj_id": "0000000000000133",
        "npwp": "0000000000888888",
        "name": "Demo Principal R33 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R33-WRONG-NAME",
        "nib": "0000000000133",
        "pj_id": "0000000000000133",
        "npwp": "0000000000008133",
        "name": "Demo Nama Salah R33",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R33-WRONG-NIB",
        "nib": "0000000090033",
        "pj_id": "0000000000000133",
        "npwp": "0000000000008133",
        "name": "Demo Principal R33 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R34": {
    "route_id": "R34",
    "business_type": "KP3A",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "SG",
    "nib": "0000000000134",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000134",
        "pj_id": "TESTP134",
        "npwp": "0000000000008134",
        "name": "Demo Principal R34 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr3403c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr3403d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948269,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000134",
        "pj_id": "TESTP134",
        "npwp": "0000000000008134",
        "name": "Demo Principal R34 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr3401c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr3401d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832168,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R34-LATEST",
        "nib": "0000000000134",
        "pj_id": "TESTP134",
        "npwp": "0000000000008134",
        "name": "Demo Principal R34 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R34-OLD",
        "nib": "0000000000134",
        "pj_id": "TESTP134",
        "npwp": "0000000000008134",
        "name": "Demo Principal R34 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R34-WRONG-PJ",
        "nib": "0000000000134",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008134",
        "name": "Demo Principal R34 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R34-WRONG-SECONDARY",
        "nib": "0000000000134",
        "pj_id": "TESTP134",
        "npwp": "0000000000888888",
        "name": "Demo Principal R34 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R34-WRONG-NAME",
        "nib": "0000000000134",
        "pj_id": "TESTP134",
        "npwp": "0000000000008134",
        "name": "Demo Nama Salah R34",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R34-WRONG-NIB",
        "nib": "0000000090034",
        "pj_id": "TESTP134",
        "npwp": "0000000000008134",
        "name": "Demo Principal R34 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R35": {
    "route_id": "R35",
    "business_type": "BUJKA",
    "identity_route": "WNI",
    "doc_type": "KTP",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "ID",
    "nib": "0000000000135",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000135",
        "pj_id": "0000000000000135",
        "npwp": "0000000000008135",
        "name": "Demo Principal R35 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr3503c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr3503d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948271,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000135",
        "pj_id": "0000000000000135",
        "npwp": "0000000000008135",
        "name": "Demo Principal R35 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr3501c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr3501d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832170,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R35-LATEST",
        "nib": "0000000000135",
        "pj_id": "0000000000000135",
        "npwp": "0000000000008135",
        "name": "Demo Principal R35 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R35-OLD",
        "nib": "0000000000135",
        "pj_id": "0000000000000135",
        "npwp": "0000000000008135",
        "name": "Demo Principal R35 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R35-WRONG-PJ",
        "nib": "0000000000135",
        "pj_id": "0000000000999999",
        "npwp": "0000000000008135",
        "name": "Demo Principal R35 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R35-WRONG-SECONDARY",
        "nib": "0000000000135",
        "pj_id": "0000000000000135",
        "npwp": "0000000000888888",
        "name": "Demo Principal R35 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R35-WRONG-NAME",
        "nib": "0000000000135",
        "pj_id": "0000000000000135",
        "npwp": "0000000000008135",
        "name": "Demo Nama Salah R35",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R35-WRONG-NIB",
        "nib": "0000000090035",
        "pj_id": "0000000000000135",
        "npwp": "0000000000008135",
        "name": "Demo Principal R35 Baru",
        "expected_output": "WRONG"
      }
    ]
  },
  "R36": {
    "route_id": "R36",
    "business_type": "BUJKA",
    "identity_route": "WNA",
    "doc_type": "PASSPORT",
    "pj_role": "Recorded office PJ",
    "name_role": "Principal/appointing company name",
    "country": "SG",
    "nib": "0000000000136",
    "snapshots": {
      "V3": {
        "version": "V3",
        "is_latest": true,
        "nib": "0000000000136",
        "pj_id": "TESTP136",
        "npwp": "0000000000008136",
        "name": "Demo Principal R36 Baru",
        "effective_date": "2026-01-15T00:00:00Z",
        "evidence_fingerprint": "0x3a8fr3603c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x7b9cr3603d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1948273,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (64 confirmations)"
      },
      "V1": {
        "version": "V1",
        "is_latest": false,
        "nib": "0000000000136",
        "pj_id": "TESTP136",
        "npwp": "0000000000008136",
        "name": "Demo Principal R36 Lama",
        "effective_date": "2024-06-10T00:00:00Z",
        "evidence_fingerprint": "0x1a8fr3601c94e82f1b0a7d5e3c8b1a4f7d2e9c6b8a1f3d5e7",
        "ledger_tx": "0x5b9cr3601d2e8a1f4b7c0d3e6f9a2b5c8e1f4a7b0d3e6f9a2",
        "block_height": 1832172,
        "network": "OSS Sovereign Consortium Ledger",
        "finality": "FINALIZED (128 confirmations)"
      }
    },
    "test_cases": [
      {
        "case_id": "R36-LATEST",
        "nib": "0000000000136",
        "pj_id": "TESTP136",
        "npwp": "0000000000008136",
        "name": "Demo Principal R36 Baru",
        "expected_output": "TRUE_LATEST"
      },
      {
        "case_id": "R36-OLD",
        "nib": "0000000000136",
        "pj_id": "TESTP136",
        "npwp": "0000000000008136",
        "name": "Demo Principal R36 Lama",
        "expected_output": "TRUE_OLD"
      },
      {
        "case_id": "R36-WRONG-PJ",
        "nib": "0000000000136",
        "pj_id": "TESTPX999",
        "npwp": "0000000000008136",
        "name": "Demo Principal R36 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R36-WRONG-SECONDARY",
        "nib": "0000000000136",
        "pj_id": "TESTP136",
        "npwp": "0000000000888888",
        "name": "Demo Principal R36 Baru",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R36-WRONG-NAME",
        "nib": "0000000000136",
        "pj_id": "TESTP136",
        "npwp": "0000000000008136",
        "name": "Demo Nama Salah R36",
        "expected_output": "WRONG"
      },
      {
        "case_id": "R36-WRONG-NIB",
        "nib": "0000000090036",
        "pj_id": "TESTP136",
        "npwp": "0000000000008136",
        "name": "Demo Principal R36 Baru",
        "expected_output": "WRONG"
      }
    ]
  }
};

const ALL_TEST_CASES = [
  {
    "case_id": "R01-LATEST",
    "nib": "0000000000101",
    "pj_id": "0000000000000101",
    "npwp": "0000000000008101",
    "name": "Pengguna Uji R01 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R01-OLD",
    "nib": "0000000000101",
    "pj_id": "0000000000000101",
    "npwp": "0000000000008101",
    "name": "Pengguna Uji R01 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R01-WRONG-PJ",
    "nib": "0000000000101",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008101",
    "name": "Pengguna Uji R01 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R01-WRONG-SECONDARY",
    "nib": "0000000000101",
    "pj_id": "0000000000000101",
    "npwp": "0000000000888888",
    "name": "Pengguna Uji R01 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R01-WRONG-NAME",
    "nib": "0000000000101",
    "pj_id": "0000000000000101",
    "npwp": "0000000000008101",
    "name": "Demo Nama Salah R01",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R01-WRONG-NIB",
    "nib": "0000000090001",
    "pj_id": "0000000000000101",
    "npwp": "0000000000008101",
    "name": "Pengguna Uji R01 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R02-LATEST",
    "nib": "0000000000102",
    "pj_id": "0000000000000102",
    "npwp": "0000000000008102",
    "name": "PT Demo R02 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R02-OLD",
    "nib": "0000000000102",
    "pj_id": "0000000000000102",
    "npwp": "0000000000008102",
    "name": "PT Demo R02 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R02-WRONG-PJ",
    "nib": "0000000000102",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008102",
    "name": "PT Demo R02 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R02-WRONG-SECONDARY",
    "nib": "0000000000102",
    "pj_id": "0000000000000102",
    "npwp": "0000000000888888",
    "name": "PT Demo R02 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R02-WRONG-NAME",
    "nib": "0000000000102",
    "pj_id": "0000000000000102",
    "npwp": "0000000000008102",
    "name": "Demo Nama Salah R02",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R02-WRONG-NIB",
    "nib": "0000000090002",
    "pj_id": "0000000000000102",
    "npwp": "0000000000008102",
    "name": "PT Demo R02 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R03-LATEST",
    "nib": "0000000000103",
    "pj_id": "TESTP103",
    "npwp": "0000000000008103",
    "name": "PT Demo R03 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R03-OLD",
    "nib": "0000000000103",
    "pj_id": "TESTP103",
    "npwp": "0000000000008103",
    "name": "PT Demo R03 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R03-WRONG-PJ",
    "nib": "0000000000103",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008103",
    "name": "PT Demo R03 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R03-WRONG-SECONDARY",
    "nib": "0000000000103",
    "pj_id": "TESTP103",
    "npwp": "0000000000888888",
    "name": "PT Demo R03 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R03-WRONG-NAME",
    "nib": "0000000000103",
    "pj_id": "TESTP103",
    "npwp": "0000000000008103",
    "name": "Demo Nama Salah R03",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R03-WRONG-NIB",
    "nib": "0000000090003",
    "pj_id": "TESTP103",
    "npwp": "0000000000008103",
    "name": "PT Demo R03 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R04-LATEST",
    "nib": "0000000000104",
    "pj_id": "0000000000000104",
    "npwp": "0000000000008104",
    "name": "PT Perseorangan Demo R04 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R04-OLD",
    "nib": "0000000000104",
    "pj_id": "0000000000000104",
    "npwp": "0000000000008104",
    "name": "PT Perseorangan Demo R04 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R04-WRONG-PJ",
    "nib": "0000000000104",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008104",
    "name": "PT Perseorangan Demo R04 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R04-WRONG-SECONDARY",
    "nib": "0000000000104",
    "pj_id": "0000000000000104",
    "npwp": "0000000000888888",
    "name": "PT Perseorangan Demo R04 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R04-WRONG-NAME",
    "nib": "0000000000104",
    "pj_id": "0000000000000104",
    "npwp": "0000000000008104",
    "name": "Demo Nama Salah R04",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R04-WRONG-NIB",
    "nib": "0000000090004",
    "pj_id": "0000000000000104",
    "npwp": "0000000000008104",
    "name": "PT Perseorangan Demo R04 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R05-LATEST",
    "nib": "0000000000105",
    "pj_id": "0000000000000105",
    "npwp": "0000000000008105",
    "name": "CV Demo R05 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R05-OLD",
    "nib": "0000000000105",
    "pj_id": "0000000000000105",
    "npwp": "0000000000008105",
    "name": "CV Demo R05 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R05-WRONG-PJ",
    "nib": "0000000000105",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008105",
    "name": "CV Demo R05 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R05-WRONG-SECONDARY",
    "nib": "0000000000105",
    "pj_id": "0000000000000105",
    "npwp": "0000000000888888",
    "name": "CV Demo R05 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R05-WRONG-NAME",
    "nib": "0000000000105",
    "pj_id": "0000000000000105",
    "npwp": "0000000000008105",
    "name": "Demo Nama Salah R05",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R05-WRONG-NIB",
    "nib": "0000000090005",
    "pj_id": "0000000000000105",
    "npwp": "0000000000008105",
    "name": "CV Demo R05 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R06-LATEST",
    "nib": "0000000000106",
    "pj_id": "0000000000000106",
    "npwp": "0000000000008106",
    "name": "Firma Demo R06 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R06-OLD",
    "nib": "0000000000106",
    "pj_id": "0000000000000106",
    "npwp": "0000000000008106",
    "name": "Firma Demo R06 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R06-WRONG-PJ",
    "nib": "0000000000106",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008106",
    "name": "Firma Demo R06 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R06-WRONG-SECONDARY",
    "nib": "0000000000106",
    "pj_id": "0000000000000106",
    "npwp": "0000000000888888",
    "name": "Firma Demo R06 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R06-WRONG-NAME",
    "nib": "0000000000106",
    "pj_id": "0000000000000106",
    "npwp": "0000000000008106",
    "name": "Demo Nama Salah R06",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R06-WRONG-NIB",
    "nib": "0000000090006",
    "pj_id": "0000000000000106",
    "npwp": "0000000000008106",
    "name": "Firma Demo R06 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R07-LATEST",
    "nib": "0000000000107",
    "pj_id": "0000000000000107",
    "npwp": "0000000000008107",
    "name": "Persekutuan Perdata Demo R07 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R07-OLD",
    "nib": "0000000000107",
    "pj_id": "0000000000000107",
    "npwp": "0000000000008107",
    "name": "Persekutuan Perdata Demo R07 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R07-WRONG-PJ",
    "nib": "0000000000107",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008107",
    "name": "Persekutuan Perdata Demo R07 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R07-WRONG-SECONDARY",
    "nib": "0000000000107",
    "pj_id": "0000000000000107",
    "npwp": "0000000000888888",
    "name": "Persekutuan Perdata Demo R07 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R07-WRONG-NAME",
    "nib": "0000000000107",
    "pj_id": "0000000000000107",
    "npwp": "0000000000008107",
    "name": "Demo Nama Salah R07",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R07-WRONG-NIB",
    "nib": "0000000090007",
    "pj_id": "0000000000000107",
    "npwp": "0000000000008107",
    "name": "Persekutuan Perdata Demo R07 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R08-LATEST",
    "nib": "0000000000108",
    "pj_id": "0000000000000108",
    "npwp": "0000000000008108",
    "name": "Perum Demo R08 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R08-OLD",
    "nib": "0000000000108",
    "pj_id": "0000000000000108",
    "npwp": "0000000000008108",
    "name": "Perum Demo R08 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R08-WRONG-PJ",
    "nib": "0000000000108",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008108",
    "name": "Perum Demo R08 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R08-WRONG-SECONDARY",
    "nib": "0000000000108",
    "pj_id": "0000000000000108",
    "npwp": "0000000000888888",
    "name": "Perum Demo R08 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R08-WRONG-NAME",
    "nib": "0000000000108",
    "pj_id": "0000000000000108",
    "npwp": "0000000000008108",
    "name": "Demo Nama Salah R08",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R08-WRONG-NIB",
    "nib": "0000000090008",
    "pj_id": "0000000000000108",
    "npwp": "0000000000008108",
    "name": "Perum Demo R08 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R09-LATEST",
    "nib": "0000000000109",
    "pj_id": "0000000000000109",
    "npwp": "0000000000008109",
    "name": "Perumda Demo R09 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R09-OLD",
    "nib": "0000000000109",
    "pj_id": "0000000000000109",
    "npwp": "0000000000008109",
    "name": "Perumda Demo R09 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R09-WRONG-PJ",
    "nib": "0000000000109",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008109",
    "name": "Perumda Demo R09 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R09-WRONG-SECONDARY",
    "nib": "0000000000109",
    "pj_id": "0000000000000109",
    "npwp": "0000000000888888",
    "name": "Perumda Demo R09 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R09-WRONG-NAME",
    "nib": "0000000000109",
    "pj_id": "0000000000000109",
    "npwp": "0000000000008109",
    "name": "Demo Nama Salah R09",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R09-WRONG-NIB",
    "nib": "0000000090009",
    "pj_id": "0000000000000109",
    "npwp": "0000000000008109",
    "name": "Perumda Demo R09 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R10-LATEST",
    "nib": "0000000000110",
    "pj_id": "0000000000000110",
    "npwp": "0000000000008110",
    "name": "Badan Hukum Lainnya Demo R10 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R10-OLD",
    "nib": "0000000000110",
    "pj_id": "0000000000000110",
    "npwp": "0000000000008110",
    "name": "Badan Hukum Lainnya Demo R10 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R10-WRONG-PJ",
    "nib": "0000000000110",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008110",
    "name": "Badan Hukum Lainnya Demo R10 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R10-WRONG-SECONDARY",
    "nib": "0000000000110",
    "pj_id": "0000000000000110",
    "npwp": "0000000000888888",
    "name": "Badan Hukum Lainnya Demo R10 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R10-WRONG-NAME",
    "nib": "0000000000110",
    "pj_id": "0000000000000110",
    "npwp": "0000000000008110",
    "name": "Demo Nama Salah R10",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R10-WRONG-NIB",
    "nib": "0000000090010",
    "pj_id": "0000000000000110",
    "npwp": "0000000000008110",
    "name": "Badan Hukum Lainnya Demo R10 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R11-LATEST",
    "nib": "0000000000111",
    "pj_id": "0000000000000111",
    "npwp": "0000000000008111",
    "name": "Koperasi Demo R11 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R11-OLD",
    "nib": "0000000000111",
    "pj_id": "0000000000000111",
    "npwp": "0000000000008111",
    "name": "Koperasi Demo R11 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R11-WRONG-PJ",
    "nib": "0000000000111",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008111",
    "name": "Koperasi Demo R11 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R11-WRONG-SECONDARY",
    "nib": "0000000000111",
    "pj_id": "0000000000000111",
    "npwp": "0000000000888888",
    "name": "Koperasi Demo R11 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R11-WRONG-NAME",
    "nib": "0000000000111",
    "pj_id": "0000000000000111",
    "npwp": "0000000000008111",
    "name": "Demo Nama Salah R11",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R11-WRONG-NIB",
    "nib": "0000000090011",
    "pj_id": "0000000000000111",
    "npwp": "0000000000008111",
    "name": "Koperasi Demo R11 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R12-LATEST",
    "nib": "0000000000112",
    "pj_id": "0000000000000112",
    "npwp": "0000000000008112",
    "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R12-OLD",
    "nib": "0000000000112",
    "pj_id": "0000000000000112",
    "npwp": "0000000000008112",
    "name": "Persekutuan dan Perkumpulan Demo R12 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R12-WRONG-PJ",
    "nib": "0000000000112",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008112",
    "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R12-WRONG-SECONDARY",
    "nib": "0000000000112",
    "pj_id": "0000000000000112",
    "npwp": "0000000000888888",
    "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R12-WRONG-NAME",
    "nib": "0000000000112",
    "pj_id": "0000000000000112",
    "npwp": "0000000000008112",
    "name": "Demo Nama Salah R12",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R12-WRONG-NIB",
    "nib": "0000000090012",
    "pj_id": "0000000000000112",
    "npwp": "0000000000008112",
    "name": "Persekutuan dan Perkumpulan Demo R12 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R13-LATEST",
    "nib": "0000000000113",
    "pj_id": "0000000000000113",
    "npwp": "0000000000008113",
    "name": "Yayasan Demo R13 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R13-OLD",
    "nib": "0000000000113",
    "pj_id": "0000000000000113",
    "npwp": "0000000000008113",
    "name": "Yayasan Demo R13 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R13-WRONG-PJ",
    "nib": "0000000000113",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008113",
    "name": "Yayasan Demo R13 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R13-WRONG-SECONDARY",
    "nib": "0000000000113",
    "pj_id": "0000000000000113",
    "npwp": "0000000000888888",
    "name": "Yayasan Demo R13 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R13-WRONG-NAME",
    "nib": "0000000000113",
    "pj_id": "0000000000000113",
    "npwp": "0000000000008113",
    "name": "Demo Nama Salah R13",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R13-WRONG-NIB",
    "nib": "0000000090013",
    "pj_id": "0000000000000113",
    "npwp": "0000000000008113",
    "name": "Yayasan Demo R13 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R14-LATEST",
    "nib": "0000000000114",
    "pj_id": "0000000000000114",
    "npwp": "0000000000008114",
    "name": "BLU Demo R14 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R14-OLD",
    "nib": "0000000000114",
    "pj_id": "0000000000000114",
    "npwp": "0000000000008114",
    "name": "BLU Demo R14 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R14-WRONG-PJ",
    "nib": "0000000000114",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008114",
    "name": "BLU Demo R14 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R14-WRONG-SECONDARY",
    "nib": "0000000000114",
    "pj_id": "0000000000000114",
    "npwp": "0000000000888888",
    "name": "BLU Demo R14 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R14-WRONG-NAME",
    "nib": "0000000000114",
    "pj_id": "0000000000000114",
    "npwp": "0000000000008114",
    "name": "Demo Nama Salah R14",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R14-WRONG-NIB",
    "nib": "0000000090014",
    "pj_id": "0000000000000114",
    "npwp": "0000000000008114",
    "name": "BLU Demo R14 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R15-LATEST",
    "nib": "0000000000115",
    "pj_id": "0000000000000115",
    "npwp": "0000000000008115",
    "name": "BUM Desa Demo R15 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R15-OLD",
    "nib": "0000000000115",
    "pj_id": "0000000000000115",
    "npwp": "0000000000008115",
    "name": "BUM Desa Demo R15 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R15-WRONG-PJ",
    "nib": "0000000000115",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008115",
    "name": "BUM Desa Demo R15 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R15-WRONG-SECONDARY",
    "nib": "0000000000115",
    "pj_id": "0000000000000115",
    "npwp": "0000000000888888",
    "name": "BUM Desa Demo R15 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R15-WRONG-NAME",
    "nib": "0000000000115",
    "pj_id": "0000000000000115",
    "npwp": "0000000000008115",
    "name": "Demo Nama Salah R15",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R15-WRONG-NIB",
    "nib": "0000000090015",
    "pj_id": "0000000000000115",
    "npwp": "0000000000008115",
    "name": "BUM Desa Demo R15 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R16-LATEST",
    "nib": "0000000000116",
    "pj_id": "0000000000000116",
    "npwp": "0000000000008116",
    "name": "BUM Desa Bersama Demo R16 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R16-OLD",
    "nib": "0000000000116",
    "pj_id": "0000000000000116",
    "npwp": "0000000000008116",
    "name": "BUM Desa Bersama Demo R16 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R16-WRONG-PJ",
    "nib": "0000000000116",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008116",
    "name": "BUM Desa Bersama Demo R16 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R16-WRONG-SECONDARY",
    "nib": "0000000000116",
    "pj_id": "0000000000000116",
    "npwp": "0000000000888888",
    "name": "BUM Desa Bersama Demo R16 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R16-WRONG-NAME",
    "nib": "0000000000116",
    "pj_id": "0000000000000116",
    "npwp": "0000000000008116",
    "name": "Demo Nama Salah R16",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R16-WRONG-NIB",
    "nib": "0000000090016",
    "pj_id": "0000000000000116",
    "npwp": "0000000000008116",
    "name": "BUM Desa Bersama Demo R16 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R17-LATEST",
    "nib": "0000000000117",
    "pj_id": "0000000000000117",
    "npwp": "0000000000008117",
    "name": "BUT Demo R17 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R17-OLD",
    "nib": "0000000000117",
    "pj_id": "0000000000000117",
    "npwp": "0000000000008117",
    "name": "BUT Demo R17 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R17-WRONG-PJ",
    "nib": "0000000000117",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008117",
    "name": "BUT Demo R17 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R17-WRONG-SECONDARY",
    "nib": "0000000000117",
    "pj_id": "0000000000000117",
    "npwp": "0000000000888888",
    "name": "BUT Demo R17 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R17-WRONG-NAME",
    "nib": "0000000000117",
    "pj_id": "0000000000000117",
    "npwp": "0000000000008117",
    "name": "Demo Nama Salah R17",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R17-WRONG-NIB",
    "nib": "0000000090017",
    "pj_id": "0000000000000117",
    "npwp": "0000000000008117",
    "name": "BUT Demo R17 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R18-LATEST",
    "nib": "0000000000118",
    "pj_id": "TESTP118",
    "npwp": "0000000000008118",
    "name": "BUT Demo R18 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R18-OLD",
    "nib": "0000000000118",
    "pj_id": "TESTP118",
    "npwp": "0000000000008118",
    "name": "BUT Demo R18 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R18-WRONG-PJ",
    "nib": "0000000000118",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008118",
    "name": "BUT Demo R18 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R18-WRONG-SECONDARY",
    "nib": "0000000000118",
    "pj_id": "TESTP118",
    "npwp": "0000000000888888",
    "name": "BUT Demo R18 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R18-WRONG-NAME",
    "nib": "0000000000118",
    "pj_id": "TESTP118",
    "npwp": "0000000000008118",
    "name": "Demo Nama Salah R18",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R18-WRONG-NIB",
    "nib": "0000000090018",
    "pj_id": "TESTP118",
    "npwp": "0000000000008118",
    "name": "BUT Demo R18 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R19-LATEST",
    "nib": "0000000000119",
    "pj_id": "0000000000000119",
    "npwp": "0000000000008119",
    "name": "Demo Principal R19 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R19-OLD",
    "nib": "0000000000119",
    "pj_id": "0000000000000119",
    "npwp": "0000000000008119",
    "name": "Demo Principal R19 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R19-WRONG-PJ",
    "nib": "0000000000119",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008119",
    "name": "Demo Principal R19 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R19-WRONG-SECONDARY",
    "nib": "0000000000119",
    "pj_id": "0000000000000119",
    "npwp": "0000000000888888",
    "name": "Demo Principal R19 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R19-WRONG-NAME",
    "nib": "0000000000119",
    "pj_id": "0000000000000119",
    "npwp": "0000000000008119",
    "name": "Demo Nama Salah R19",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R19-WRONG-NIB",
    "nib": "0000000090019",
    "pj_id": "0000000000000119",
    "npwp": "0000000000008119",
    "name": "Demo Principal R19 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R20-LATEST",
    "nib": "0000000000120",
    "pj_id": "TESTP120",
    "npwp": "0000000000008120",
    "name": "Demo Principal R20 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R20-OLD",
    "nib": "0000000000120",
    "pj_id": "TESTP120",
    "npwp": "0000000000008120",
    "name": "Demo Principal R20 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R20-WRONG-PJ",
    "nib": "0000000000120",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008120",
    "name": "Demo Principal R20 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R20-WRONG-SECONDARY",
    "nib": "0000000000120",
    "pj_id": "TESTP120",
    "npwp": "0000000000888888",
    "name": "Demo Principal R20 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R20-WRONG-NAME",
    "nib": "0000000000120",
    "pj_id": "TESTP120",
    "npwp": "0000000000008120",
    "name": "Demo Nama Salah R20",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R20-WRONG-NIB",
    "nib": "0000000090020",
    "pj_id": "TESTP120",
    "npwp": "0000000000008120",
    "name": "Demo Principal R20 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R21-LATEST",
    "nib": "0000000000121",
    "pj_id": "0000000000000121",
    "npwp": "0000000000008121",
    "name": "Demo Principal R21 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R21-OLD",
    "nib": "0000000000121",
    "pj_id": "0000000000000121",
    "npwp": "0000000000008121",
    "name": "Demo Principal R21 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R21-WRONG-PJ",
    "nib": "0000000000121",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008121",
    "name": "Demo Principal R21 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R21-WRONG-SECONDARY",
    "nib": "0000000000121",
    "pj_id": "0000000000000121",
    "npwp": "0000000000888888",
    "name": "Demo Principal R21 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R21-WRONG-NAME",
    "nib": "0000000000121",
    "pj_id": "0000000000000121",
    "npwp": "0000000000008121",
    "name": "Demo Nama Salah R21",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R21-WRONG-NIB",
    "nib": "0000000090021",
    "pj_id": "0000000000000121",
    "npwp": "0000000000008121",
    "name": "Demo Principal R21 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R22-LATEST",
    "nib": "0000000000122",
    "pj_id": "TESTP122",
    "npwp": "0000000000008122",
    "name": "Demo Principal R22 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R22-OLD",
    "nib": "0000000000122",
    "pj_id": "TESTP122",
    "npwp": "0000000000008122",
    "name": "Demo Principal R22 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R22-WRONG-PJ",
    "nib": "0000000000122",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008122",
    "name": "Demo Principal R22 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R22-WRONG-SECONDARY",
    "nib": "0000000000122",
    "pj_id": "TESTP122",
    "npwp": "0000000000888888",
    "name": "Demo Principal R22 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R22-WRONG-NAME",
    "nib": "0000000000122",
    "pj_id": "TESTP122",
    "npwp": "0000000000008122",
    "name": "Demo Nama Salah R22",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R22-WRONG-NIB",
    "nib": "0000000090022",
    "pj_id": "TESTP122",
    "npwp": "0000000000008122",
    "name": "Demo Principal R22 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R23-LATEST",
    "nib": "0000000000123",
    "pj_id": "0000000000000123",
    "npwp": "0000000000008123",
    "name": "Demo Principal R23 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R23-OLD",
    "nib": "0000000000123",
    "pj_id": "0000000000000123",
    "npwp": "0000000000008123",
    "name": "Demo Principal R23 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R23-WRONG-PJ",
    "nib": "0000000000123",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008123",
    "name": "Demo Principal R23 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R23-WRONG-SECONDARY",
    "nib": "0000000000123",
    "pj_id": "0000000000000123",
    "npwp": "0000000000888888",
    "name": "Demo Principal R23 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R23-WRONG-NAME",
    "nib": "0000000000123",
    "pj_id": "0000000000000123",
    "npwp": "0000000000008123",
    "name": "Demo Nama Salah R23",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R23-WRONG-NIB",
    "nib": "0000000090023",
    "pj_id": "0000000000000123",
    "npwp": "0000000000008123",
    "name": "Demo Principal R23 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R24-LATEST",
    "nib": "0000000000124",
    "pj_id": "TESTP124",
    "npwp": "0000000000008124",
    "name": "Demo Principal R24 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R24-OLD",
    "nib": "0000000000124",
    "pj_id": "TESTP124",
    "npwp": "0000000000008124",
    "name": "Demo Principal R24 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R24-WRONG-PJ",
    "nib": "0000000000124",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008124",
    "name": "Demo Principal R24 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R24-WRONG-SECONDARY",
    "nib": "0000000000124",
    "pj_id": "TESTP124",
    "npwp": "0000000000888888",
    "name": "Demo Principal R24 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R24-WRONG-NAME",
    "nib": "0000000000124",
    "pj_id": "TESTP124",
    "npwp": "0000000000008124",
    "name": "Demo Nama Salah R24",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R24-WRONG-NIB",
    "nib": "0000000090024",
    "pj_id": "TESTP124",
    "npwp": "0000000000008124",
    "name": "Demo Principal R24 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R25-LATEST",
    "nib": "0000000000125",
    "pj_id": "0000000000000125",
    "npwp": "0000000000008125",
    "name": "Demo Principal R25 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R25-OLD",
    "nib": "0000000000125",
    "pj_id": "0000000000000125",
    "npwp": "0000000000008125",
    "name": "Demo Principal R25 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R25-WRONG-PJ",
    "nib": "0000000000125",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008125",
    "name": "Demo Principal R25 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R25-WRONG-SECONDARY",
    "nib": "0000000000125",
    "pj_id": "0000000000000125",
    "npwp": "0000000000888888",
    "name": "Demo Principal R25 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R25-WRONG-NAME",
    "nib": "0000000000125",
    "pj_id": "0000000000000125",
    "npwp": "0000000000008125",
    "name": "Demo Nama Salah R25",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R25-WRONG-NIB",
    "nib": "0000000090025",
    "pj_id": "0000000000000125",
    "npwp": "0000000000008125",
    "name": "Demo Principal R25 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R26-LATEST",
    "nib": "0000000000126",
    "pj_id": "TESTP126",
    "npwp": "0000000000008126",
    "name": "Demo Principal R26 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R26-OLD",
    "nib": "0000000000126",
    "pj_id": "TESTP126",
    "npwp": "0000000000008126",
    "name": "Demo Principal R26 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R26-WRONG-PJ",
    "nib": "0000000000126",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008126",
    "name": "Demo Principal R26 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R26-WRONG-SECONDARY",
    "nib": "0000000000126",
    "pj_id": "TESTP126",
    "npwp": "0000000000888888",
    "name": "Demo Principal R26 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R26-WRONG-NAME",
    "nib": "0000000000126",
    "pj_id": "TESTP126",
    "npwp": "0000000000008126",
    "name": "Demo Nama Salah R26",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R26-WRONG-NIB",
    "nib": "0000000090026",
    "pj_id": "TESTP126",
    "npwp": "0000000000008126",
    "name": "Demo Principal R26 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R27-LATEST",
    "nib": "0000000000127",
    "pj_id": "0000000000000127",
    "npwp": "0000000000008127",
    "name": "Demo Principal R27 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R27-OLD",
    "nib": "0000000000127",
    "pj_id": "0000000000000127",
    "npwp": "0000000000008127",
    "name": "Demo Principal R27 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R27-WRONG-PJ",
    "nib": "0000000000127",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008127",
    "name": "Demo Principal R27 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R27-WRONG-SECONDARY",
    "nib": "0000000000127",
    "pj_id": "0000000000000127",
    "npwp": "0000000000888888",
    "name": "Demo Principal R27 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R27-WRONG-NAME",
    "nib": "0000000000127",
    "pj_id": "0000000000000127",
    "npwp": "0000000000008127",
    "name": "Demo Nama Salah R27",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R27-WRONG-NIB",
    "nib": "0000000090027",
    "pj_id": "0000000000000127",
    "npwp": "0000000000008127",
    "name": "Demo Principal R27 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R28-LATEST",
    "nib": "0000000000128",
    "pj_id": "TESTP128",
    "npwp": "0000000000008128",
    "name": "Demo Principal R28 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R28-OLD",
    "nib": "0000000000128",
    "pj_id": "TESTP128",
    "npwp": "0000000000008128",
    "name": "Demo Principal R28 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R28-WRONG-PJ",
    "nib": "0000000000128",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008128",
    "name": "Demo Principal R28 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R28-WRONG-SECONDARY",
    "nib": "0000000000128",
    "pj_id": "TESTP128",
    "npwp": "0000000000888888",
    "name": "Demo Principal R28 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R28-WRONG-NAME",
    "nib": "0000000000128",
    "pj_id": "TESTP128",
    "npwp": "0000000000008128",
    "name": "Demo Nama Salah R28",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R28-WRONG-NIB",
    "nib": "0000000090028",
    "pj_id": "TESTP128",
    "npwp": "0000000000008128",
    "name": "Demo Principal R28 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R29-LATEST",
    "nib": "0000000000129",
    "pj_id": "0000000000000129",
    "npwp": "0000000000008129",
    "name": "Demo Principal R29 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R29-OLD",
    "nib": "0000000000129",
    "pj_id": "0000000000000129",
    "npwp": "0000000000008129",
    "name": "Demo Principal R29 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R29-WRONG-PJ",
    "nib": "0000000000129",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008129",
    "name": "Demo Principal R29 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R29-WRONG-SECONDARY",
    "nib": "0000000000129",
    "pj_id": "0000000000000129",
    "npwp": "0000000000888888",
    "name": "Demo Principal R29 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R29-WRONG-NAME",
    "nib": "0000000000129",
    "pj_id": "0000000000000129",
    "npwp": "0000000000008129",
    "name": "Demo Nama Salah R29",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R29-WRONG-NIB",
    "nib": "0000000090029",
    "pj_id": "0000000000000129",
    "npwp": "0000000000008129",
    "name": "Demo Principal R29 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R30-LATEST",
    "nib": "0000000000130",
    "pj_id": "TESTP130",
    "npwp": "0000000000008130",
    "name": "Demo Principal R30 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R30-OLD",
    "nib": "0000000000130",
    "pj_id": "TESTP130",
    "npwp": "0000000000008130",
    "name": "Demo Principal R30 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R30-WRONG-PJ",
    "nib": "0000000000130",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008130",
    "name": "Demo Principal R30 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R30-WRONG-SECONDARY",
    "nib": "0000000000130",
    "pj_id": "TESTP130",
    "npwp": "0000000000888888",
    "name": "Demo Principal R30 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R30-WRONG-NAME",
    "nib": "0000000000130",
    "pj_id": "TESTP130",
    "npwp": "0000000000008130",
    "name": "Demo Nama Salah R30",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R30-WRONG-NIB",
    "nib": "0000000090030",
    "pj_id": "TESTP130",
    "npwp": "0000000000008130",
    "name": "Demo Principal R30 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R31-LATEST",
    "nib": "0000000000131",
    "pj_id": "0000000000000131",
    "npwp": "0000000000008131",
    "name": "Demo Principal R31 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R31-OLD",
    "nib": "0000000000131",
    "pj_id": "0000000000000131",
    "npwp": "0000000000008131",
    "name": "Demo Principal R31 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R31-WRONG-PJ",
    "nib": "0000000000131",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008131",
    "name": "Demo Principal R31 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R31-WRONG-SECONDARY",
    "nib": "0000000000131",
    "pj_id": "0000000000000131",
    "npwp": "0000000000888888",
    "name": "Demo Principal R31 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R31-WRONG-NAME",
    "nib": "0000000000131",
    "pj_id": "0000000000000131",
    "npwp": "0000000000008131",
    "name": "Demo Nama Salah R31",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R31-WRONG-NIB",
    "nib": "0000000090031",
    "pj_id": "0000000000000131",
    "npwp": "0000000000008131",
    "name": "Demo Principal R31 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R32-LATEST",
    "nib": "0000000000132",
    "pj_id": "TESTP132",
    "npwp": "0000000000008132",
    "name": "Demo Principal R32 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R32-OLD",
    "nib": "0000000000132",
    "pj_id": "TESTP132",
    "npwp": "0000000000008132",
    "name": "Demo Principal R32 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R32-WRONG-PJ",
    "nib": "0000000000132",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008132",
    "name": "Demo Principal R32 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R32-WRONG-SECONDARY",
    "nib": "0000000000132",
    "pj_id": "TESTP132",
    "npwp": "0000000000888888",
    "name": "Demo Principal R32 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R32-WRONG-NAME",
    "nib": "0000000000132",
    "pj_id": "TESTP132",
    "npwp": "0000000000008132",
    "name": "Demo Nama Salah R32",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R32-WRONG-NIB",
    "nib": "0000000090032",
    "pj_id": "TESTP132",
    "npwp": "0000000000008132",
    "name": "Demo Principal R32 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R33-LATEST",
    "nib": "0000000000133",
    "pj_id": "0000000000000133",
    "npwp": "0000000000008133",
    "name": "Demo Principal R33 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R33-OLD",
    "nib": "0000000000133",
    "pj_id": "0000000000000133",
    "npwp": "0000000000008133",
    "name": "Demo Principal R33 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R33-WRONG-PJ",
    "nib": "0000000000133",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008133",
    "name": "Demo Principal R33 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R33-WRONG-SECONDARY",
    "nib": "0000000000133",
    "pj_id": "0000000000000133",
    "npwp": "0000000000888888",
    "name": "Demo Principal R33 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R33-WRONG-NAME",
    "nib": "0000000000133",
    "pj_id": "0000000000000133",
    "npwp": "0000000000008133",
    "name": "Demo Nama Salah R33",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R33-WRONG-NIB",
    "nib": "0000000090033",
    "pj_id": "0000000000000133",
    "npwp": "0000000000008133",
    "name": "Demo Principal R33 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R34-LATEST",
    "nib": "0000000000134",
    "pj_id": "TESTP134",
    "npwp": "0000000000008134",
    "name": "Demo Principal R34 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R34-OLD",
    "nib": "0000000000134",
    "pj_id": "TESTP134",
    "npwp": "0000000000008134",
    "name": "Demo Principal R34 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R34-WRONG-PJ",
    "nib": "0000000000134",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008134",
    "name": "Demo Principal R34 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R34-WRONG-SECONDARY",
    "nib": "0000000000134",
    "pj_id": "TESTP134",
    "npwp": "0000000000888888",
    "name": "Demo Principal R34 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R34-WRONG-NAME",
    "nib": "0000000000134",
    "pj_id": "TESTP134",
    "npwp": "0000000000008134",
    "name": "Demo Nama Salah R34",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R34-WRONG-NIB",
    "nib": "0000000090034",
    "pj_id": "TESTP134",
    "npwp": "0000000000008134",
    "name": "Demo Principal R34 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R35-LATEST",
    "nib": "0000000000135",
    "pj_id": "0000000000000135",
    "npwp": "0000000000008135",
    "name": "Demo Principal R35 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R35-OLD",
    "nib": "0000000000135",
    "pj_id": "0000000000000135",
    "npwp": "0000000000008135",
    "name": "Demo Principal R35 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R35-WRONG-PJ",
    "nib": "0000000000135",
    "pj_id": "0000000000999999",
    "npwp": "0000000000008135",
    "name": "Demo Principal R35 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R35-WRONG-SECONDARY",
    "nib": "0000000000135",
    "pj_id": "0000000000000135",
    "npwp": "0000000000888888",
    "name": "Demo Principal R35 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R35-WRONG-NAME",
    "nib": "0000000000135",
    "pj_id": "0000000000000135",
    "npwp": "0000000000008135",
    "name": "Demo Nama Salah R35",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R35-WRONG-NIB",
    "nib": "0000000090035",
    "pj_id": "0000000000000135",
    "npwp": "0000000000008135",
    "name": "Demo Principal R35 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R36-LATEST",
    "nib": "0000000000136",
    "pj_id": "TESTP136",
    "npwp": "0000000000008136",
    "name": "Demo Principal R36 Baru",
    "expected_output": "TRUE_LATEST"
  },
  {
    "case_id": "R36-OLD",
    "nib": "0000000000136",
    "pj_id": "TESTP136",
    "npwp": "0000000000008136",
    "name": "Demo Principal R36 Lama",
    "expected_output": "TRUE_OLD"
  },
  {
    "case_id": "R36-WRONG-PJ",
    "nib": "0000000000136",
    "pj_id": "TESTPX999",
    "npwp": "0000000000008136",
    "name": "Demo Principal R36 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R36-WRONG-SECONDARY",
    "nib": "0000000000136",
    "pj_id": "TESTP136",
    "npwp": "0000000000888888",
    "name": "Demo Principal R36 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R36-WRONG-NAME",
    "nib": "0000000000136",
    "pj_id": "TESTP136",
    "npwp": "0000000000008136",
    "name": "Demo Nama Salah R36",
    "expected_output": "WRONG"
  },
  {
    "case_id": "R36-WRONG-NIB",
    "nib": "0000000090036",
    "pj_id": "TESTP136",
    "npwp": "0000000000008136",
    "name": "Demo Principal R36 Baru",
    "expected_output": "WRONG"
  },
  {
    "case_id": "MISSING-NIB",
    "nib": "",
    "pj_id": "0000000000000102",
    "npwp": "0000000000008102",
    "name": "PT Demo R02 Baru",
    "expected_output": "INPUT_ERROR \u2014 no result"
  },
  {
    "case_id": "MISSING-PJ-ID",
    "nib": "0000000000102",
    "pj_id": "",
    "npwp": "0000000000008102",
    "name": "PT Demo R02 Baru",
    "expected_output": "INPUT_ERROR \u2014 no result"
  },
  {
    "case_id": "MISSING-NPWP",
    "nib": "0000000000102",
    "pj_id": "0000000000000102",
    "npwp": "",
    "name": "PT Demo R02 Baru",
    "expected_output": "INPUT_ERROR \u2014 no result"
  },
  {
    "case_id": "MISSING-NAME",
    "nib": "0000000000102",
    "pj_id": "0000000000000102",
    "npwp": "0000000000008102",
    "name": "",
    "expected_output": "INPUT_ERROR \u2014 no result"
  }
];

module.exports = { ROUTES, ALL_TEST_CASES };
