document.addEventListener('DOMContentLoaded', () => {
  const jsonInput = document.getElementById('jsonInput');
  const indentSelect = document.getElementById('indentSelect');
  const validateBtn = document.getElementById('validateBtn');
  const formatBtn = document.getElementById('formatBtn');
  const minifyBtn = document.getElementById('minifyBtn');
  const clearBtn = document.getElementById('clearBtn');
  const loadSampleBtn = document.getElementById('loadSampleBtn');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const errorMsg = document.getElementById('errorMessage');
  const successMsg = document.getElementById('successMessage');
  const outputBody = document.getElementById('outputBody');

  const sampleJSON = {
    "name": "DevTools Hub",
    "version": "1.0.0",
    "description": "Collection of handy developer tools",
    "features": [
      "JSON Validator",
      "JWT Decoder",
      "Regex Tester",
      "Diff Checker"
    ],
    "active": true,
    "rating": 5.0,
    "author": {
      "email": "purushottamkumaroffical@gmail.com"
    }
  };

  // Prettify code block helper
  function displayOutput(content) {
    outputBody.textContent = content;
  }

  function getIndent() {
    const val = indentSelect.value;
    if (val === 'tab') return '\t';
    return parseInt(val, 10);
  }

  function validate(format = false, minify = false) {
    errorMsg.classList.remove('active');
    successMsg.classList.remove('active');
    const inputVal = jsonInput.value.trim();

    if (!inputVal) {
      errorMsg.textContent = 'Please enter JSON string to validate.';
      errorMsg.classList.add('active');
      return;
    }

    try {
      const parsed = JSON.parse(inputVal);
      successMsg.textContent = 'Valid JSON!';
      successMsg.classList.add('active');

      if (minify) {
        displayOutput(JSON.stringify(parsed));
      } else if (format) {
        displayOutput(JSON.stringify(parsed, null, getIndent()));
      } else {
        displayOutput(JSON.stringify(parsed, null, getIndent()));
      }
    } catch (e) {
      errorMsg.textContent = `Error: ${e.message}`;
      errorMsg.classList.add('active');
    }
  }

  // Event Listeners
  validateBtn.addEventListener('click', () => validate(false, false));
  formatBtn.addEventListener('click', () => validate(true, false));
  minifyBtn.addEventListener('click', () => validate(false, true));

  clearBtn.addEventListener('click', () => {
    jsonInput.value = '';
    outputBody.textContent = '';
    errorMsg.classList.remove('active');
    successMsg.classList.remove('active');
  });

  loadSampleBtn.addEventListener('click', () => {
    jsonInput.value = JSON.stringify(sampleJSON, null, 2);
    validate(true, false);
  });

  copyBtn.addEventListener('click', () => {
    const outputText = outputBody.textContent;
    if (!outputText) {
      window.showToast('No output to copy!', 'error');
      return;
    }
    navigator.clipboard.writeText(outputText)
      .then(() => window.showToast('JSON copied to clipboard!'))
      .catch(() => window.showToast('Failed to copy JSON.', 'error'));
  });

  downloadBtn.addEventListener('click', () => {
    const outputText = outputBody.textContent;
    if (!outputText) {
      window.showToast('No output to download!', 'error');
      return;
    }
    const blob = new Blob([outputText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'devtools_prettified.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
});
