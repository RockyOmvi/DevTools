const workspaces = require('../workspaces.json');
const wsEncoder = workspaces['tools/url-encoder.html'];
const wsDecoder = workspaces['tools/url-decoder.html'];

const urlEncoder = {
  filename: 'tools/url-encoder.html',
  name: 'URL Encoder',
  metaTitle: 'URL Encoder Online - RFC 3986 Percent-Encoding Tool',
  metaDesc: 'Convert unsafe characters into standard RFC 3986 percent-encoded strings for URL query parameters, paths, and API requests with 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/url-encoder.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/url-encoder.html' },
    { name: 'URL Encoder', url: '/tools/url-encoder.html' }
  ],
  workspace: wsEncoder.workspace,
  script: wsEncoder.script,
  relatedTools: wsEncoder.relatedTools,
  description: 'Convert unsafe query parameter strings into secure, percent-encoded string structures.',
  detailedDescription: `
    <p>A Uniform Resource Identifier (<strong>URI</strong>) and Uniform Resource Locator (<strong>URL</strong>) are standardized under <strong>RFC 3986</strong> by the Internet Engineering Task Force (IETF). Because URLs are transmitted across varied network equipment, web servers, and client user-agents, the specification strictly limits which ASCII characters can appear unencoded within a URL.</p>

    <h3>Reserved vs. Unreserved Characters</h3>
    <p>RFC 3986 divides ASCII characters into two primary classifications:</p>
    <ul>
      <li><strong>Unreserved Characters:</strong> Characters that have no reserved structural meaning in URIs and should never be encoded: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, hyphen (<code>-</code>), underscore (<code>_</code>), period (<code>.</code>), and tilde (<code>~</code>).</li>
      <li><strong>Reserved Characters:</strong> Characters that hold structural syntactical meaning in a URL scheme (e.g. separating query parameters, path segments, schemes, or fragment anchors): <code>:</code>, <code>/</code>, <code>?</code>, <code>#</code>, <code>[</code>, <code>]</code>, <code>@</code>, <code>!</code>, <code>$</code>, <code>&</code>, <code>'</code>, <code>(</code>, <code>)</code>, <code>*</code>, <code>+</code>, <code>,</code>, <code>;</code>, and <code>=</code>.</li>
    </ul>

    <h3>How Percent-Encoding Operates</h3>
    <p>When an unsafe, reserved, or non-ASCII character (such as whitespace or international UTF-8 characters) must be included within a URL query parameter or path component, it must be represented by a percent sign (<code>%</code>) followed by the two-digit hexadecimal representation of its corresponding byte in UTF-8. For example, a space character (ASCII code 32, hex <code>0x20</code>) becomes <code>%20</code>.</p>

    <h3>Critical Technical Difference: encodeURI vs encodeURIComponent</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Intended Usage</th>
            <th>Characters Encoded</th>
            <th>Characters Preserved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>encodeURI()</code></td>
            <td>Full URL addresses (preserves protocol & domain)</td>
            <td>Spaces, non-ASCII characters</td>
            <td><code>; , / ? : @ & = + $ #</code></td>
          </tr>
          <tr>
            <td><code>encodeURIComponent()</code></td>
            <td>Query parameter values or path segments</td>
            <td>All reserved characters (<code>; / ? : @ & = + $ #</code>) and spaces</td>
            <td>Only unreserved: <code>A-Z a-z 0-9 - _ . ! ~ * ' ( )</code></td>
          </tr>
          <tr>
            <td><code>application/x-www-form-urlencoded</code></td>
            <td>HTML form submissions & query strings</td>
            <td>Spaces encoded as plus signs (<code>+</code>) instead of <code>%20</code></td>
            <td>Standard alphanumeric characters</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-info">
      <strong>Security & Robustness:</strong> Failing to encode query parameters properly can cause critical parsing bugs in REST APIs, broken OAuth callbacks, and vulnerabilities like HTTP parameter pollution or open redirects. Always encode user-provided data before appending it to query strings.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Input String:</strong> Type or paste the plaintext string, query parameter, or URL you wish to encode into the input box.</li>
      <li><strong>Execute Encoding:</strong> Click the <strong>Encode</strong> button to convert unsafe and reserved characters into RFC 3986 percent-encoded hexadecimal octets.</li>
      <li><strong>Review Output:</strong> View the transformed output string in the preview container. Spaces will be converted to <code>%20</code> and special symbols to their hex equivalents.</li>
      <li><strong>Copy to Clipboard:</strong> Click the <strong>Copy</strong> button to immediately copy the encoded URL string for use in API requests or front-end code.</li>
    </ol>
  `,
  example: `
    <p><strong>Plaintext Input String:</strong></p>
    <div class="code-snippet-block">https://api.devtoolhubs.com/search?query=web developer&filter=category eq "security"&sort=date desc</div>

    <p style="margin-top: 1rem;"><strong>Percent-Encoded Parameter Output (encodeURIComponent):</strong></p>
    <div class="code-snippet-block">https%3A%2F%2Fapi.devtoolhubs.com%2Fsearch%3Fquery%3Dweb%20developer%26filter%3Dcategory%20eq%20%22security%22%26sort%3Ddate%20desc</div>

    <p style="margin-top: 1rem;"><strong>Encoding in JavaScript:</strong></p>
    <div class="code-snippet-block">// Encoding an individual query parameter value
const queryParam = "dev tools & utilities #1";
const encodedParam = encodeURIComponent(queryParam);
console.log(encodedParam); // "dev%20tools%20%26%20utilities%20%231"</div>

    <p style="margin-top: 1rem;"><strong>Encoding in Python:</strong></p>
    <div class="code-snippet-block">import urllib.parse
param = "dev tools & utilities #1"
encoded = urllib.parse.quote(param)
print(encoded) # "dev%20tools%20%26%20utilities%20%231"</div>
  `,
  benefits: `
    <ul>
      <li><strong>RFC 3986 Standard Compliance:</strong> Encodes characters according to strict official Internet standards for maximum server interoperability.</li>
      <li><strong>UTF-8 Multi-Byte Support:</strong> Seamlessly encodes international characters, emojis, and symbols into multi-byte percent sequences.</li>
      <li><strong>Zero Server Transmission:</strong> Entirely executed in your local browser sandbox to protect sensitive tokens and private parameters.</li>
      <li><strong>Instant Performance:</strong> Instant processing of long URL strings without latency or external network round trips.</li>
      <li><strong>Clean UI & One-Click Copy:</strong> Streamlined workspace designed for rapid developer workflows.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What is the difference between "%20" and "+" in encoded URLs?</div>
      <div class="faq-answer">In standard RFC 3986 URI encoding, a space character is represented as <code>%20</code>. However, in the legacy <code>application/x-www-form-urlencoded</code> specification (commonly used in HTML form submissions), spaces are represented by a plus sign (<code>+</code>). Modern REST APIs generally prefer standard <code>%20</code>.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why should I use encodeURIComponent() instead of encodeURI()?</div>
      <div class="faq-answer">Use <code>encodeURIComponent()</code> when encoding individual query parameter keys or values, because it encodes reserved characters like <code>&</code>, <code>=</code>, and <code>?</code> that would otherwise alter the query structure. Use <code>encodeURI()</code> only when encoding a complete, existing URL where you want to keep the protocol (<code>https://</code>) and domain intact.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Does this tool support emojis and non-Latin alphabets?</div>
      <div class="faq-answer">Yes. All characters outside the standard ASCII range are first encoded into their UTF-8 byte representation, and each byte is then converted into a percent-encoded sequence (e.g. the rocket emoji 🚀 is encoded as <code>%F0%9F%9A%80</code>).</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can unencoded characters cause security vulnerabilities?</div>
      <div class="faq-answer">Yes. Passing unencoded user input into URLs can lead to HTTP Parameter Pollution (HPP), Cross-Site Scripting (XSS) if reflection occurs, and Server-Side Request Forgery (SSRF) when URLs are processed on backend services without proper validation.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "URL Encoder",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Convert unsafe characters into standard RFC 3986 percent-encoded strings for URL query parameters and API endpoints."
  }
};

const urlDecoder = {
  filename: 'tools/url-decoder.html',
  name: 'URL Decoder',
  metaTitle: 'URL Decoder Online - Decode Percent-Encoded Strings & URLs',
  metaDesc: 'Decode percent-encoded URL strings back into human-readable UTF-8 text online. Handles multi-byte characters and query strings with 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/url-decoder.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/url-decoder.html' },
    { name: 'URL Decoder', url: '/tools/url-decoder.html' }
  ],
  workspace: wsDecoder.workspace,
  script: wsDecoder.script,
  relatedTools: wsDecoder.relatedTools,
  description: 'Decode percent-encoded strings back into readable parameter formats instantly.',
  detailedDescription: `
    <p>URL Decoding is the reverse operation of percent-encoding (URL encoding), defined in <strong>RFC 3986</strong>. When debugging server access logs, inspecting HTTP redirect URLs, analyzing API telemetry, or extracting query parameter values in web applications, engineers frequently encounter strings containing percent sequences such as <code>%20</code>, <code>%3F</code>, <code>%26</code>, or multi-byte UTF-8 sequences.</p>

    <h3>The Decoding Process</h3>
    <p>During decoding, each percent sign (<code>%</code>) followed by two hexadecimal digits is mapped back to its original 8-bit octet value. In modern web standards, sequences of octets are reconstructed according to the <strong>UTF-8 encoding schema</strong> to restore characters, foreign language alphabets, symbols, and emojis to their original readable representations.</p>

    <h3>Common Percent-Encoded Sequences Reference</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Character</th>
            <th>Hex Octet</th>
            <th>Common Context in URLs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Space ( )</td>
            <td><code>%20</code> or <code>+</code></td>
            <td>Separating search terms or query values</td>
          </tr>
          <tr>
            <td>Question Mark (<code>?</code>)</td>
            <td><code>%3F</code></td>
            <td>Start of URL query string parameter block</td>
          </tr>
          <tr>
            <td>Ampersand (<code>&</code>)</td>
            <td><code>%26</code></td>
            <td>Separator between distinct query parameters</td>
          </tr>
          <tr>
            <td>Equals (<code>=</code>)</td>
            <td><code>%3D</code></td>
            <td>Key-value assignment delimiter</td>
          </tr>
          <tr>
            <td>Slash (<code>/</code>)</td>
            <td><code>%2F</code></td>
            <td>Directory path hierarchy separator</td>
          </tr>
          <tr>
            <td>Hash / Octothorpe (<code>#</code>)</td>
            <td><code>%23</code></td>
            <td>Client-side fragment / anchor identifier</td>
          </tr>
          <tr>
            <td>Colon (<code>:</code>)</td>
            <td><code>%3A</code></td>
            <td>Scheme delimiter (e.g. <code>https:</code>) or port identifier</td>
          </tr>
          <tr>
            <td>At Symbol (<code>@</code>)</td>
            <td><code>%40</code></td>
            <td>Userinfo credentials delimiter or email addresses</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-warning">
      <strong>Handling the "URIError: URI malformed" Exception:</strong> In JavaScript, calling <code>decodeURIComponent()</code> on an invalid percent sequence (such as a solitary <code>%</code> without two subsequent hexadecimal digits, or an invalid UTF-8 byte sequence) throws a runtime <code>URIError</code>. Our decoder catches and diagnoses these formatting anomalies gracefully.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Paste Encoded String:</strong> Input your percent-encoded URL or query string into the main input textarea.</li>
      <li><strong>Decode String:</strong> Click the <strong>Decode</strong> button to reverse hexadecimal octet sequences back into readable UTF-8 text.</li>
      <li><strong>Inspect Readable Output:</strong> The decoded plaintext output appears immediately in the preview box with all reserved characters restored.</li>
      <li><strong>One-Click Copy:</strong> Use the <strong>Copy</strong> button to immediately copy the decoded text to your clipboard.</li>
    </ol>
  `,
  example: `
    <p><strong>Percent-Encoded Input:</strong></p>
    <div class="code-snippet-block">https%3A%2F%2Fdevtoolhubs.com%2Fsearch%3Fq%3Ddeveloper%20tools%26category%3Dcryptography%20%26%20security</div>

    <p style="margin-top: 1rem;"><strong>Decoded Plaintext Output:</strong></p>
    <div class="code-snippet-block">https://devtoolhubs.com/search?q=developer tools&category=cryptography & security</div>

    <p style="margin-top: 1rem;"><strong>Decoding in JavaScript:</strong></p>
    <div class="code-snippet-block">const encodedStr = "https%3A%2F%2Fdevtoolhubs.com%2Ftools%3Fname%3Djson%20validator";
// Decode percent sequences
const decoded = decodeURIComponent(encodedStr);
console.log(decoded); // "https://devtoolhubs.com/tools?name=json validator"</div>

    <p style="margin-top: 1rem;"><strong>Decoding in Python:</strong></p>
    <div class="code-snippet-block">import urllib.parse
encoded_str = "dev%20tools%20%26%20utilities"
decoded = urllib.parse.unquote(encoded_str)
print(decoded) # "dev tools & utilities"</div>
  `,
  benefits: `
    <ul>
      <li><strong>Multi-Byte UTF-8 Support:</strong> Accurately restores international character sets, accented letters, and modern emojis.</li>
      <li><strong>Form URL-Encoded Support:</strong> Correctly translates plus signs (<code>+</code>) into spaces when analyzing form submissions.</li>
      <li><strong>Robust Error Handling:</strong> Catches malformed percent sequences gracefully without breaking or halting your browser.</li>
      <li><strong>100% Client-Side Privacy:</strong> Zero transmission over the internet, preserving the confidentiality of private URLs.</li>
      <li><strong>Blazing Fast:</strong> Decodes megabyte-sized server logs in milliseconds using optimized browser runtimes.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What causes a "URI malformed" error when decoding?</div>
      <div class="faq-answer">This error occurs when the decoding engine encounters a percent sign (<code>%</code>) that is not followed by two valid hexadecimal characters (0-9, A-F), or when multi-byte UTF-8 sequences are truncated or corrupted in transit.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">How does this decoder handle plus signs (+)?</div>
      <div class="faq-answer">In standard URI paths, <code>+</code> is a literal plus. However, in query strings and form posts, <code>+</code> represents a space. Our decoder accounts for these standard conventions cleanly.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What is double-decoding and why is it dangerous?</div>
      <div class="faq-answer">Double-decoding happens when a server decodes an already decoded string a second time. This can cause severe security vulnerabilities, such as path traversal attacks (e.g. <code>%252e%252e%252f</code> decoding first to <code>%2e%2e%2f</code> and then to <code>../</code>), bypassing authorization filters.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can I decode entire web server access logs with this tool?</div>
      <div class="faq-answer">Yes. Because all operations execute locally on your machine, you can paste large blocks of server access logs or telemetry dumps to decode them in bulk without hitting network bandwidth constraints.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "URL Decoder",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Decode percent-encoded URL strings and query parameters back into readable UTF-8 text with 100% client-side privacy."
  }
};

module.exports = { urlEncoder, urlDecoder };
