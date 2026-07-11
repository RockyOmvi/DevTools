document.addEventListener('DOMContentLoaded', () => {
  const originalText = document.getElementById('originalText');
  const modifiedText = document.getElementById('modifiedText');
  const compareBtn = document.getElementById('compareBtn');
  const clearBtn = document.getElementById('clearBtn');
  const loadSampleBtn = document.getElementById('loadSampleBtn');
  const diffOutput = document.getElementById('diffOutput');
  const diffLeft = document.getElementById('diffLeft');
  const diffRight = document.getElementById('diffRight');
  const errorMsg = document.getElementById('errorMessage');

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getLCSDiff(arr1, arr2) {
    const dp = Array(arr1.length + 1).fill(null).map(() => Array(arr2.length + 1).fill(0));
    
    for (let i = 1; i <= arr1.length; i++) {
      for (let j = 1; j <= arr2.length; j++) {
        if (arr1[i - 1] === arr2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    let i = arr1.length;
    let j = arr2.length;
    const diff = [];

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && arr1[i - 1] === arr2[j - 1]) {
        diff.unshift({ type: 'unchanged', val1: arr1[i - 1], val2: arr2[j - 1] });
        i--;
        j--;
      } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
        diff.unshift({ type: 'added', val1: '', val2: arr2[j - 1] });
        j--;
      } else {
        diff.unshift({ type: 'removed', val1: arr1[i - 1], val2: '' });
        i--;
      }
    }
    return diff;
  }

  function performDiff() {
    errorMsg.classList.remove('active');
    diffLeft.innerHTML = '';
    diffRight.innerHTML = '';
    diffOutput.style.display = 'none';

    const text1 = originalText.value;
    const text2 = modifiedText.value;

    if (!text1 && !text2) {
      errorMsg.textContent = 'Please enter text in at least one field to compare.';
      errorMsg.classList.add('active');
      return;
    }

    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');

    const diffResults = getLCSDiff(lines1, lines2);

    let leftHTML = '';
    let rightHTML = '';

    diffResults.forEach((line) => {
      if (line.type === 'unchanged') {
        leftHTML += `<div>${escapeHTML(line.val1) || '&nbsp;'}</div>`;
        rightHTML += `<div>${escapeHTML(line.val2) || '&nbsp;'}</div>`;
      } else if (line.type === 'removed') {
        leftHTML += `<div class="diff-removed">- ${escapeHTML(line.val1) || '&nbsp;'}</div>`;
        rightHTML += `<div>&nbsp;</div>`;
      } else if (line.type === 'added') {
        leftHTML += `<div>&nbsp;</div>`;
        rightHTML += `<div class="diff-added">+ ${escapeHTML(line.val2) || '&nbsp;'}</div>`;
      }
    });

    diffLeft.innerHTML = leftHTML;
    diffRight.innerHTML = rightHTML;
    diffOutput.style.display = 'grid';
  }

  compareBtn.addEventListener('click', performDiff);

  clearBtn.addEventListener('click', () => {
    originalText.value = '';
    modifiedText.value = '';
    diffLeft.innerHTML = '';
    diffRight.innerHTML = '';
    diffOutput.style.display = 'none';
    errorMsg.classList.remove('active');
  });

  loadSampleBtn.addEventListener('click', () => {
    originalText.value = `// User class template
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isActive = true;
  }

  getInfo() {
    return \`User: \${this.name} (\${this.email})\`;
  }
}`;
    modifiedText.value = `// Refactored User class
class User {
  constructor(name, email, role = 'developer') {
    this.name = name;
    this.email = email;
    this.role = role;
    this.isActive = false; // default changed
  }

  getProfileInfo() {
    return \`User profile: \${this.name} (\${this.email}) - \${this.role}\`;
  }
}`;
    performDiff();
  });
});
