const workspaces = require('../workspaces.json');
const ws = workspaces['tools/regex-tester.html'];

module.exports = {
  filename: 'tools/regex-tester.html',
  name: 'Regex Tester & Debugger',
  metaTitle: 'Regex Tester Online - Test, Debug & Validate Regular Expressions',
  metaDesc: 'Interactive online Regular Expression (Regex) tester with real-time match highlighting, capture group extraction, and flags support. 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/regex-tester.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/regex-tester.html' },
    { name: 'Regex Tester', url: '/tools/regex-tester.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Verify and test your regular expressions in real-time. Features flag configurations and group matches inspection.',
  detailedDescription: `
    <p>A <strong>Regular Expression (Regex or RegExp)</strong> is a formal sequence of characters that specifies a search pattern in text. Originating from theoretical computer science and formalized in Unix utilities such as <code>grep</code> and <code>sed</code>, regular expressions have become an indispensable tool for software engineers across every programming discipline. From input validation (email addresses, phone numbers, UUIDs) and log file parsing to text transformation, lexical analysis, and search-and-replace refactoring, regex enables high-performance pattern matching.</p>

    <h3>How the Regular Expression Engine Works</h3>
    <p>Modern web browsers evaluate regular expressions using optimized finite-state automations (traditionally Non-deterministic Finite Automata or NFA engines). When an expression is compiled, the engine constructs an internal state machine that traverses your test string character by character, attempting to satisfy the specified sequence of tokens, character classes, quantifiers, and assertion anchors.</p>

    <h3>Standard Regex Flags in JavaScript (ECMAScript)</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Behavior & Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>g</code></td>
            <td>Global Search</td>
            <td>Finds all matches across the entire input string rather than terminating upon finding the first match.</td>
          </tr>
          <tr>
            <td><code>i</code></td>
            <td>Case-Insensitive</td>
            <td>Treats uppercase and lowercase characters as identical (e.g., <code>/[a-z]/i</code> matches "A" and "a").</td>
          </tr>
          <tr>
            <td><code>m</code></td>
            <td>Multiline Mode</td>
            <td>Changes start (<code>^</code>) and end (<code>$</code>) anchors to match the start and end of individual lines rather than the entire string.</td>
          </tr>
          <tr>
            <td><code>s</code></td>
            <td>DotAll Mode</td>
            <td>Allows the dot metacharacter (<code>.</code>) to match newline characters (<code>\\n</code>), which it typically skips.</td>
          </tr>
          <tr>
            <td><code>u</code></td>
            <td>Unicode Mode</td>
            <td>Enables full Unicode code point support and handles multi-byte surrogate pairs correctly.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Essential Regex Pattern Cheat Sheet</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Token</th>
            <th>Description & Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Character Classes</strong></td>
            <td><code>\\d</code>, <code>\\w</code>, <code>\\s</code></td>
            <td><code>\\d</code> (Digits 0-9), <code>\\w</code> (Alphanumeric + underscore), <code>\\s</code> (Whitespace/tabs/newlines).</td>
          </tr>
          <tr>
            <td><strong>Negated Classes</strong></td>
            <td><code>\\D</code>, <code>\\W</code>, <code>\\S</code></td>
            <td>Matches any character that is NOT a digit, word character, or whitespace respectively.</td>
          </tr>
          <tr>
            <td><strong>Quantifiers</strong></td>
            <td><code>*</code>, <code>+</code>, <code>?</code>, <code>{min,max}</code></td>
            <td><code>*</code> (0 or more), <code>+</code> (1 or more), <code>?</code> (0 or 1), <code>{2,5}</code> (between 2 and 5 repetitions).</td>
          </tr>
          <tr>
            <td><strong>Anchors</strong></td>
            <td><code>^</code>, <code>$</code>, <code>\\b</code></td>
            <td><code>^</code> (Start of string/line), <code>$</code> (End of string/line), <code>\\b</code> (Word boundary).</td>
          </tr>
          <tr>
            <td><strong>Groups & Lookahead</strong></td>
            <td><code>(abc)</code>, <code>(?:abc)</code>, <code>(?=abc)</code></td>
            <td><code>(abc)</code> (Capturing group), <code>(?:abc)</code> (Non-capturing group), <code>(?=abc)</code> (Positive lookahead assertion).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-info">
      <strong>Catastrophic Backtracking Alert:</strong> Poorly constructed regular expressions with nested quantifiers (such as <code>(a+)+$</code>) can cause NFA engines to evaluate an exponential number of states when presented with non-matching strings, causing CPU freezes known as <em>Regular Expression Denial of Service (ReDoS)</em>. Always test your patterns with realistic input lengths.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Enter Pattern:</strong> Type your regular expression into the pattern input box without enclosing slashes (e.g. <code>^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$</code>).</li>
      <li><strong>Toggle Flags:</strong> Click the flag toggles (<code>g</code> for global, <code>i</code> for case-insensitive, <code>m</code> for multiline) to set your desired matching behavior.</li>
      <li><strong>Input Test String:</strong> Paste or type your target test text into the test area. Matches will be highlighted dynamically as you type.</li>
      <li><strong>Inspect Capture Groups:</strong> Look at the match results breakdown to inspect overall match text, character index offsets, and extracted capture groups.</li>
      <li><strong>Troubleshoot Syntax Errors:</strong> If your pattern contains unbalanced brackets or invalid quantifier ranges, an inline warning will guide you to fix the syntax.</li>
    </ol>
  `,
  example: `
    <p><strong>Example 1: RFC 5322 Email Validation Pattern:</strong></p>
    <div class="code-snippet-block">^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$</div>

    <p style="margin-top: 1rem;"><strong>Example 2: Extracting ISO Date Components (YYYY-MM-DD):</strong></p>
    <div class="code-snippet-block">(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])</div>

    <p style="margin-top: 1rem;"><strong>Matching in JavaScript:</strong></p>
    <div class="code-snippet-block">const pattern = /(\\w+)@(\\w+\\.\\w+)/g;
const testStr = "Contact support@devtoolhubs.com or sales@devtoolhubs.com";
let match;
while ((match = pattern.exec(testStr)) !== null) {
  console.log(\`Found \${match[0]} at index \${match.index}. User: \${match[1]}, Domain: \${match[2]}\`);
}</div>

    <p style="margin-top: 1rem;"><strong>Matching in Python:</strong></p>
    <div class="code-snippet-block">import re
pattern = re.compile(r'(\\w+)@(\\w+\\.\\w+)')
matches = pattern.finditer("Contact support@devtoolhubs.com")
for m in matches:
    print(f"Match: {m.group(0)}, User: {m.group(1)}, Domain: {m.group(2)}")</div>
  `,
  benefits: `
    <ul>
      <li><strong>Real-Time Match Visualization:</strong> Instant visual feedback showing matched substring spans and indices directly within your test text.</li>
      <li><strong>Full Flag Configuration:</strong> Easily toggle global (<code>g</code>), case-insensitive (<code>i</code>), and multiline (<code>m</code>) search modes.</li>
      <li><strong>Capture Group Diagnostics:</strong> Detailed extraction table separating parent matches from indexed sub-groups for parsing pipelines.</li>
      <li><strong>100% Client-Side Evaluation:</strong> Execute complex pattern evaluations securely without sending sensitive documents or logs to remote servers.</li>
      <li><strong>Pre-compiled Native Speed:</strong> Leverages the browser's high-speed C++ regex engine for near-instant execution on large text files.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What is the difference between greedy and lazy quantifiers?</div>
      <div class="faq-answer">Greedy quantifiers (such as <code>.*</code> or <code>.+</code>) match as many characters as possible while still allowing the rest of the pattern to match. Lazy (or non-greedy) quantifiers (such as <code>.*?</code> or <code>.+?</code>) match as few characters as possible, stopping at the very first point where a valid match is achieved.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What does the "\\b" word boundary anchor do?</div>
      <div class="faq-answer">The <code>\\b</code> metacharacter matches a zero-width position between a word character (alphanumeric or underscore) and a non-word character (such as whitespace, punctuation, or string start/end). For example, <code>\\bcat\\b</code> will match "cat" in "the cat sat", but will not match "cat" in "catch" or "scatter".</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What are lookaheads and lookbehinds?</div>
      <div class="faq-answer">Lookahead and lookbehind assertions (collectively known as "lookarounds") match a pattern only if it is preceded or followed by another pattern, without including that pattern in the matched output. Positive lookahead is written as <code>(?=pattern)</code>, while negative lookahead is <code>(?!pattern)</code>.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why does a dot "." fail to match newlines?</div>
      <div class="faq-answer">By default in POSIX and ECMAScript specifications, the dot metacharacter matches any character except line break terminators (<code>\\n</code>, <code>\\r</code>). To allow the dot to match newline characters across multiple lines, enable the dotAll flag (<code>s</code>).</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">How does multiline flag "m" change anchor behavior?</div>
      <div class="faq-answer">Without the multiline flag, <code>^</code> matches only the absolute beginning of the entire string, and <code>$</code> matches only the absolute end. When <code>m</code> is enabled, <code>^</code> matches immediately following any newline character, and <code>$</code> matches immediately before any newline character.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Regex Tester & Debugger",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Interactive online regular expression tester with real-time match highlighting, capture group extraction, and full flag support."
  }
};
