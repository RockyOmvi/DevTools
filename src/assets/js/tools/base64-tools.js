// Base64 String & Image Data URL Converter
(function() {
  // Tabs
  const tabText = document.getElementById('tabText');
  const tabImage = document.getElementById('tabImage');
  const paneText = document.getElementById('paneText');
  const paneImage = document.getElementById('paneImage');

  if (tabText && tabImage && paneText && paneImage) {
    tabText.addEventListener('click', () => {
      tabText.classList.add('active');
      tabImage.classList.remove('active');
      paneText.style.display = 'block';
      paneImage.style.display = 'none';
    });

    tabImage.addEventListener('click', () => {
      tabImage.classList.add('active');
      tabText.classList.remove('active');
      paneImage.style.display = 'block';
      paneText.style.display = 'none';
    });
  }

  // UTF-8 safe Base64 encoder/decoder
  function utf8ToBase64(str, urlSafe = false) {
    const bytes = new TextEncoder().encode(str);
    let binString = '';
    for (let i = 0; i < bytes.length; i++) {
      binString += String.fromCharCode(bytes[i]);
    }
    let b64 = btoa(binString);
    if (urlSafe) {
      b64 = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
    return b64;
  }

  function base64ToUtf8(b64, urlSafe = false) {
    let clean = b64.trim();
    if (urlSafe || clean.includes('-') || clean.includes('_')) {
      clean = clean.replace(/-/g, '+').replace(/_/g, '/');
      while (clean.length % 4 !== 0) {
        clean += '=';
      }
    }
    const binString = atob(clean);
    const bytes = new Uint8Array(binString.length);
    for (let i = 0; i < binString.length; i++) {
      bytes[i] = binString.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  // Text Mode Elements
  const textInput = document.getElementById('textInput');
  const encodeBtn = document.getElementById('encodeBtn');
  const decodeBtn = document.getElementById('decodeBtn');
  const clearTextBtn = document.getElementById('clearTextBtn');
  const urlSafeToggle = document.getElementById('urlSafeToggle');
  const textError = document.getElementById('textError');
  const textOutput = document.getElementById('textOutput');
  const copyTextOutputBtn = document.getElementById('copyTextOutputBtn');

  if (encodeBtn && textInput && textOutput) {
    encodeBtn.addEventListener('click', () => {
      if (textError) textError.style.display = 'none';
      const val = textInput.value;
      if (!val) {
        if (textError) {
          textError.textContent = 'Please enter text to encode.';
          textError.style.display = 'block';
        }
        return;
      }
      try {
        const isUrlSafe = urlSafeToggle ? urlSafeToggle.checked : false;
        textOutput.textContent = utf8ToBase64(val, isUrlSafe);
        if (typeof showToast === 'function') showToast('Text encoded to Base64');
      } catch (err) {
        if (textError) {
          textError.textContent = 'Encoding error: ' + err.message;
          textError.style.display = 'block';
        }
      }
    });
  }

  if (decodeBtn && textInput && textOutput) {
    decodeBtn.addEventListener('click', () => {
      if (textError) textError.style.display = 'none';
      const val = textInput.value.trim();
      if (!val) {
        if (textError) {
          textError.textContent = 'Please enter a Base64 string to decode.';
          textError.style.display = 'block';
        }
        return;
      }
      try {
        const isUrlSafe = urlSafeToggle ? urlSafeToggle.checked : false;
        textOutput.textContent = base64ToUtf8(val, isUrlSafe);
        if (typeof showToast === 'function') showToast('Base64 decoded successfully');
      } catch (err) {
        if (textError) {
          textError.textContent = 'Invalid Base64 sequence: ' + err.message;
          textError.style.display = 'block';
        }
      }
    });
  }

  if (clearTextBtn && textInput && textOutput) {
    clearTextBtn.addEventListener('click', () => {
      textInput.value = '';
      textOutput.textContent = '';
      if (textError) textError.style.display = 'none';
    });
  }

  if (copyTextOutputBtn && textOutput) {
    copyTextOutputBtn.addEventListener('click', () => {
      const text = textOutput.textContent;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        if (typeof showToast === 'function') showToast('Copied to clipboard');
      });
    });
  }

  // --- Image / File Mode Elements ---
  const fileInput = document.getElementById('fileInput');
  const dropZone = document.getElementById('dropZone');
  const imagePreview = document.getElementById('imagePreview');
  const imageInfo = document.getElementById('imageInfo');
  const imageResultContainer = document.getElementById('imageResultContainer');
  const imageError = document.getElementById('imageError');
  const rawBase64Output = document.getElementById('rawBase64Output');
  const dataUrlOutput = document.getElementById('dataUrlOutput');

  function handleFile(file) {
    if (!file) return;
    if (imageError) imageError.style.display = 'none';

    // Limit to 10MB for smooth browser performance
    if (file.size > 10 * 1024 * 1024) {
      if (imageError) {
        imageError.textContent = 'File exceeds 10MB limit. Please select a smaller file.';
        imageError.style.display = 'block';
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const base64Index = dataUrl.indexOf('base64,');
      const rawBase64 = base64Index !== -1 ? dataUrl.substring(base64Index + 7) : dataUrl;

      if (rawBase64Output) rawBase64Output.textContent = rawBase64;
      if (dataUrlOutput) dataUrlOutput.textContent = dataUrl;

      if (imagePreview) {
        imagePreview.src = dataUrl;
        imagePreview.style.display = file.type.startsWith('image/') ? 'block' : 'none';
      }

      if (imageInfo) {
        const origKb = (file.size / 1024).toFixed(2);
        const b64Kb = (rawBase64.length / 1024).toFixed(2);
        imageInfo.innerHTML = `<strong>File:</strong> ${file.name} | <strong>Type:</strong> ${file.type || 'binary'} | <strong>Original:</strong> ${origKb} KB | <strong>Base64:</strong> ${b64Kb} KB (+33% overhead)`;
      }

      if (imageResultContainer) imageResultContainer.style.display = 'block';
      if (typeof showToast === 'function') showToast('File converted to Base64');
    };

    reader.onerror = function() {
      if (imageError) {
        imageError.textContent = 'Failed to read file.';
        imageError.style.display = 'block';
      }
    };

    reader.readAsDataURL(file);
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    });
  }

  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'var(--accent)';
      dropZone.style.backgroundColor = 'var(--bg-tertiary)';
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.style.borderColor = 'var(--border)';
      dropZone.style.backgroundColor = 'transparent';
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'var(--border)';
      dropZone.style.backgroundColor = 'transparent';
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  // Copy helpers
  const copyRawB64Btn = document.getElementById('copyRawB64Btn');
  const copyDataUrlBtn = document.getElementById('copyDataUrlBtn');
  const copyImgTagBtn = document.getElementById('copyImgTagBtn');
  const copyCssBgBtn = document.getElementById('copyCssBgBtn');

  if (copyRawB64Btn && rawBase64Output) {
    copyRawB64Btn.addEventListener('click', () => {
      navigator.clipboard.writeText(rawBase64Output.textContent).then(() => {
        if (typeof showToast === 'function') showToast('Raw Base64 copied');
      });
    });
  }

  if (copyDataUrlBtn && dataUrlOutput) {
    copyDataUrlBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(dataUrlOutput.textContent).then(() => {
        if (typeof showToast === 'function') showToast('Data URL copied');
      });
    });
  }

  if (copyImgTagBtn && dataUrlOutput) {
    copyImgTagBtn.addEventListener('click', () => {
      const tag = `<img src="${dataUrlOutput.textContent}" alt="Embedded Image" />`;
      navigator.clipboard.writeText(tag).then(() => {
        if (typeof showToast === 'function') showToast('HTML <img> tag copied');
      });
    });
  }

  if (copyCssBgBtn && dataUrlOutput) {
    copyCssBgBtn.addEventListener('click', () => {
      const css = `background-image: url("${dataUrlOutput.textContent}");`;
      navigator.clipboard.writeText(css).then(() => {
        if (typeof showToast === 'function') showToast('CSS background-image copied');
      });
    });
  }
})();
