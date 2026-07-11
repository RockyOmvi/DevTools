document.addEventListener('DOMContentLoaded', () => {
  const uuidVersion = document.getElementById('uuidVersion');
  const quantityInput = document.getElementById('quantityInput');
  const uppercaseToggle = document.getElementById('uppercaseToggle');
  const hyphensToggle = document.getElementById('hyphensToggle');
  const generateBtn = document.getElementById('generateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const outputBody = document.getElementById('outputBody');

  // Helper: UUID v4 generator
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  // Helper: UUID v1 generator (Mocked accurately based on timestamp and random node address)
  function uuidv1() {
    const timestamp = Date.now();
    // Convert timestamp to 100ns intervals since Gregorian epoch: 15 Oct 1582
    const gregTimestamp = (timestamp + 12219292800) * 10000;
    
    const timeHex = gregTimestamp.toString(16).padStart(15, '0');
    const timeLow = timeHex.substr(7, 8);
    const timeMid = timeHex.substr(3, 4);
    const timeHiAndVersion = '1' + timeHex.substr(0, 3); // v1 identifier
    
    // Random clock sequence and node (since we're in a browser, node is a random 48-bit value)
    const clockSeq = (crypto.getRandomValues(new Uint16Array(1))[0] & 0x3fff).toString(16).padStart(4, '0');
    const node = Array.from(crypto.getRandomValues(new Uint8Array(6)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    return `${timeLow}-${timeMid}-${timeHiAndVersion}-${clockSeq}-${node}`;
  }

  function generateUUIDs() {
    outputBody.textContent = '';
    const quantity = Math.min(Math.max(parseInt(quantityInput.value) || 1, 1), 500);
    const version = uuidVersion.value;
    const isUppercase = uppercaseToggle.checked;
    const hasHyphens = hyphensToggle.checked;

    let uuids = [];
    for (let i = 0; i < quantity; i++) {
      let id = version === 'v1' ? uuidv1() : uuidv4();
      
      if (!hasHyphens) {
        id = id.replace(/-/g, '');
      }
      
      if (isUppercase) {
        id = id.toUpperCase();
      }
      
      uuids.push(id);
    }

    outputBody.textContent = uuids.join('\n');
  }

  generateBtn.addEventListener('click', generateUUIDs);
  
  clearBtn.addEventListener('click', () => {
    outputBody.textContent = '';
  });

  copyBtn.addEventListener('click', () => {
    const text = outputBody.textContent;
    if (!text) {
      window.showToast('No UUIDs to copy!', 'error');
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => window.showToast('UUIDs copied to clipboard!'))
      .catch(() => window.showToast('Failed to copy.', 'error'));
  });

  downloadBtn.addEventListener('click', () => {
    const text = outputBody.textContent;
    if (!text) {
      window.showToast('No UUIDs to download!', 'error');
      return;
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uuids.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Initial trigger
  generateUUIDs();
});
