const workspaces = require('../workspaces.json');
const ws = workspaces['tools/json-to-types.html'];

module.exports = {
  filename: 'tools/json-to-types.html',
  name: 'JSON to TypeScript & Go Struct Converter',
  metaTitle: 'JSON to TypeScript & Go Converter - Generate Interfaces and Structs Online',
  metaDesc: 'Convert raw JSON objects and arrays into clean TypeScript interfaces or Go structs with json tags. 100% client-side privacy, nested type parsing, and instant export.',
  canonical: 'https://devtoolhubs.com/tools/json-to-types.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/json-validator.html' },
    { name: 'JSON to Types', url: '/tools/json-to-types.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Convert JSON payloads and REST API responses into type-safe TypeScript interfaces or Go structs with JSON tags instantly.',
  detailedDescription: `
    <p>In modern web and backend development, consuming untyped JSON data from third-party REST APIs, GraphQL endpoints, or database queries introduces significant runtime risk. Without static type definitions, subtle typos in property names or assumptions about data types frequently lead to critical runtime errors such as JavaScript's infamous <code>TypeError: Cannot read properties of undefined</code> or unmarshalling panics in Go.</p>

    <h3>The Shift to End-to-End Type Safety</h3>
    <p>Modern frontend frameworks (React, Next.js, Angular, Vue 3, Svelte) and microservice backend architectures (Go, Node.js, NestJS) heavily depend on strongly typed data structures. Manually writing interfaces or structs for complex API responses containing dozens of nested objects, arrays, and optional keys is tedious, error-prone, and slow. DevToolHubs automates this pipeline by analyzing your raw JSON payloads and generating clean, idiomatic <strong>TypeScript interfaces</strong> or <strong>Go structs</strong> in milliseconds.</p>

    <h3>Type Inference Mapping Matrix</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>JSON Data Type</th>
            <th>Sample Value</th>
            <th>TypeScript Equivalent</th>
            <th>Go (Golang) Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>String</strong></td>
            <td><code>"developer@devtoolhubs.com"</code></td>
            <td><code>string</code></td>
            <td><code>string \`json:"key"\`</code></td>
          </tr>
          <tr>
            <td><strong>Integer Number</strong></td>
            <td><code>42</code>, <code>1000</code></td>
            <td><code>number</code></td>
            <td><code>int64 \`json:"key"\`</code></td>
          </tr>
          <tr>
            <td><strong>Floating-Point Number</strong></td>
            <td><code>19.99</code>, <code>3.14159</code></td>
            <td><code>number</code></td>
            <td><code>float64 \`json:"key"\`</code></td>
          </tr>
          <tr>
            <td><strong>Boolean</strong></td>
            <td><code>true</code>, <code>false</code></td>
            <td><code>boolean</code></td>
            <td><code>bool \`json:"key"\`</code></td>
          </tr>
          <tr>
            <td><strong>Null Value</strong></td>
            <td><code>null</code></td>
            <td><code>null | any</code></td>
            <td><code>interface{} \`json:"key"\`</code></td>
          </tr>
          <tr>
            <td><strong>Primitive Array</strong></td>
            <td><code>["admin", "editor"]</code></td>
            <td><code>string[]</code></td>
            <td><code>[]string \`json:"key"\`</code></td>
          </tr>
          <tr>
            <td><strong>Object Array</strong></td>
            <td><code>[{"id": 1, "name": "Item"}]</code></td>
            <td><code>Item[]</code> (with separate interface)</td>
            <td><code>[]Item \`json:"key"\`</code> (with separate struct)</td>
          </tr>
          <tr>
            <td><strong>Nested Object</strong></td>
            <td><code>{"address": {"city": "Austin"}}</code></td>
            <td><code>Address</code> (nested interface)</td>
            <td><code>Address \`json:"address"\`</code> (nested struct)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Idiomatic Conventions in TypeScript and Go</h3>
    <p>Writing idiomatic code requires respecting language-specific naming styles and compiler requirements:</p>
    <ul>
      <li><strong>TypeScript:</strong> Interfaces use camelCase for properties, PascalCase for interface declarations, and avoid quotes around keys unless they contain hyphens, spaces, or illegal variable characters.</li>
      <li><strong>Go (Golang):</strong> Go requires struct field names to begin with an uppercase letter to be <em>exported</em> (visible outside the package). The JSON parser relies on struct tags (e.g., <code>\`json:"snake_case_key"\`</code>) to map lowercase JSON fields to exported Go struct fields. Acronyms like <code>ID</code>, <code>URL</code>, and <code>IP</code> are capitalized in accordance with the official Go CodeReviewComments standard.</li>
    </ul>

    <div class="callout-box callout-info">
      <strong>Zero Server Transmission:</strong> Many online converters send your JSON to remote servers, risking exposure of confidential production tokens, user emails, or internal database schemas. DevToolHubs parses and generates all type declarations <strong>100% locally in your browser memory</strong>.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Enter JSON Data:</strong> Paste any valid JSON object or array into the left editor, or click <em>User Sample</em> / <em>Order Sample</em> to load a demonstration payload.</li>
      <li><strong>Select Target Language:</strong> Choose either <em>TypeScript Interfaces</em> or <em>Go Structs</em> from the dropdown.</li>
      <li><strong>Customize Root Name:</strong> Specify your preferred name for the root declaration (defaults to <code>RootObject</code> or <code>Root</code>).</li>
      <li><strong>Generate & Export:</strong> Click <em>Convert to Types</em>. Use <em>Copy</em> to paste the generated code into your IDE, or <em>Download</em> to save the <code>.ts</code> or <code>.go</code> file directly.</li>
    </ol>
  `,
  example: `
    <p>Input JSON:</p>
    <pre><code>{"id": 101, "title": "DevToolHubs Guide", "isPublished": true}</code></pre>
    <p>Generated TypeScript Interface:</p>
    <pre><code>export interface RootObject {
  id: number;
  title: string;
  isPublished: boolean;
}</code></pre>
    <p>Generated Go Struct:</p>
    <pre><code>type Root struct {
  ID int64 \`json:"id"\`
  Title string \`json:"title"\`
  IsPublished bool \`json:"isPublished"\`
}</code></pre>
  `,
  benefits: `
    <ul>
      <li><strong>Recursive Decomposition:</strong> Automatically detects and extracts nested child objects into independent, reusable sub-interfaces or sub-structs.</li>
      <li><strong>Idiomatic Field Naming:</strong> Converts JSON keys into standard PascalCase for Go, while automatically generating correct <code>\`json:"..."\`</code> tags.</li>
      <li><strong>Distinguishes Integers and Floats:</strong> Analyzes numeric values to select between <code>int64</code> and <code>float64</code> in Go.</li>
      <li><strong>Download Ready:</strong> Instant one-click file generation for <code>.ts</code> and <code>.go</code> files ready to drop into your codebase.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What is the advantage of using TypeScript interfaces over 'any'?</div>
      <div class="faq-answer">Using 'any' disables TypeScript's static type checker, allowing runtime typos and property mismatches to slip into production. Explicit interfaces provide autocomplete in editors like VS Code, compile-time verification, and self-documenting codebases that prevent runtime crashes.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why must Go struct fields be capitalized?</div>
      <div class="faq-answer">In Go, visibility is controlled by capitalization. Fields starting with a lowercase letter are private to the package and cannot be read or written by external packages, including the standard 'encoding/json' package. Capitalizing struct fields allows the JSON unmarshaller to inspect and populate them via reflection.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">How does this tool handle JSON arrays with multiple items?</div>
      <div class="faq-answer">When an array of objects is provided, the converter inspects the first item to construct an interface or struct representing the item schema, and declares the root type as an array of that item (e.g. 'type Root = Item[]' or 'type Root []Item').</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can I convert deeply nested JSON objects?</div>
      <div class="faq-answer">Yes. The converter recursively traverses nested objects and arrays of arbitrary depth, generating separate, clean types for each nested layer and linking them correctly in parent structures.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What happens if a JSON key contains hyphens or special characters?</div>
      <div class="faq-answer">In TypeScript, keys containing non-alphanumeric characters (like 'user-id' or '@version') are wrapped in quotation marks ('"user-id": string'). In Go, hyphens and underscores are converted to PascalCase (e.g. 'UserID') while preserving the exact original key inside the json struct tag ('\`json:"user-id"\`').</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Is my confidential API payload logged on your servers?</div>
      <div class="faq-answer">Never. DevToolHubs executes 100% in your browser using local JavaScript parsing. No code or data is transmitted to external servers, making it completely safe for internal database schemas, proprietary API tokens, and customer data.</div>
    </div>
  `,
  schema: {
    "@type": "SoftwareApplication",
    "name": "JSON to TypeScript & Go Struct Converter",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Convert JSON payloads into clean TypeScript interfaces and Go structs with json tags online with 100% client-side privacy."
  }
};
