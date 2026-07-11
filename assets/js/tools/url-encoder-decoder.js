document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('urlInput');
  const encodeBtn = document.getElementById('encodeBtn');
  const decodeBtn = document.getElementById('decodeBtn');
  const clearBtn = document.getElementById('clearBtn');
  const copyBtn = document.getElementById('copyBtn');
  const errorMsg = document.getElementById('errorMessage');
  const outputBody = document.getElementById('outputBody');
  const modeSelect = document.getElementById('modeSelect'); // 'component' or 'full'

  function processUrl(action) {
    errorMsg.classList.remove('active');
    outputBody.textContent = '';
    const inputVal = urlInput.value.trim();

    if (!inputVal) {
      errorMsg.textContent = 'Please enter a string to encode/decode.';
      errorMsg.classList.add('active');
      return;
    }

    try {
      let result = '';
      const mode = modeSelect ? modeSelect.value : 'component';

      if (action === 'encode') {
        result = (mode === 'full') ? encodeURI(inputVal) : encodeURIComponent(inputVal);
      } else if (action === 'decode') {
        result = (mode === 'full') ? decodeURI(inputVal) : decodeURIComponent(inputVal);
      }
      
      outputBody.textContent = result;
    } catch (e) {
      errorMsg.textContent = `Error: ${e.message}. Ensure string is formatted as percent-encoded standard.`;
      errorMsg.classList.add('active');
    }
  }

  // Register conditional listeners depending on which page we are on
  if (encodeBtn) {
    encodeBtn.addEventListener('click', () => processUrl('encode'));
  }
  if (decodeBtn) {
    decodeBtn.addEventListener('click', () => processUrl('decode'));
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      urlInput.value = '';
      outputBody.textContent = '';
      errorMsg.classList.remove('active');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const outputText = outputBody.textContent;
      if (!outputText) {
        window.showToast('No output to copy!', 'error');
        return;
      }
      navigator.clipboard.writeText(outputText)
        .then(() => window.showToast('Result copied to clipboard!'))
        .catch(() => window.showToast('Failed to copy.', 'error'));
    });
  }
});
