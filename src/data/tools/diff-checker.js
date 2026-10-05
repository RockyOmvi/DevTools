const workspaces = require('../workspaces.json');
const ws = workspaces['tools/diff-checker.html'];

module.exports = {
  filename: 'tools/diff-checker.html',
  name: 'Text & Code Diff Checker',
  metaTitle: 'Diff Checker Online - Compare Text, Code & JSON Files Side-by-Side',
  metaDesc: 'Compare two text files or code snippets online with real-time line-by-line diff highlighting. 100% client-side privacy, instant Myers diff algorithm visualization.',
  canonical: 'https://devtoolhubs.com/tools/diff-checker.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/diff-checker.html' },
    { name: 'Diff Checker', url: '/tools/diff-checker.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Compare two blocks of code or text to identify changes line-by-line using high performance visualization.',
  detailedDescription: `
    <p>A <strong>diff tool</strong> is an essential utility for software engineers, DevOps practitioners, and technical writers. It analyzes two text buffers—an "original" version and a "modified" version—and produces a granular visualization of differences, categorizing lines as <strong>added</strong>, <strong>deleted</strong>, or <strong>unchanged</strong>. Originating from the Unix <code>diff</code> utility developed by Douglas McIlroy in the 1970s, diffing powers modern version control systems like <strong>Git</strong>, pull request code reviews, and automated configuration drift detection.</p>

    <h3>Under the Hood: The Myers Diff Algorithm</h3>
    <p>Most modern diff implementations (including Git and our browser tool) are based on the <strong>Myers Diff Algorithm</strong> ("An O(ND) Difference Algorithm and Its Variations" by Eugene W. Myers). The algorithm models text comparison as finding the shortest edit script (SES) in an edit graph, solving the <strong>Longest Common Subsequence (LCS)</strong> problem in minimal time and memory.</p>

    <h3>Understanding Unified Diff Output</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Color Convention</th>
            <th>Meaning</th>
            <th>Typical Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>+</code> (Plus)</td>
            <td><span style="color: var(--success); font-weight: bold;">Green</span></td>
            <td><strong>Addition:</strong> Line present in the modified text but absent in the original.</td>
            <td><code>+ const PORT = process.env.PORT || 3000;</code></td>
          </tr>
          <tr>
            <td><code>-</code> (Minus)</td>
            <td><span style="color: var(--danger); font-weight: bold;">Red</span></td>
            <td><strong>Deletion:</strong> Line present in the original text but removed in the modified version.</td>
            <td><code>- const PORT = 8080;</code></td>
          </tr>
          <tr>
            <td>(Space)</td>
            <td>Neutral / Default</td>
            <td><strong>Context / Unchanged:</strong> Line identical in both versions, providing context.</td>
            <td><code>  const express = require('express');</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-info">
      <strong>Enterprise Privacy Advantage:</strong> Developers frequently need to diff sensitive production files, including <code>.env</code> environment variables, Kubernetes YAML secrets, proprietary algorithms, and legal agreements. By running 100% in your browser sandbox, DevToolHubs guarantees that your private code snippets are never transmitted over the internet or logged on third-party servers.
    </div>

    <h3>Essential Use Cases in Software Engineering</h3>
    <ul>
      <li><strong>Pre-Commit Sanity Checks:</strong> Verify code changes locally before staging commits to avoid committing accidental debug statements or API keys.</li>
      <li><strong>Configuration Drift Management:</strong> Compare staging vs. production infrastructure configs (e.g. Terraform files or Nginx configs) to isolate deployment discrepancies.</li>
      <li><strong>API Response Verification:</strong> Compare expected vs. actual JSON payloads during integration testing to detect subtle schema regressions.</li>
      <li><strong>Database Schema Migrations:</strong> Inspect SQL table definitions across different migration versions to ensure column types and indexes align.</li>
    </ul>
  `,
  howToUse: `
    <ol>
      <li><strong>Paste Original Text:</strong> Paste your baseline or original text/code snippet into the left textarea labeled "Original Text".</li>
      <li><strong>Paste Modified Text:</strong> Paste your updated or target text/code snippet into the right textarea labeled "Modified Text".</li>
      <li><strong>Execute Comparison:</strong> Click the <strong>Compare Diff</strong> button to execute the line-by-line comparison algorithm.</li>
      <li><strong>Inspect Highlighted Results:</strong> Review the side-by-side visual diff below the editor. Red highlights mark removed lines, while green highlights denote newly added lines.</li>
      <li><strong>Clear or Switch:</strong> Use the <strong>Clear</strong> button to reset both editors for a new comparison session.</li>
    </ol>
  `,
  example: `
    <p><strong>Original Snippet:</strong></p>
    <div class="code-snippet-block">function connectDatabase() {
  const host = "localhost";
  const port = 5432;
  return new Pool({ host, port });
}</div>

    <p style="margin-top: 1rem;"><strong>Modified Snippet:</strong></p>
    <div class="code-snippet-block">function connectDatabase() {
  const host = process.env.DB_HOST || "localhost";
  const port = process.env.DB_PORT || 5432;
  const ssl = process.env.NODE_ENV === "production";
  return new Pool({ host, port, ssl });
}</div>

    <p style="margin-top: 1rem;"><strong>Unified Diff Format (Standard Git diff):</strong></p>
    <div class="code-snippet-block">@@ -1,5 +1,6 @@
 function connectDatabase() {
-  const host = "localhost";
-  const port = 5432;
-  return new Pool({ host, port });
+  const host = process.env.DB_HOST || "localhost";
+  const port = process.env.DB_PORT || 5432;
+  const ssl = process.env.NODE_ENV === "production";
+  return new Pool({ host, port, ssl });
 }</div>
  `,
  benefits: `
    <ul>
      <li><strong>Instant Line-by-Line Highlighting:</strong> Clear red and green visual indicators to immediately identify code mutations.</li>
      <li><strong>Side-by-Side Dual Pane:</strong> Compare source and destination buffers naturally without mental translation.</li>
      <li><strong>100% Client-Side Privacy:</strong> Zero risk of leaking confidential environment secrets, proprietary code, or credentials.</li>
      <li><strong>Whitespace Sensitivity:</strong> Accurately tracks indentation changes critical for Python, YAML, and formatted JSON files.</li>
      <li><strong>High Capacity:</strong> Handles thousands of lines of code smoothly using efficient client-side diff heuristics.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">How does line-by-line diffing handle whitespace and indentation?</div>
      <div class="faq-answer">By default, our diff checker is strict and evaluates whitespace exactly as written. This is crucial for indentation-sensitive languages like Python, YAML, and Pug where adding or removing two spaces changes execution semantics.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What causes a line to show as both deleted and added?</div>
      <div class="faq-answer">In line-oriented diffing, if even a single character within a line is modified (such as fixing a typo or changing a variable name), the algorithm treats the original line as deleted and the new line as added.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can I compare minified JSON or code files?</div>
      <div class="faq-answer">If two files are minified onto a single line, standard line diffing will show the entire single line as deleted and replaced. We recommend formatting/prettifying minified files first (using our <a href="/tools/json-validator.html">JSON Validator</a>) before running a diff.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Is my code saved or cached on any server?</div>
      <div class="faq-answer">No. All comparisons are executed purely in your browser's local JavaScript heap. Your code snippets are never transmitted to any remote server or stored in any database.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Text & Code Diff Checker",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Compare two blocks of code or text online with real-time line-by-line diff highlighting and 100% client-side privacy."
  }
};
