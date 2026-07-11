document.addEventListener('DOMContentLoaded', () => {
  const cronExpression = document.getElementById('cronExpression');
  const cronDescription = document.getElementById('cronDescription');
  const nextRunsList = document.getElementById('nextRunsList');
  const copyBtn = document.getElementById('copyBtn');
  const errorMsg = document.getElementById('errorMessage');

  // Input Controls
  const cronMinute = document.getElementById('cronMinute');
  const cronHour = document.getElementById('cronHour');
  const cronDayOfMonth = document.getElementById('cronDayOfMonth');
  const cronMonth = document.getElementById('cronMonth');
  const cronDayOfWeek = document.getElementById('cronDayOfWeek');

  // Parse expression elements to human readable text
  function cronToText(expr) {
    const parts = expr.split(/\s+/);
    if (parts.length < 5) return 'Invalid expression structure.';

    const [min, hr, dom, mon, dow] = parts;

    let minText = parseFieldText(min, 'minute', 'every minute', 'minute ', 60);
    let hrText = parseFieldText(hr, 'hour', 'every hour', 'hour ', 24);
    let domText = parseFieldText(dom, 'day of month', 'every day', 'day ', 31);
    let monText = parseMonthText(mon);
    let dowText = parseDayOfWeekText(dow);

    return `At ${minText}, ${hrText}, ${domText}, ${monText}, ${dowText}.`;
  }

  function parseFieldText(field, type, everyTxt, nameTxt, limit) {
    if (field === '*') return everyTxt;
    if (field.startsWith('*/')) {
      const step = field.split('/')[1];
      return `every ${step} ${type}s`;
    }
    if (field.includes(',')) {
      return `at ${type}s: ${field}`;
    }
    if (field.includes('-')) {
      const [start, end] = field.split('-');
      return `during ${type}s ${start} through ${end}`;
    }
    return `at ${type} ${field}`;
  }

  function parseMonthText(field) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (field === '*') return 'every month';
    if (field.includes(',')) {
      const parts = field.split(',').map(v => months[parseInt(v) - 1] || v);
      return `in ${parts.join(', ')}`;
    }
    if (field.includes('-')) {
      const [start, end] = field.split('-');
      return `from ${months[parseInt(start) - 1] || start} through ${months[parseInt(end) - 1] || end}`;
    }
    return `in ${months[parseInt(field) - 1] || field}`;
  }

  function parseDayOfWeekText(field) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (field === '*') return 'every day of the week';
    if (field.includes(',')) {
      const parts = field.split(',').map(v => days[parseInt(v)] || v);
      return `on ${parts.join(', ')}`;
    }
    if (field.includes('-')) {
      const [start, end] = field.split('-');
      return `from ${days[parseInt(start)] || start} through ${days[parseInt(end)] || end}`;
    }
    return `on ${days[parseInt(field)] || field}`;
  }

  // Parse values array for a cron field
  function parseFieldValues(field, min, max) {
    if (field === '*') {
      const arr = [];
      for (let i = min; i <= max; i++) arr.push(i);
      return arr;
    }
    if (field.startsWith('*/')) {
      const step = parseInt(field.split('/')[1]);
      const arr = [];
      for (let i = min; i <= max; i += step) arr.push(i);
      return arr;
    }
    if (field.includes(',')) {
      return field.split(',').map(v => parseInt(v));
    }
    if (field.includes('-')) {
      const [start, end] = field.split('-').map(v => parseInt(v));
      const arr = [];
      for (let i = start; i <= end; i++) arr.push(i);
      return arr;
    }
    return [parseInt(field)];
  }

  // Generate next 5 run times
  function generateNextRuns(expr) {
    errorMsg.classList.remove('active');
    nextRunsList.innerHTML = '';
    
    const parts = expr.split(/\s+/);
    if (parts.length < 5) return;

    try {
      const mins = parseFieldValues(parts[0], 0, 59);
      const hrs = parseFieldValues(parts[1], 0, 23);
      const doms = parseFieldValues(parts[2], 1, 31);
      const mons = parseFieldValues(parts[3], 1, 12);
      // DOW maps 0-7, where both 0 and 7 can mean Sunday
      const dows = parseFieldValues(parts[4], 0, 7).map(v => v === 7 ? 0 : v);

      const nextRuns = [];
      let current = new Date();
      // Start from next minute
      current.setSeconds(0);
      current.setMilliseconds(0);
      current.setMinutes(current.getMinutes() + 1);

      // Iterate forward to find matches
      // Limit search to next 1 year to avoid freezing
      const endLimit = new Date();
      endLimit.setFullYear(endLimit.getFullYear() + 1);

      while (nextRuns.length < 5 && current < endLimit) {
        const minVal = current.getMinutes();
        const hrVal = current.getHours();
        const domVal = current.getDate();
        const monVal = current.getMonth() + 1; // JS month is 0-11
        const dowVal = current.getDay(); // JS day is 0-6 (Sunday is 0)

        const minMatch = mins.includes(minVal);
        const hrMatch = hrs.includes(hrVal);
        const domMatch = doms.includes(domVal);
        const monMatch = mons.includes(monVal);
        const dowMatch = dows.includes(dowVal);

        if (minMatch && hrMatch && domMatch && monMatch && dowMatch) {
          nextRuns.push(new Date(current));
        }

        // Fast forward depending on matches to make search efficient
        if (!monMatch) {
          current.setMonth(current.getMonth() + 1);
          current.setDate(1);
          current.setHours(0);
          current.setMinutes(0);
        } else if (!domMatch) {
          current.setDate(current.getDate() + 1);
          current.setHours(0);
          current.setMinutes(0);
        } else if (!hrMatch) {
          current.setHours(current.getHours() + 1);
          current.setMinutes(0);
        } else {
          current.setMinutes(current.getMinutes() + 1);
        }
      }

      if (nextRuns.length === 0) {
        nextRunsList.innerHTML = '<li>No executions match in the next 12 months.</li>';
      } else {
        nextRunsList.innerHTML = nextRuns.map(date => `
          <li>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem; vertical-align: middle; color: var(--accent);"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            ${date.toLocaleString()}
          </li>
        `).join('');
      }
    } catch (e) {
      errorMsg.textContent = 'Invalid expression. Check fields format.';
      errorMsg.classList.add('active');
    }
  }

  function updateFromInputs() {
    const expr = `${cronMinute.value} ${cronHour.value} ${cronDayOfMonth.value} ${cronMonth.value} ${cronDayOfWeek.value}`;
    cronExpression.value = expr;
    updateExplanation(expr);
  }

  function updateExplanation(expr) {
    cronDescription.textContent = cronToText(expr);
    generateNextRuns(expr);
  }

  // Event Listeners for inputs
  [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek].forEach(el => {
    if (el) el.addEventListener('change', updateFromInputs);
  });

  if (cronExpression) {
    cronExpression.addEventListener('input', (e) => {
      const expr = e.target.value.trim();
      const parts = expr.split(/\s+/);
      if (parts.length === 5) {
        cronMinute.value = parts[0];
        cronHour.value = parts[1];
        cronDayOfMonth.value = parts[2];
        cronMonth.value = parts[3];
        cronDayOfWeek.value = parts[4];
        updateExplanation(expr);
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = cronExpression.value;
      if (!text) return;
      navigator.clipboard.writeText(text)
        .then(() => window.showToast('Cron expression copied!'))
        .catch(() => window.showToast('Failed to copy.', 'error'));
    });
  }

  // Initial update
  updateFromInputs();
});
