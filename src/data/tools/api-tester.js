const workspaces = require('../workspaces.json');
const ws = workspaces['tools/api-tester.html'];

module.exports = {
  filename: 'tools/api-tester.html',
  name: 'Browser API Tester',
  metaTitle: 'API Tester Online - Test REST Endpoints, HTTP Methods & Headers',
  metaDesc: 'Test REST APIs and HTTP endpoints directly in your browser. Configure GET, POST, PUT, DELETE requests, custom headers, and inspect response bodies with client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/api-tester.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/api-tester.html' },
    { name: 'API Tester', url: '/tools/api-tester.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Test HTTP request payloads directly in-browser. Build custom headers, mock data configurations, and view raw details.',
  detailedDescription: `
    <p>The <strong>Hypertext Transfer Protocol (HTTP)</strong> is the foundation of data communication on the World Wide Web. When developing and debugging microservices, mobile backends, webhooks, and single-page applications, developers need a fast, lightweight way to test endpoints without the overhead of heavy desktop applications like Postman or Insomnia. Our in-browser API Tester allows you to construct, execute, and inspect HTTP requests directly from your browser tab.</p>

    <h3>HTTP Request Methods Reference</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Idempotent?</th>
            <th>Safe?</th>
            <th>Primary Architectural Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>GET</code></td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Retrieve resource representation without side effects or mutations on the server.</td>
          </tr>
          <tr>
            <td><code>POST</code></td>
            <td>No</td>
            <td>No</td>
            <td>Submit an entity to the specified resource, often resulting in resource creation or state mutation.</td>
          </tr>
          <tr>
            <td><code>PUT</code></td>
            <td>Yes</td>
            <td>No</td>
            <td>Replace all current representations of the target resource with the uploaded payload.</td>
          </tr>
          <tr>
            <td><code>PATCH</code></td>
            <td>No</td>
            <td>No</td>
            <td>Apply partial modifications to an existing resource.</td>
          </tr>
          <tr>
            <td><code>DELETE</code></td>
            <td>Yes</td>
            <td>No</td>
            <td>Deletes the specified target resource from the server.</td>
          </tr>
          <tr>
            <td><code>OPTIONS</code></td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Describes the communication options (such as CORS headers) for the target resource.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Understanding Browser CORS (Cross-Origin Resource Sharing)</h3>
    <p>Because this API Tester operates natively inside your web browser via the standard <code>fetch()</code> API, outgoing requests are subject to the browser's <strong>Same-Origin Policy (SOP)</strong> and <strong>CORS</strong> security model:</p>
    <ul>
      <li><strong>Cross-Origin Requests:</strong> If you test an API hosted on a domain, port, or protocol different from <code>https://devtoolhubs.com</code>, the target server MUST include an <code>Access-Control-Allow-Origin</code> header in its response.</li>
      <li><strong>Preflight OPTIONS Requests:</strong> For non-simple requests (such as requests including custom authorization headers or <code>application/json</code> content types), the browser automatically sends a preflight <code>OPTIONS</code> request before transmitting the actual payload.</li>
      <li><strong>Public &amp; Local APIs:</strong> Most public developer APIs (such as GitHub API, JSONPlaceholder, Stripe test API) and properly configured local development servers (e.g. localhost with CORS enabled) work seamlessly.</li>
    </ul>

    <h3>Standard HTTP Status Code Quick Reference</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Status Range</th>
            <th>Category</th>
            <th>Common Status Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>2xx</strong></td>
            <td>Success</td>
            <td><code>200 OK</code>, <code>201 Created</code>, <code>204 No Content</code></td>
          </tr>
          <tr>
            <td><strong>3xx</strong></td>
            <td>Redirection</td>
            <td><code>301 Moved Permanently</code>, <code>302 Found</code>, <code>304 Not Modified</code></td>
          </tr>
          <tr>
            <td><strong>4xx</strong></td>
            <td>Client Errors</td>
            <td><code>400 Bad Request</code>, <code>401 Unauthorized</code>, <code>403 Forbidden</code>, <code>404 Not Found</code>, <code>429 Too Many Requests</code></td>
          </tr>
          <tr>
            <td><strong>5xx</strong></td>
            <td>Server Errors</td>
            <td><code>500 Internal Server Error</code>, <code>502 Bad Gateway</code>, <code>503 Service Unavailable</code>, <code>504 Gateway Timeout</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Select Method &amp; URL:</strong> Choose your HTTP method (<code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, or <code>DELETE</code>) and enter the full API URL (e.g. <code>https://jsonplaceholder.typicode.com/posts/1</code>).</li>
      <li><strong>Configure Headers:</strong> Switch to the <strong>Headers</strong> tab to add custom headers (such as <code>Authorization: Bearer &lt;token&gt;</code> or <code>Content-Type: application/json</code>).</li>
      <li><strong>Attach Request Body:</strong> For <code>POST</code>, <code>PUT</code>, or <code>PATCH</code> methods, switch to the <strong>Body</strong> tab and paste your JSON request payload.</li>
      <li><strong>Send Request:</strong> Click the <strong>Send Request</strong> button to execute the HTTP fetch directly from your browser.</li>
      <li><strong>Inspect Response:</strong> Review the response status code, elapsed round-trip response time, response headers, and cleanly formatted JSON response body.</li>
    </ol>
  `,
  example: `
    <p><strong>Sample GET Request to a Public REST API:</strong></p>
    <div class="code-snippet-block">Method: GET
URL: https://jsonplaceholder.typicode.com/todos/1
Headers:
  Accept: application/json</div>

    <p style="margin-top: 1rem;"><strong>Expected Response Body (HTTP 200 OK):</strong></p>
    <div class="code-snippet-block">{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}</div>

    <p style="margin-top: 1rem;"><strong>Equivalent cURL Command:</strong></p>
    <div class="code-snippet-block">curl -X GET "https://jsonplaceholder.typicode.com/todos/1" \
     -H "Accept: application/json"</div>

    <p style="margin-top: 1rem;"><strong>Executing via Modern JavaScript Fetch:</strong></p>
    <div class="code-snippet-block">async function testApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  });
  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Data:', data);
}</div>
  `,
  benefits: `
    <ul>
      <li><strong>Zero Installation Required:</strong> Instant browser-based testing without downloading heavy desktop clients.</li>
      <li><strong>Comprehensive Header Support:</strong> Easily configure custom authorization headers, API keys, and content types.</li>
      <li><strong>Real-Time Response Formatting:</strong> Automatically prettifies returned JSON payloads with syntax highlighting for rapid debugging.</li>
      <li><strong>Latency Benchmarking:</strong> Measures and displays elapsed round-trip network response times in milliseconds.</li>
      <li><strong>100% Client-Side Privacy:</strong> Requests originate directly from your client machine; no credentials or payloads pass through an intermediary proxy server.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">Why do I see a "CORS error" or "TypeError: Failed to fetch"?</div>
      <div class="faq-answer">Browsers enforce the Same-Origin Policy (SOP) to protect users from malicious sites. When making requests to a different domain, the destination server must respond with the header <code>Access-Control-Allow-Origin: *</code> (or your specific origin). If the server does not support CORS, the browser blocks the response. For APIs without CORS, test using server-side tools like cURL.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can I test APIs running on "localhost"?</div>
      <div class="faq-answer">Yes! If your local development server (e.g. <code>http://localhost:3000</code> or <code>http://127.0.0.1:8000</code>) is configured to allow CORS requests, the browser can make requests to your local machine directly.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What is the difference between PUT and PATCH?</div>
      <div class="faq-answer"><code>PUT</code> is intended to replace the entire target resource with the provided payload (if a field is omitted, it should be removed or set to default). <code>PATCH</code> is intended for partial updates, modifying only the fields explicitly provided in the payload while leaving other properties untouched.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Are my authorization tokens logged?</div>
      <div class="faq-answer">No. Requests are initiated directly from your browser to the target server. DevToolHubs operates zero proxy servers, meaning your bearer tokens, API keys, and authorization headers never touch our infrastructure.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Browser API Tester",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Test REST APIs, HTTP request methods, and headers directly in your browser with real-time JSON formatting and client-side privacy."
  }
};
