const workspaces = require('../workspaces.json');
const ws = workspaces['tools/json-validator.html'];

module.exports = {
  filename: 'tools/json-validator.html',
  name: 'JSON Validator & Prettifier',
  metaTitle: 'JSON Validator & Prettifier - Format, Lint, and Validate JSON Online',
  metaDesc: 'Validate, format, prettify, lint, and minify JSON strings online with instant inline syntax error highlighting. 100% client-side privacy, RFC 8259 compliant.',
  canonical: 'https://devtoolhubs.com/tools/json-validator.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/json-validator.html' },
    { name: 'JSON Validator', url: '/tools/json-validator.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Format, parse, lint, and validate raw JSON text arrays in real-time. Detects line-by-line syntax errors for easy debugging.',
  detailedDescription: `
    <p>JavaScript Object Notation (<strong>JSON</strong>) is the foundational data interchange format of the modern web. Standardized under <strong>RFC 8259</strong> and <strong>ECMA-404</strong>, JSON is lightweight, text-based, language-agnostic, and easily readable by both humans and machines. Whether you are building REST APIs, configuring microservices in Docker or Kubernetes, configuring front-end packages via <code>package.json</code>, or seeding relational and NoSQL databases like MongoDB and PostgreSQL, JSON serves as the universal language of structured data communication.</p>

    <h3>Why JSON Validation & Prettification Matters</h3>
    <p>Because JSON is strictly defined, even a minuscule syntax imperfection—such as a trailing comma after the last property of an object, an unquoted object key, or accidental single quotes instead of standard double quotes—will cause standard JSON parsers (such as JavaScript's <code>JSON.parse()</code>, Python's <code>json.loads()</code>, or Go's <code>json.Unmarshal()</code>) to throw a fatal syntax exception.</p>
    <p>In distributed production systems, an unvalidated or corrupted JSON configuration can cause service boot failures, broken CI/CD pipelines, or catastrophic API deserialization crashes. Our online JSON Validator and Prettifier acts as your immediate sanity check, identifying exact line numbers and character positions of syntax errors before deployment.</p>

    <h3>Strict JSON Syntax Rules (RFC 8259 Standard)</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Syntax Rule</th>
            <th>Valid Standard JSON</th>
            <th>Invalid (Will Fail Validation)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>String Quotation</strong></td>
            <td><code>{"name": "DevToolHubs"}</code> (Double quotes only)</td>
            <td><code>{'name': 'DevToolHubs'}</code> (Single quotes forbidden)</td>
          </tr>
          <tr>
            <td><strong>Object Keys</strong></td>
            <td><code>{"version": 1.0}</code> (Keys must be quoted strings)</td>
            <td><code>{version: 1.0}</code> (Unquoted keys forbidden)</td>
          </tr>
          <tr>
            <td><strong>Trailing Commas</strong></td>
            <td><code>[1, 2, 3]</code> (No comma after final element)</td>
            <td><code>[1, 2, 3,]</code> (Trailing commas forbidden)</td>
          </tr>
          <tr>
            <td><strong>Comments</strong></td>
            <td>Comments are not permitted in RFC 8259 JSON</td>
            <td><code>// This is a comment</code> (Invalidates JSON)</td>
          </tr>
          <tr>
            <td><strong>Numeric Values</strong></td>
            <td><code>42</code>, <code>-17</code>, <code>3.1415</code>, <code>1e10</code></td>
            <td><code>NaN</code>, <code>Infinity</code>, leading zeros like <code>042</code></td>
          </tr>
          <tr>
            <td><strong>Data Types Allowed</strong></td>
            <td colspan="2">Strings, Numbers, Objects, Arrays, Booleans (<code>true</code>, <code>false</code>), and <code>null</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-info">
      <strong>Client-Side Security Guarantee:</strong> Many developers unknowingly paste production configuration files containing database passwords, API authentication tokens, and customer records into online formatters that log payloads on remote servers. DevToolHubs parses, formats, and validates your JSON <strong>100% locally within your browser sandbox</strong>. Zero bytes are transmitted to any server.
    </div>

    <h3>Data Format Comparison: JSON vs. YAML vs. XML vs. TOML</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Format</th>
            <th>Primary Use Case</th>
            <th>Human Readability</th>
            <th>Parsing Performance</th>
            <th>Comments Support</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>JSON</strong></td>
            <td>Web APIs, REST payloads, package configs</td>
            <td>High (Structured)</td>
            <td>Extremely Fast (Native C++ parsers)</td>
            <td>No (Strict RFC 8259)</td>
          </tr>
          <tr>
            <td><strong>YAML</strong></td>
            <td>DevOps configs (Kubernetes, GitHub Actions)</td>
            <td>Very High (Indentation-based)</td>
            <td>Moderate (Complex grammar)</td>
            <td>Yes (<code># comment</code>)</td>
          </tr>
          <tr>
            <td><strong>XML</strong></td>
            <td>Enterprise SOAP services, Android layouts</td>
            <td>Moderate (Verbose tags)</td>
            <td>Slower (Heavy DOM trees)</td>
            <td>Yes (<code>&lt;!-- comment --&gt;</code>)</td>
          </tr>
          <tr>
            <td><strong>TOML</strong></td>
            <td>Application configuration (Rust Cargo, Python pyproject)</td>
            <td>High (Key-value sections)</td>
            <td>Fast</td>
            <td>Yes (<code># comment</code>)</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Input Your JSON:</strong> Paste your raw or unformatted JSON text string directly into the main code textarea, or click the <strong>Load Sample</strong> button to load a standard sample structure.</li>
      <li><strong>Validate Syntax:</strong> Click the <strong>Validate</strong> button to check whether your input conforms to RFC 8259 syntax specifications. If errors exist, a descriptive error message with exact line and character coordinates will appear.</li>
      <li><strong>Format & Prettify:</strong> Click <strong>Format / Prettify</strong> to clean up messy or unindented JSON. You can customize indentation between <strong>2 spaces</strong>, <strong>4 spaces</strong>, or <strong>Tab indentation</strong> using the indent dropdown.</li>
      <li><strong>Minify for Production:</strong> Click the <strong>Minify</strong> button to eliminate all unnecessary whitespace, line breaks, and indentation, generating a compact one-line string optimized for network bandwidth efficiency.</li>
      <li><strong>Copy or Download:</strong> Use the <strong>Copy</strong> button to immediately copy the formatted output to your clipboard, or click <strong>Download</strong> to save the result as a <code>.json</code> file to your device.</li>
    </ol>
  `,
  example: `
    <p><strong>Unformatted Input (Minified or Messy):</strong></p>
    <div class="code-snippet-block">{"status":"success","code":200,"data":{"service":"AuthService","uptimeSeconds":86400,"activeUsers":1420,"features":["oauth2","mfa","rate_limiting"]},"timestamp":"2026-10-05T13:00:00Z"}</div>

    <p style="margin-top: 1rem;"><strong>Formatted Output (2 Spaces Indentation):</strong></p>
    <div class="code-snippet-block">{
  "status": "success",
  "code": 200,
  "data": {
    "service": "AuthService",
    "uptimeSeconds": 86400,
    "activeUsers": 1420,
    "features": [
      "oauth2",
      "mfa",
      "rate_limiting"
    ]
  },
  "timestamp": "2026-10-05T13:00:00Z"
}</div>

    <p style="margin-top: 1rem;"><strong>Parsing in Common Languages:</strong></p>
    <p>JavaScript:</p>
    <div class="code-snippet-block">// Parse string to object
const data = JSON.parse(rawJsonString);
// Format back to string with 2-space indentation
const formatted = JSON.stringify(data, null, 2);</div>

    <p>Python:</p>
    <div class="code-snippet-block">import json
# Parse string to dictionary
data = json.loads(raw_json_str)
# Prettify with indent
formatted = json.dumps(data, indent=2)</div>
  `,
  benefits: `
    <ul>
      <li><strong>Precision Error Detection:</strong> Instant diagnostic feedback highlighting exact character offsets and line numbers where syntax errors occur.</li>
      <li><strong>Absolute Client-Side Privacy:</strong> Zero server interaction. Your sensitive credentials, customer PII, and proprietary data never leave your browser memory.</li>
      <li><strong>Customizable Indentation:</strong> Easily switch between 2 spaces, 4 spaces, or tab indentation to match your engineering team's linter standards.</li>
      <li><strong>High-Speed Minification:</strong> Condense large configuration files into compact single-line strings to conserve bandwidth and reduce HTTP payload size.</li>
      <li><strong>One-Click Export:</strong> Copy directly to your system clipboard or export cleanly formatted <code>.json</code> files directly to disk.</li>
      <li><strong>Offline Capable:</strong> Works smoothly without requiring an active internet connection once loaded in the browser.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What causes the error "SyntaxError: Unexpected token in JSON at position X"?</div>
      <div class="faq-answer">This common JavaScript error occurs when the JSON parser encounters an invalid character. Typical culprits include trailing commas after the last item in an object or array, single quotes instead of double quotes around keys or strings, missing closing brackets or braces, or unescaped newline characters within string values.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why does standard JSON forbid comments?</div>
      <div class="faq-answer">Douglas Crockford, who originally standardized JSON, deliberately excluded comments from RFC 8259 to prevent developers from using comments to hold parsing directives or environment-specific configuration hacks, which would destroy cross-language interoperability. If comments are required, consider JSONC (JSON with Comments) or YAML.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Are single quotes allowed for strings in JSON?</div>
      <div class="faq-answer">No. Under RFC 8259, all strings and object keys must strictly be wrapped in double quotes (<code>"string"</code>). Single quotes (<code>'string'</code>) are invalid and will cause standard parsers to fail.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Is there a maximum file size limit for this online JSON validator?</div>
      <div class="faq-answer">Because our tool processes JSON entirely on the client side using your browser's V8 or JavaScript engine, it can comfortably handle files up to tens of megabytes, limited only by your computer's available RAM.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What is the difference between JSON formatting and JSON minification?</div>
      <div class="faq-answer">JSON formatting (or prettifying) introduces consistent indentation, spaces, and line breaks to make structured data easily readable by human developers. JSON minification removes all non-essential whitespace, line breaks, and indentation, reducing payload byte size by 20% to 40% for faster transmission over network connections.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Is it safe to validate sensitive production JSON data on this website?</div>
      <div class="faq-answer">Yes, absolutely. Unlike many third-party online tools that upload your text to a backend server for processing, DevToolHubs operates purely within your web browser. Your data is never transmitted over the internet or logged on any server.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "JSON Validator & Prettifier",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Validate, format, prettify, lint, and minify JSON strings online with instant syntax error detection and complete client-side privacy."
  }
};
