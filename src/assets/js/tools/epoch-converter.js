// Unix Epoch & Timestamp Converter
(function() {
  const currentSecondsEl = document.getElementById('currentEpochSeconds');
  const currentMillisEl = document.getElementById('currentEpochMillis');
  const copySecondsBtn = document.getElementById('copySecondsBtn');
  const copyMillisBtn = document.getElementById('copyMillisBtn');

  // Live ticking clock
  function updateLiveClock() {
    const now = Date.now();
    const sec = Math.floor(now / 1000);
    if (currentSecondsEl) currentSecondsEl.textContent = sec.toLocaleString('en-US', { useGrouping: false });
    if (currentMillisEl) currentMillisEl.textContent = now.toLocaleString('en-US', { useGrouping: false });
  }

  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  if (copySecondsBtn && currentSecondsEl) {
    copySecondsBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(currentSecondsEl.textContent).then(() => {
        if (typeof showToast === 'function') showToast('Current epoch seconds copied to clipboard');
      });
    });
  }

  if (copyMillisBtn && currentMillisEl) {
    copyMillisBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(currentMillisEl.textContent).then(() => {
        if (typeof showToast === 'function') showToast('Current epoch milliseconds copied to clipboard');
      });
    });
  }

  // --- Timestamp to Human Date ---
  const tsInput = document.getElementById('tsInput');
  const convertTsBtn = document.getElementById('convertTsBtn');
  const setNowBtn = document.getElementById('setNowBtn');
  const clearTsBtn = document.getElementById('clearTsBtn');
  const tsError = document.getElementById('tsError');
  const tsResultContainer = document.getElementById('tsResultContainer');

  const outUtc = document.getElementById('outUtc');
  const outLocal = document.getElementById('outLocal');
  const outIso = document.getElementById('outIso');
  const outRfc = document.getElementById('outRfc');
  const outRelative = document.getElementById('outRelative');

  function getRelativeTime(timestampMs) {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    const elapsedSeconds = Math.round((timestampMs - Date.now()) / 1000);
    
    const cuts = [
      { unit: 'year', value: 31536000 },
      { unit: 'month', value: 2592000 },
      { unit: 'day', value: 86400 },
      { unit: 'hour', value: 3600 },
      { unit: 'minute', value: 60 },
      { unit: 'second', value: 1 }
    ];

    for (const cut of cuts) {
      if (Math.abs(elapsedSeconds) >= cut.value || cut.unit === 'second') {
        const delta = Math.round(elapsedSeconds / cut.value);
        return rtf.format(delta, cut.unit);
      }
    }
    return 'just now';
  }

  function convertTimestamp() {
    if (!tsInput) return;
    const raw = tsInput.value.trim();
    if (tsError) tsError.style.display = 'none';

    if (!raw) {
      if (tsError) {
        tsError.textContent = 'Please enter a numeric Unix timestamp.';
        tsError.style.display = 'block';
      }
      return;
    }

    let num = Number(raw);
    if (isNaN(num)) {
      if (tsError) {
        tsError.textContent = 'Invalid timestamp. Must be a valid integer or decimal.';
        tsError.style.display = 'block';
      }
      return;
    }

    // Auto-detect seconds vs milliseconds (seconds have 10 digits or fewer, milliseconds have 13)
    let ms = num;
    let isSeconds = false;
    if (Math.abs(num) < 10000000000) {
      // 10 digits or fewer: seconds
      ms = num * 1000;
      isSeconds = true;
    }

    const date = new Date(ms);
    if (isNaN(date.getTime())) {
      if (tsError) {
        tsError.textContent = 'Timestamp out of range or invalid date.';
        tsError.style.display = 'block';
      }
      return;
    }

    if (outUtc) outUtc.textContent = date.toUTCString();
    if (outLocal) outLocal.textContent = date.toString();
    if (outIso) outIso.textContent = date.toISOString();
    if (outRfc) outRfc.textContent = date.toUTCString();
    if (outRelative) outRelative.textContent = getRelativeTime(ms) + (isSeconds ? ' (Assuming seconds)' : ' (Assuming milliseconds)');

    if (tsResultContainer) tsResultContainer.style.display = 'block';
  }

  if (convertTsBtn) convertTsBtn.addEventListener('click', convertTimestamp);
  if (tsInput) {
    tsInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') convertTimestamp();
    });
  }

  if (setNowBtn && tsInput) {
    setNowBtn.addEventListener('click', () => {
      tsInput.value = Math.floor(Date.now() / 1000);
      convertTimestamp();
    });
  }

  if (clearTsBtn && tsInput) {
    clearTsBtn.addEventListener('click', () => {
      tsInput.value = '';
      if (tsError) tsError.style.display = 'none';
      if (tsResultContainer) tsResultContainer.style.display = 'none';
    });
  }

  // --- Human Date to Timestamp ---
  const dateInput = document.getElementById('dateInput');
  const convertDateBtn = document.getElementById('convertDateBtn');
  const setDateNowBtn = document.getElementById('setDateNowBtn');
  const dateError = document.getElementById('dateError');
  const dateResultContainer = document.getElementById('dateResultContainer');
  const outDateSeconds = document.getElementById('outDateSeconds');
  const outDateMillis = document.getElementById('outDateMillis');

  function convertHumanDate() {
    if (!dateInput) return;
    const raw = dateInput.value.trim();
    if (dateError) dateError.style.display = 'none';

    if (!raw) {
      if (dateError) {
        dateError.textContent = 'Please enter or select a date/time string.';
        dateError.style.display = 'block';
      }
      return;
    }

    const date = new Date(raw);
    if (isNaN(date.getTime())) {
      if (dateError) {
        dateError.textContent = 'Could not parse date format. Use ISO format (e.g. 2026-10-15 14:30:00).';
        dateError.style.display = 'block';
      }
      return;
    }

    const ms = date.getTime();
    const sec = Math.floor(ms / 1000);

    if (outDateSeconds) outDateSeconds.textContent = sec;
    if (outDateMillis) outDateMillis.textContent = ms;
    if (dateResultContainer) dateResultContainer.style.display = 'block';
  }

  if (convertDateBtn) convertDateBtn.addEventListener('click', convertHumanDate);

  if (setDateNowBtn && dateInput) {
    setDateNowBtn.addEventListener('click', () => {
      const now = new Date();
      // Format as YYYY-MM-DDTHH:mm:ss
      const pad = (n) => String(n).padStart(2, '0');
      dateInput.value = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
      convertHumanDate();
    });
  }

  // Generic copy helper for data-copy elements
  document.querySelectorAll('[data-copy-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-id');
      const el = document.getElementById(targetId);
      if (el) {
        navigator.clipboard.writeText(el.textContent.trim()).then(() => {
          if (typeof showToast === 'function') showToast('Copied to clipboard');
        });
      }
    });
  });

  // Initial trigger with current time
  if (tsInput && !tsInput.value) {
    tsInput.value = Math.floor(Date.now() / 1000);
    convertTimestamp();
  }
})();
