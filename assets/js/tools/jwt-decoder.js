document.addEventListener('DOMContentLoaded', () => {
  const jwtInput = document.getElementById('jwtInput');
  const decodeBtn = document.getElementById('decodeBtn');
  const clearBtn = document.getElementById('clearBtn');
  const loadSampleBtn = document.getElementById('loadSampleBtn');
  const copyHeaderBtn = document.getElementById('copyHeaderBtn');
  const copyPayloadBtn = document.getElementById('copyPayloadBtn');
  
  const headerOutput = document.getElementById('headerOutput');
  const payloadOutput = document.getElementById('payloadOutput');
  const metadataOutput = document.getElementById('metadataOutput');
  const errorMsg = document.getElementById('errorMessage');

  const sampleJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE4MDExMTIwMjIsImFkbWluIjp0cnVlLCJyb2xlcyI6WyJkZXZlbG9wZXIiLCJhZG1pbiJdfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  function decodeJWT() {
    errorMsg.classList.remove('active');
    headerOutput.textContent = '';
    payloadOutput.textContent = '';
    metadataOutput.innerHTML = '';
    
    const token = jwtInput.value.trim();
    if (!token) {
      errorMsg.textContent = 'Please enter a JWT token to decode.';
      errorMsg.classList.add('active');
      return;
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      errorMsg.textContent = 'Invalid JWT structure. A JWT must consist of three parts separated by dots (.)';
      errorMsg.classList.add('active');
      return;
    }

    try {
      // Helper function to base64url decode
      const base64UrlDecode = (str) => {
        let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        // Add padding
        while (base64.length % 4) {
          base64 += '=';
        }
        return decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
      };

      const headerJSON = JSON.parse(base64UrlDecode(parts[0]));
      const payloadJSON = JSON.parse(base64UrlDecode(parts[1]));

      headerOutput.textContent = JSON.stringify(headerJSON, null, 2);
      payloadOutput.textContent = JSON.stringify(payloadJSON, null, 2);

      // Extract metadata
      let metaHTML = '<ul>';
      if (payloadJSON.exp) {
        const expDate = new Date(payloadJSON.exp * 1000);
        metaHTML += `<li><strong>Expiration Time (exp):</strong> ${expDate.toLocaleString()}</li>`;
      }
      if (payloadJSON.iat) {
        const iatDate = new Date(payloadJSON.iat * 1000);
        metaHTML += `<li><strong>Issued At (iat):</strong> ${iatDate.toLocaleString()}</li>`;
      }
      if (payloadJSON.nbf) {
        const nbfDate = new Date(payloadJSON.nbf * 1000);
        metaHTML += `<li><strong>Not Before (nbf):</strong> ${nbfDate.toLocaleString()}</li>`;
      }
      if (payloadJSON.sub) {
        metaHTML += `<li><strong>Subject (sub):</strong> ${payloadJSON.sub}</li>`;
      }
      if (payloadJSON.iss) {
        metaHTML += `<li><strong>Issuer (iss):</strong> ${payloadJSON.iss}</li>`;
      }
      metaHTML += '</ul>';
      metadataOutput.innerHTML = metaHTML;

    } catch (e) {
      errorMsg.textContent = `Error decoding token: ${e.message}. Ensure the token is base64url encoded correctly.`;
      errorMsg.classList.add('active');
    }
  }

  // Event Listeners
  decodeBtn.addEventListener('click', decodeJWT);
  
  clearBtn.addEventListener('click', () => {
    jwtInput.value = '';
    headerOutput.textContent = '';
    payloadOutput.textContent = '';
    metadataOutput.innerHTML = '';
    errorMsg.classList.remove('active');
  });

  loadSampleBtn.addEventListener('click', () => {
    jwtInput.value = sampleJWT;
    decodeJWT();
  });

  copyHeaderBtn.addEventListener('click', () => {
    const text = headerOutput.textContent;
    if (!text) {
      window.showToast('No Header to copy!', 'error');
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => window.showToast('Header JSON copied!'))
      .catch(() => window.showToast('Failed to copy Header JSON.', 'error'));
  });

  copyPayloadBtn.addEventListener('click', () => {
    const text = payloadOutput.textContent;
    if (!text) {
      window.showToast('No Payload to copy!', 'error');
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => window.showToast('Payload JSON copied!'))
      .catch(() => window.showToast('Failed to copy Payload JSON.', 'error'));
  });
});
