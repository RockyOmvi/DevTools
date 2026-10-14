const workspaces = require('../workspaces.json');
const ws = workspaces['tools/base64-tools.html'];

module.exports = {
  filename: 'tools/base64-tools.html',
  name: 'Base64 String & Image Converter',
  metaTitle: 'Base64 Encode & Decode - Convert Text, Files & Images to Data URL',
  metaDesc: 'Encode and decode strings, images, and files to Base64 and Data URLs online. Supports UTF-8, URL-Safe Base64, and image previews with 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/base64-tools.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/json-validator.html' },
    { name: 'Base64 Converter', url: '/tools/base64-tools.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Encode and decode UTF-8 text strings to Base64, and convert images or binary files into ready-to-use Data URLs and CSS backgrounds.',
  detailedDescription: `
    <p><strong>Base64</strong> is a group of binary-to-text encoding schemes standardized under <strong>RFC 4648</strong>. It is designed to represent arbitrary binary data—such as image pixels, encrypted ciphertexts, PDF documents, or cryptographic hashes—using a subset of 64 printable, ASCII-safe characters. Base64 is widely utilized in MIME email attachments, HTTP Basic Authentication headers (<code>Authorization: Basic ...</code>), JWT signatures, and inline Data URLs in CSS and HTML stylesheets.</p>

    <h3>How Base64 Encoding Operates Mechanically</h3>
    <p>Digital computers store data as 8-bit octets (bytes). The Base64 encoding algorithm groups binary data into chunks of <strong>24 bits</strong> (corresponding to three 8-bit bytes). These 24 bits are then divided into <strong>four 6-bit numbers</strong>. Because <code>2^6 = 64</code>, each 6-bit value precisely maps to one of the 64 characters in the standard Base64 alphabet:</p>
    <ul>
      <li><code>A-Z</code>: Indices 0 through 25 (Uppercase letters)</li>
      <li><code>a-z</code>: Indices 26 through 51 (Lowercase letters)</li>
      <li><code>0-9</code>: Indices 52 through 61 (Digits)</li>
      <li><code>+</code> and <code>/</code>: Indices 62 and 63 (Standard symbols)</li>
      <li><code>=</code>: Padding character (applied when the input byte count is not divisible by 3)</li>
    </ul>

    <h3>Why Base64 Increases Payload Size by 33.3%</h3>
    <p>Because every 3 input bytes (24 bits) are translated into 4 output characters (32 bits), Base64 incurs a fixed mathematical overhead of <strong>33.3%</strong>. For example, a 100 KB image encoded as a Base64 string will expand to approximately 133.3 KB. When embedding images directly into HTML or CSS as Data URLs, this size expansion should be weighed against the benefit of saving an extra HTTP round-trip request.</p>

    <h3>Standard Base64 vs. URL-Safe Base64 (RFC 4648 Section 5)</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Characteristic</th>
            <th>Standard Base64</th>
            <th>URL-Safe Base64 (Base64URL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>62nd Character</strong></td>
            <td><code>+</code> (Plus)</td>
            <td><code>-</code> (Hyphen / Minus)</td>
          </tr>
          <tr>
            <td><strong>63rd Character</strong></td>
            <td><code>/</code> (Slash)</td>
            <td><code>_</code> (Underscore)</td>
          </tr>
          <tr>
            <td><strong>Padding (<code>=</code>)</strong></td>
            <td>Required by strict parsers</td>
            <td>Omitted or stripped to avoid percent-encoding</td>
          </tr>
          <tr>
            <td><strong>Primary Use Cases</strong></td>
            <td>MIME email attachments, HTTP headers, file payloads</td>
            <td>JSON Web Tokens (JWT), URL query parameters, OAuth tokens</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Understanding Data URLs (RFC 2397)</h3>
    <p>A Data URL embeds small files inline into HTML documents or CSS stylesheets using the following formal schema:</p>
    <pre><code>data:[&lt;mediatype&gt;][;base64],&lt;data&gt;</code></pre>
    <p>For example, inlining an SVG or PNG icon into an HTML <code>&lt;img&gt;</code> tag or CSS <code>background-image</code> avoids extra network latency on high-concurrency landing pages.</p>
  `,
  howToUse: `
    <ol>
      <li><strong>To encode or decode text:</strong> Select the <em>Base64 Text Converter</em> tab. Type or paste your raw text or Base64 string, toggle <em>URL-Safe Base64</em> if needed, and click <em>Encode to Base64</em> or <em>Decode from Base64</em>.</li>
      <li><strong>To convert an image or file:</strong> Select the <em>Base64 Image / File Converter</em> tab. Drag and drop any image file (PNG, JPG, SVG, WEBP, GIF, PDF) into the drop zone. The tool generates an immediate preview, size analysis, and one-click copy buttons for Data URLs, raw Base64, HTML tags, and CSS rules.</li>
    </ol>
  `,
  example: `
    <p>Text String: <code>Hello DevToolHubs! 🚀</code></p>
    <ul>
      <li><strong>Standard Base64:</strong> <code>SGVsbG8gRGV2VG9vbEh1YnMhIPCfmYA=</code></li>
      <li><strong>URL-Safe Base64:</strong> <code>SGVsbG8gRGV2VG9vbEh1YnMhIPCfmYA</code></li>
      <li><strong>UTF-8 Integrity:</strong> Full multi-byte support for emojis, Cyrillic, Chinese, and non-ASCII characters without data corruption.</li>
    </ul>
  `,
  benefits: `
    <ul>
      <li><strong>100% Client-Side Confidentiality:</strong> Your files and private text never leave your machine; all encoding and decoding runs in-browser using standard Web APIs.</li>
      <li><strong>UTF-8 & Unicode Safe:</strong> Correctly encodes complex Unicode strings, foreign scripts, and modern emojis using native TextEncoder.</li>
      <li><strong>Instant Image Preview & Size Analysis:</strong> Displays live image renders alongside original vs Base64 byte overhead comparisons.</li>
      <li><strong>Export Ready:</strong> Instant copy buttons for raw Base64, complete Data URLs, HTML <code>&lt;img&gt;</code> elements, and CSS background rules.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What is Base64 encoding used for?</div>
      <div class="faq-answer">Base64 converts binary files or unprintable character sequences into 64 standard ASCII characters. It is commonly used to embed images directly in HTML/CSS, transmit files in email attachments via MIME, serialize tokens in JWTs, and safely store binary data in JSON payloads.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Is Base64 a form of encryption?</div>
      <div class="faq-answer">No. Base64 is an encoding format, not an encryption algorithm. Anyone can instantly decode a Base64 string back to its original bytes without requiring a secret key or password. Never use Base64 to secure passwords, credentials, or confidential business data.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why does Base64 increase file size by ~33%?</div>
      <div class="faq-answer">Base64 translates groups of 3 bytes (24 bits) into 4 characters (32 bits). Because it only uses 6 bits per character instead of 8 bits, the output requires 33.3% more characters to represent the identical amount of underlying binary data.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What is URL-Safe Base64 (Base64URL)?</div>
      <div class="faq-answer">Standard Base64 contains the characters '+' and '/', which carry special meanings in URL query strings and URI path segments. URL-Safe Base64 substitutes '+' with '-' and '/' with '_', and strips trailing '=' padding characters, making strings safe for web links and JWTs without percent-encoding.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can I encode large files over 10 MB in this tool?</div>
      <div class="faq-answer">To maintain responsive browser performance and prevent UI freezing, this client-side utility limits direct file uploads to 10 MB. For larger multi-gigabyte files, terminal tools like 'base64 -i input.bin -o output.b64' are recommended.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why did other online Base64 decoders mangle my emojis and non-English characters?</div>
      <div class="faq-answer">Older JavaScript decoders rely on window.atob() and window.btoa(), which strictly assume 8-bit Latin1 characters and crash or produce garbled text when encountering multi-byte UTF-8 sequences. DevToolHubs uses the modern TextEncoder and TextDecoder web standards to guarantee flawless Unicode handling.</div>
    </div>
  `,
  schema: {
    "@type": "SoftwareApplication",
    "name": "Base64 String & Image Converter",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Encode and decode text, files, and images to Base64 and Data URLs online with URL-Safe support and complete client-side privacy."
  }
};
