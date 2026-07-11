// Theme Management
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// Check stored theme or system preference
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
}

// Mobile Menu Toggle
const menuToggleBtn = document.getElementById('menuToggleBtn');
const navMenu = document.getElementById('navMenu');

if (menuToggleBtn && navMenu) {
  menuToggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Global Search
const searchInput = document.getElementById('globalSearchInput');
const searchDropdown = document.getElementById('searchResultsDropdown');

// List of all tools for search index
const searchToolsIndex = [
  { name: 'JSON Validator', path: '/tools/json-validator.html', desc: 'Validate, format, and prettify JSON data with syntax error detection.', tags: ['json', 'pretty', 'format', 'lint', 'validator'] },
  { name: 'JWT Decoder', path: '/tools/jwt-decoder.html', desc: 'Decode JSON Web Tokens (JWT) to inspect header, payload, and signature values.', tags: ['jwt', 'token', 'decode', 'json web token', 'auth'] },
  { name: 'Regex Tester', path: '/tools/regex-tester.html', desc: 'Test regular expressions against target text with real-time match highlighting.', tags: ['regex', 'regular expression', 'test', 'match', 'pattern'] },
  { name: 'URL Encoder', path: '/tools/url-encoder.html', desc: 'Convert special characters in strings into URL-safe percent-encoded values.', tags: ['url', 'encode', 'escape', 'percent-encode', 'string'] },
  { name: 'URL Decoder', path: '/tools/url-decoder.html', desc: 'Decode percent-encoded characters back into clean text strings.', tags: ['url', 'decode', 'unescape', 'percent-decode', 'query'] },
  { name: 'Cron Expression Generator', path: '/tools/cron-generator.html', desc: 'Easily build cron schedules and see human-readable descriptions in real-time.', tags: ['cron', 'scheduler', 'expression', 'tab', 'time'] },
  { name: 'UUID Generator', path: '/tools/uuid-generator.html', desc: 'Generate single or bulk Version 4 (random) and Version 1 (time-based) UUIDs.', tags: ['uuid', 'guid', 'id', 'generator', 'unique'] },
  { name: 'SHA256 Generator', path: '/tools/sha256-generator.html', desc: 'Hash text data using the secure SHA-256 algorithm securely in your browser.', tags: ['sha256', 'hash', 'cryptography', 'checksum', 'sha-2'] },
  { name: 'MD5 Generator', path: '/tools/md5-generator.html', desc: 'Compute the 128-bit MD5 checksum signature of any input string.', tags: ['md5', 'hash', 'cryptography', 'checksum', 'signature'] },
  { name: 'Hash Generator', path: '/tools/hash-generator.html', desc: 'Generate SHA1, SHA256, SHA512, MD5, SHA384, and SHA224 hashes simultaneously.', tags: ['hash', 'generator', 'sha512', 'sha1', 'sha384', 'sha224', 'cryptography'] },
  { name: 'Diff Checker', path: '/tools/diff-checker.html', desc: 'Compare two text snippets side-by-side or inline to spot differences quickly.', tags: ['diff', 'compare', 'checker', 'text', 'match'] },
  { name: 'API Tester', path: '/tools/api-tester.html', desc: 'Make HTTP requests (GET, POST, etc.) and view header, body responses in real-time.', tags: ['api', 'tester', 'fetch', 'http', 'request', 'postman'] }
];

if (searchInput && searchDropdown) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchDropdown.innerHTML = '';
      searchDropdown.classList.remove('active');
      return;
    }

    const matches = searchToolsIndex.filter(tool => {
      return tool.name.toLowerCase().includes(query) || 
             tool.desc.toLowerCase().includes(query) || 
             tool.tags.some(tag => tag.includes(query));
    });

    if (matches.length === 0) {
      searchDropdown.innerHTML = `<div class="search-result-item" style="color: var(--text-muted); pointer-events: none;">No matching tools found</div>`;
    } else {
      searchDropdown.innerHTML = matches.map(tool => `
        <a href="${tool.path}" class="search-result-item">
          <div class="search-result-name">${tool.name}</div>
          <div class="search-result-desc">${tool.desc}</div>
        </a>
      `).join('');
    }
    searchDropdown.classList.add('active');
  });

  // Close dropdown on clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove('active');
    }
  });
}

// Toast System
const toastEl = document.getElementById('toastNotification');
const toastMsg = document.getElementById('toastMessage');

function showToast(message, type = 'success') {
  if (!toastEl || !toastMsg) return;
  
  // Reset classes
  toastEl.className = 'toast';
  
  if (type === 'success') {
    toastEl.classList.add('toast-success');
  } else if (type === 'error') {
    toastEl.classList.add('toast-error');
  }
  
  toastMsg.textContent = message;
  toastEl.classList.add('active');
  
  setTimeout(() => {
    toastEl.classList.remove('active');
  }, 3000);
}

// Share Button Logic
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
        .then(() => showToast('Tool link copied to clipboard!'))
        .catch(() => showToast('Could not copy link.', 'error'));
    } else {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = url;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast('Tool link copied to clipboard!');
    }
  });
}

// FAQ Accordion Toggle
const faqAccordion = document.getElementById('faqAccordion');
if (faqAccordion) {
  faqAccordion.addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');
    if (!question) return;
    
    const item = question.parentNode;
    const isActive = item.classList.contains('active');
    
    // Close other items
    const items = faqAccordion.querySelectorAll('.faq-item');
    items.forEach(el => el.classList.remove('active'));
    
    // Toggle clicked item
    if (!isActive) {
      item.classList.add('active');
    }
  });
}

// Expose utilities globally
window.showToast = showToast;
