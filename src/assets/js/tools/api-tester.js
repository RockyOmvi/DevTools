document.addEventListener('DOMContentLoaded', () => {
  const apiUrlInput = document.getElementById('apiUrl');
  const apiMethodSelect = document.getElementById('apiMethod');
  const sendRequestBtn = document.getElementById('sendRequestBtn');
  const clearBtn = document.getElementById('clearBtn');
  const addHeaderBtn = document.getElementById('addHeaderBtn');
  const headersList = document.getElementById('headersList');
  const requestBody = document.getElementById('requestBody');
  const responseStatus = document.getElementById('responseStatus');
  const responseTime = document.getElementById('responseTime');
  const responseHeaders = document.getElementById('responseHeaders');
  const responseBody = document.getElementById('responseBody');
  const responseWrapper = document.getElementById('responseWrapper');
  const errorMsg = document.getElementById('errorMessage');
  const mockModeCheckbox = document.getElementById('mockMode');

  // Tabs for Headers vs Body
  const tabHeadersBtn = document.getElementById('tabHeaders');
  const tabBodyBtn = document.getElementById('tabBody');
  const paneHeaders = document.getElementById('paneHeaders');
  const paneBody = document.getElementById('paneBody');

  // Tab switcher
  if (tabHeadersBtn && tabBodyBtn) {
    tabHeadersBtn.addEventListener('click', () => {
      tabHeadersBtn.classList.add('active');
      tabBodyBtn.classList.remove('active');
      paneHeaders.classList.add('active');
      paneBody.classList.remove('active');
    });

    tabBodyBtn.addEventListener('click', () => {
      tabBodyBtn.classList.add('active');
      tabHeadersBtn.classList.remove('active');
      paneBody.classList.add('active');
      paneHeaders.classList.remove('active');
    });
  }

  // Method select handling (disable body for GET)
  if (apiMethodSelect) {
    apiMethodSelect.addEventListener('change', () => {
      const method = apiMethodSelect.value;
      if (method === 'GET' || method === 'DELETE') {
        requestBody.disabled = true;
        requestBody.placeholder = 'Request body is disabled for GET / DELETE methods.';
      } else {
        requestBody.disabled = false;
        requestBody.placeholder = '{\n  "key": "value"\n}';
      }
    });
  }

  // Add Request Header Row
  if (addHeaderBtn) {
    addHeaderBtn.addEventListener('click', () => {
      const row = document.createElement('div');
      row.className = 'api-header-row';
      row.innerHTML = `
        <input type="text" placeholder="Key" class="form-control header-key" style="flex: 1;">
        <input type="text" placeholder="Value" class="form-control header-value" style="flex: 1;">
        <button type="button" class="btn btn-danger remove-header-btn" style="padding: 0.5rem 0.75rem;">&times;</button>
      `;
      headersList.appendChild(row);
    });
  }

  // Remove Request Header Row
  if (headersList) {
    headersList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-header-btn')) {
        e.target.closest('.api-header-row').remove();
      }
    });
  }

  // Perform Fetch or Mock Request
  async function makeRequest() {
    errorMsg.classList.remove('active');
    responseWrapper.style.display = 'none';
    
    let url = apiUrlInput.value.trim();
    if (!url) {
      errorMsg.textContent = 'Please enter a URL to test.';
      errorMsg.classList.add('active');
      return;
    }

    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
      apiUrlInput.value = url;
    }

    const method = apiMethodSelect.value;
    const isMock = mockModeCheckbox ? mockModeCheckbox.checked : false;

    // Build Headers
    const headers = {};
    const keyInputs = document.querySelectorAll('.header-key');
    const valInputs = document.querySelectorAll('.header-value');
    keyInputs.forEach((ki, idx) => {
      const k = ki.value.trim();
      const v = valInputs[idx].value.trim();
      if (k) headers[k] = v;
    });

    const bodyVal = requestBody.value.trim();
    let body = null;
    if (method !== 'GET' && method !== 'DELETE' && bodyVal) {
      body = bodyVal;
    }

    const startTime = performance.now();

    if (isMock) {
      // Simulate API response
      setTimeout(() => {
        const endTime = performance.now();
        const duration = Math.round(endTime - startTime);
        
        responseStatus.textContent = '200 OK (Mocked)';
        responseStatus.style.backgroundColor = 'var(--success-light)';
        responseStatus.style.color = 'var(--success)';
        responseTime.textContent = `Time: ${duration} ms`;
        
        responseHeaders.textContent = `content-type: application/json\nx-powered-by: devtools-hub-mock\ncache-control: no-cache`;
        
        // Return dummy mock body matching whatever method/url they typed
        const mockData = {
          success: true,
          message: "Mock API response generated successfully.",
          request: {
            url: url,
            method: method,
            headers: headers,
            body: body ? JSON.parse(body) : null
          },
          timestamp: new Date().toISOString()
        };
        responseBody.textContent = JSON.stringify(mockData, null, 2);
        responseWrapper.style.display = 'block';
      }, 300);
      return;
    }

    // Real API Request
    try {
      const options = {
        method,
        headers
      };
      if (body) {
        options.body = body;
        if (!options.headers['Content-Type']) {
          options.headers['Content-Type'] = 'application/json';
        }
      }

      const res = await fetch(url, options);
      const endTime = performance.now();
      const duration = Math.round(endTime - startTime);

      // Status Indicator
      responseStatus.textContent = `${res.status} ${res.statusText}`;
      if (res.ok) {
        responseStatus.style.backgroundColor = 'var(--success-light)';
        responseStatus.style.color = 'var(--success)';
      } else {
        responseStatus.style.backgroundColor = 'var(--danger-light)';
        responseStatus.style.color = 'var(--danger)';
      }
      responseTime.textContent = `Time: ${duration} ms`;

      // Headers Indicator
      let headersStr = '';
      res.headers.forEach((val, key) => {
        headersStr += `${key}: ${val}\n`;
      });
      responseHeaders.textContent = headersStr || 'No response headers returned.';

      // Body Indicator
      const contentType = res.headers.get('content-type') || '';
      const text = await res.text();
      if (contentType.includes('application/json')) {
        try {
          responseBody.textContent = JSON.stringify(JSON.parse(text), null, 2);
        } catch {
          responseBody.textContent = text;
        }
      } else {
        responseBody.textContent = text;
      }

      responseWrapper.style.display = 'block';
    } catch (e) {
      errorMsg.innerHTML = `
        <strong>Network Error / CORS Block:</strong><br>
        ${e.message}<br><br>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">
          Note: Fetching API resources directly in-browser is subject to Cross-Origin Resource Sharing (CORS) rules. 
          If the remote server doesn't send CORS headers allowing this website, the request fails. 
          Tick the <strong>"Mock Response"</strong> checkbox to preview or mock api request flows.
        </span>
      `;
      errorMsg.classList.add('active');
    }
  }

  if (sendRequestBtn) {
    sendRequestBtn.addEventListener('click', makeRequest);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      apiUrlInput.value = '';
      apiMethodSelect.value = 'GET';
      headersList.innerHTML = '';
      requestBody.value = '';
      responseWrapper.style.display = 'none';
      errorMsg.classList.remove('active');
      // Dispatch change to trigger form controls update
      apiMethodSelect.dispatchEvent(new Event('change'));
    });
  }
});
