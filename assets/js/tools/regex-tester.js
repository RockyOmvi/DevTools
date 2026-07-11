document.addEventListener('DOMContentLoaded', () => {
  const regexPattern = document.getElementById('regexPattern');
  const testText = document.getElementById('testText');
  const matchDetails = document.getElementById('matchDetails');
  const highlightedText = document.getElementById('highlightedText');
  const errorMsg = document.getElementById('errorMessage');
  const clearBtn = document.getElementById('clearBtn');
  const loadSampleBtn = document.getElementById('loadSampleBtn');

  // Checkboxes for flags
  const flagG = document.getElementById('flagG');
  const flagI = document.getElementById('flagI');
  const flagM = document.getElementById('flagM');
  const flagS = document.getElementById('flagS');

  function getFlags() {
    let flags = '';
    if (flagG && flagG.checked) flags += 'g';
    if (flagI && flagI.checked) flags += 'i';
    if (flagM && flagM.checked) flags += 'm';
    if (flagS && flagS.checked) flags += 's';
    return flags;
  }

  function runRegex() {
    errorMsg.classList.remove('active');
    matchDetails.innerHTML = '';
    highlightedText.innerHTML = '';

    const pattern = regexPattern.value;
    const text = testText.value;
    const flags = getFlags();

    if (!pattern) {
      highlightedText.textContent = text;
      matchDetails.innerHTML = '<p style="color: var(--text-muted);">Enter a regular expression pattern to start matching.</p>';
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      
      // Let's perform matches
      let matches = [];
      if (flags.includes('g')) {
        let match;
        // Avoid infinite loop if regex is empty/matches zero characters
        let lastIndex = -1;
        while ((match = regex.exec(text)) !== null) {
          if (regex.lastIndex === lastIndex) {
            regex.lastIndex++;
          }
          lastIndex = regex.lastIndex;
          matches.push(match);
          if (match.index === text.length) break;
        }
      } else {
        const match = regex.exec(text);
        if (match) matches.push(match);
      }

      if (matches.length === 0) {
        highlightedText.textContent = text;
        matchDetails.innerHTML = '<p style="color: var(--danger);">No matches found.</p>';
        return;
      }

      // Display Details
      let detailsHTML = `
        <p style="font-weight: 600; margin-bottom: 0.5rem;">Matches Found: ${matches.length}</p>
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border);">
              <th style="padding: 0.5rem;">Match</th>
              <th style="padding: 0.5rem;">Index</th>
              <th style="padding: 0.5rem;">Groups</th>
            </tr>
          </thead>
          <tbody>
      `;

      matches.forEach((m, idx) => {
        const groupList = m.slice(1).map((g, gIdx) => `Group ${gIdx + 1}: "${g}"`).join(', ');
        detailsHTML += `
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 0.5rem; font-family: var(--font-mono); background-color: rgba(99, 102, 241, 0.1); border-radius: var(--radius-sm);">${escapeHTML(m[0])}</td>
            <td style="padding: 0.5rem;">${m.index}</td>
            <td style="padding: 0.5rem; color: var(--text-secondary);">${groupList ? groupList : 'None'}</td>
          </tr>
        `;
      });
      detailsHTML += `</tbody></table>`;
      matchDetails.innerHTML = detailsHTML;

      // Render Highlights
      let highlightHTML = '';
      let lastIdx = 0;
      
      // Sort matches by index to handle them in order
      matches.sort((a, b) => a.index - b.index);

      matches.forEach((m) => {
        // Skip overlap (can happen if flag g is not configured correctly)
        if (m.index < lastIdx) return;
        
        // Text before the match
        highlightHTML += escapeHTML(text.substring(lastIdx, m.index));
        
        // Highlighted match
        highlightHTML += `<span style="background-color: rgba(99, 102, 241, 0.35); border-bottom: 2px solid var(--accent); font-weight: 500;">${escapeHTML(m[0])}</span>`;
        
        lastIdx = m.index + m[0].length;
      });

      // Remainder of text
      highlightHTML += escapeHTML(text.substring(lastIdx));
      highlightedText.innerHTML = highlightHTML;

    } catch (e) {
      errorMsg.textContent = `Regex Error: ${e.message}`;
      errorMsg.classList.add('active');
      highlightedText.textContent = text;
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Event listeners
  [regexPattern, testText, flagG, flagI, flagM, flagS].forEach(el => {
    if (el) el.addEventListener('input', runRegex);
    if (el && el.type === 'checkbox') el.addEventListener('change', runRegex);
  });

  clearBtn.addEventListener('click', () => {
    regexPattern.value = '';
    testText.value = '';
    flagG.checked = true;
    flagI.checked = false;
    flagM.checked = false;
    flagS.checked = false;
    runRegex();
  });

  loadSampleBtn.addEventListener('click', () => {
    regexPattern.value = '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b';
    testText.value = 'Contact us at purushottamkumaroffical@gmail.com or admin@test-domain.org for technical assistance. Check mail at test.user_123@sub.company.co.';
    flagG.checked = true;
    flagI.checked = false;
    flagM.checked = false;
    flagS.checked = false;
    runRegex();
  });

  // Initial trigger
  runRegex();
});
