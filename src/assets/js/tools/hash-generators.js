// Pure JavaScript MD5 Implementation (Standard RSA Data Security, Inc. MD5 Message-Digest Algorithm)
function md5(string) {
  function k(n) { return Math.sin(n) * 0x100000000 | 0; }
  
  let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11, 0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 2, 9, 16, 23, 4, 11, 18, 25, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];
  let h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
  let a = [], s = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  
  string = unescape(encodeURIComponent(string));
  let l = string.length, m = [l * 8];
  
  for (let i = 0; i < l; i++) {
    a[i >> 2] |= string.charCodeAt(i) << ((i % 4) * 8);
  }
  
  a[l >> 2] |= 0x80 << ((l % 4) * 8);
  
  while (a.length % 16 !== 14) a.push(0);
  a.push(m[0], m[1] || 0);
  
  for (let i = 0; i < a.length; i += 16) {
    let o = h.slice(0);
    for (let j = 0; j < 64; j++) {
      let f, g;
      if (j < 16) {
        f = (o[1] & o[2]) | (~o[1] & o[3]);
        g = j;
      } else if (j < 32) {
        f = (o[3] & o[1]) | (~o[3] & o[2]);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = o[1] ^ o[2] ^ o[3];
        g = (3 * j + 5) % 16;
      } else {
        f = o[2] ^ (o[1] | ~o[3]);
        g = (7 * j) % 16;
      }
      let t = o[3];
      o[3] = o[2];
      o[2] = o[1];
      o[1] = (o[1] + rotateLeft(o[0] + f + (k(j + 1)) + (a[i + g] | 0), s[(j >> 4) * 4 + (j % 4)])) | 0;
      o[0] = t;
    }
    for (let j = 0; j < 4; j++) h[j] = (h[j] + o[j]) | 0;
  }
  
  let result = '';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result += ((h[i] >> (j * 8)) & 0xff).toString(16).padStart(2, '0');
    }
  }
  return result;
}

function rotateLeft(lValue, iShiftBits) {
  return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

// SubtleCrypto Digest Helpers
async function shaHash(string, algo) {
  const msgBuffer = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest(algo, msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Controller Logic
document.addEventListener('DOMContentLoaded', () => {
  const hashInput = document.getElementById('hashInput');
  const calculateBtn = document.getElementById('calculateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const loadSampleBtn = document.getElementById('loadSampleBtn');

  // Multi-Hash outputs (if present)
  const outMD5 = document.getElementById('outMD5');
  const outSHA1 = document.getElementById('outSHA1');
  const outSHA224 = document.getElementById('outSHA224');
  const outSHA256 = document.getElementById('outSHA256');
  const outSHA384 = document.getElementById('outSHA384');
  const outSHA512 = document.getElementById('outSHA512');

  // Single-Hash outputs (if present, for MD5 & SHA256 dedicated pages)
  const singleOutput = document.getElementById('outputBody');
  const singleAlgo = document.getElementById('singleAlgo'); // 'md5' or 'sha256'

  async function calculateHashes() {
    const text = hashInput.value;
    
    // Process Single Dedicated Page Hash
    if (singleOutput && singleAlgo) {
      const algoVal = singleAlgo.value;
      if (algoVal === 'md5') {
        singleOutput.textContent = md5(text);
      } else if (algoVal === 'sha256') {
        singleOutput.textContent = await shaHash(text, 'SHA-256');
      }
      return;
    }

    // Process Multi-Hash Page
    if (outMD5) outMD5.textContent = md5(text);
    
    try {
      if (outSHA1) outSHA1.textContent = await shaHash(text, 'SHA-1');
      if (outSHA224) outSHA224.textContent = await shaHash(text, 'SHA-224');
      if (outSHA256) outSHA256.textContent = await shaHash(text, 'SHA-256');
      if (outSHA384) outSHA384.textContent = await shaHash(text, 'SHA-384');
      if (outSHA512) outSHA512.textContent = await shaHash(text, 'SHA-512');
    } catch (err) {
      console.error('Error generating crypto hashes:', err);
    }
  }

  // Trigger calculation automatically on input change for real-time responsiveness
  if (hashInput) {
    hashInput.addEventListener('input', calculateHashes);
  }

  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateHashes);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      hashInput.value = '';
      if (singleOutput) singleOutput.textContent = '';
      if (outMD5) outMD5.textContent = '';
      if (outSHA1) outSHA1.textContent = '';
      if (outSHA224) outSHA224.textContent = '';
      if (outSHA256) outSHA256.textContent = '';
      if (outSHA384) outSHA384.textContent = '';
      if (outSHA512) outSHA512.textContent = '';
    });
  }

  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', () => {
      hashInput.value = 'The quick brown fox jumps over the lazy dog';
      calculateHashes();
    });
  }

  // Handle Copy buttons on Hash list
  document.addEventListener('click', (e) => {
    const copyTarget = e.target.closest('[data-copy-id]');
    if (!copyTarget) return;
    
    const targetId = copyTarget.getAttribute('data-copy-id');
    const sourceEl = document.getElementById(targetId);
    if (!sourceEl) return;
    
    const text = sourceEl.textContent || sourceEl.value;
    if (!text) {
      window.showToast('No hash code to copy!', 'error');
      return;
    }
    
    navigator.clipboard.writeText(text)
      .then(() => window.showToast('Hash copied to clipboard!'))
      .catch(() => window.showToast('Failed to copy hash.', 'error'));
  });

  // Calculate initially if there is default content
  if (hashInput && hashInput.value) {
    calculateHashes();
  }
});
