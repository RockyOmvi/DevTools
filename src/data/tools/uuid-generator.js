const workspaces = require('../workspaces.json');
const ws = workspaces['tools/uuid-generator.html'];

module.exports = {
  filename: 'tools/uuid-generator.html',
  name: 'UUID / GUID Generator',
  metaTitle: 'UUID / GUID Generator Online - RFC 4122 Version 4 Random UUIDs',
  metaDesc: 'Generate cryptographically secure RFC 4122 Version 4 UUIDs (GUIDs) online in bulk. Customize hyphens, uppercase formatting, and batch sizes with 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/uuid-generator.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/uuid-generator.html' },
    { name: 'UUID Generator', url: '/tools/uuid-generator.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Generate batches of RFC 4122 Version 4 Universally Unique Identifiers with custom format options.',
  detailedDescription: `
    <p>A <strong>Universally Unique Identifier (UUID)</strong>—also known as a <strong>Globally Unique Identifier (GUID)</strong> in Microsoft ecosystems—is a 128-bit value standardized under <strong>RFC 4122</strong> (and updated in <strong>RFC 9562</strong>) by the Internet Engineering Task Force (IETF). Designed to enable distributed computing systems to generate unique identifiers without requiring central registration authority or coordination between database nodes, UUIDs are ubiquitous in modern software architecture.</p>

    <h3>Canonical Text Representation</h3>
    <p>A standard UUID is represented as 32 hexadecimal digits displayed in five groups separated by hyphens in an <strong>8-4-4-4-12</strong> format, totaling 36 characters:</p>
    <div class="code-snippet-block" style="font-size: 1rem; font-weight: bold;">
      xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    </div>
    <p>In a standard <strong>Version 4 UUID</strong>:</p>
    <ul>
      <li>The 13th character (first digit of the 3rd group) is always <code>4</code>, indicating Version 4 (randomly generated).</li>
      <li>The 17th character (first digit of the 4th group, represented by <code>y</code>) is always one of <code>8</code>, <code>9</code>, <code>a</code>, or <code>b</code>, signifying the RFC 4122 variant (bits <code>10xx</code>).</li>
    </ul>

    <h3>Understanding UUID Versions (v1 through v7)</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Version</th>
            <th>Generation Mechanism</th>
            <th>Primary Advantages</th>
            <th>Potential Disadvantages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>UUID v1</strong></td>
            <td>60-bit timestamp + host MAC address</td>
            <td>Time-sortable</td>
            <td>Leaks host MAC address and generation time (privacy concern)</td>
          </tr>
          <tr>
            <td><strong>UUID v3</strong></td>
            <td>MD5 hash of namespace + name string</td>
            <td>Deterministic identity from names</td>
            <td>Uses cryptographically weak MD5</td>
          </tr>
          <tr>
            <td><strong>UUID v4</strong></td>
            <td>122 bits of cryptographically secure pseudo-randomness</td>
            <td>Complete privacy, no central server, zero host leakage</td>
            <td>Random order causes B-Tree index fragmentation in heavy databases</td>
          </tr>
          <tr>
            <td><strong>UUID v5</strong></td>
            <td>SHA-1 hash of namespace + name string</td>
            <td>Deterministic name-based identity with SHA-1</td>
            <td>Deterministic (identical inputs yield identical outputs)</td>
          </tr>
          <tr>
            <td><strong>UUID v7</strong></td>
            <td>Unix epoch timestamp (ms) + random bits (RFC 9562)</td>
            <td>Time-ordered &amp; random; highly optimized for database indexes</td>
            <td>Newer standard, emerging library support</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Collision Probability Mathematics</h3>
    <p>A Version 4 UUID contains 122 bits of entropy (6 bits are reserved for version and variant). This yields:</p>
    <p style="text-align: center; font-size: 1.15rem; font-family: var(--font-mono); margin: 1rem 0;">
      2<sup>122</sup> ≈ 5.3 × 10<sup>36</sup> possible combinations
    </p>
    <p>To put this astronomical scale into perspective: according to the Birthday Problem, to achieve even a <strong>one-in-a-billion (10<sup>-9</sup>)</strong> chance of a single collision, a system would have to generate over <strong>103 trillion UUIDs</strong>. In practice, accidental collision in Version 4 UUIDs is practically zero.</p>

    <div class="callout-box callout-info">
      <strong>Cryptographic Randomness:</strong> Our generator exclusively utilizes the browser's native <code>crypto.randomUUID()</code> or <code>crypto.getRandomValues()</code> API, ensuring that randomness originates from your operating system's kernel entropy pool (such as <code>/dev/urandom</code> on Linux/macOS or <code>BCryptGenRandom</code> on Windows), rather than predictable pseudorandom functions like <code>Math.random()</code>.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Select Batch Quantity:</strong> Choose how many UUIDs you want to generate in a single batch (from 1 up to 100).</li>
      <li><strong>Customize Formatting:</strong> Choose whether you want to include standard hyphens or strip them (clean 32-character string), and select lowercase or uppercase hexadecimal output.</li>
      <li><strong>Generate Batch:</strong> Click <strong>Generate UUID(s)</strong> to produce cryptographically random identifiers instantly.</li>
      <li><strong>Copy or Download:</strong> Use <strong>Copy to Clipboard</strong> to copy the batch directly, or download as a text file for database migration seeds or mock data generation.</li>
    </ol>
  `,
  example: `
    <p><strong>Sample Version 4 UUID (Standard Canonical Format):</strong></p>
    <div class="code-snippet-block">9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</div>

    <p style="margin-top: 1rem;"><strong>Sample Version 4 UUID (Uppercase & Without Hyphens):</strong></p>
    <div class="code-snippet-block">9B1DEB4D3B7D4BAD9BDD2B0D7B3DCB6D</div>

    <p style="margin-top: 1rem;"><strong>Generating UUIDs in Modern JavaScript (Browser & Node.js 16+):</strong></p>
    <div class="code-snippet-block">// Native Web Crypto API
const uuid = crypto.randomUUID();
console.log(uuid); // "36-char string e.g. f81d4fae-7dec-11d0-a765-00a0c91e6bf6"</div>

    <p style="margin-top: 1rem;"><strong>Generating UUIDs in Python 3:</strong></p>
    <div class="code-snippet-block">import uuid
unique_id = str(uuid.uuid4())
print(unique_id)</div>

    <p style="margin-top: 1rem;"><strong>Generating UUIDs in PostgreSQL:</strong></p>
    <div class="code-snippet-block">-- Built-in random UUID generator
SELECT gen_random_uuid();</div>
  `,
  benefits: `
    <ul>
      <li><strong>Cryptographically Secure:</strong> Powered by the W3C Web Cryptography API and OS-level hardware entropy sources.</li>
      <li><strong>Bulk Generation:</strong> Generate dozens of unique identifiers simultaneously for integration tests, mock data, and database fixtures.</li>
      <li><strong>Flexible Formatting Options:</strong> Easily toggle hyphens and uppercase/lowercase casing to match your database schema.</li>
      <li><strong>Strict RFC 4122 Compliance:</strong> Guarantees accurate Version 4 and Variant bits on every generated identifier.</li>
      <li><strong>100% Client-Side Privacy:</strong> Generated strictly inside your browser. No identifiers are recorded or stored remotely.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What is the difference between a UUID and a GUID?</div>
      <div class="faq-answer">Functionally, there is no difference. GUID (Globally Unique Identifier) is Microsoft's terminology for the implementation of the RFC 4122 UUID standard. Both refer to 128-bit identifiers conforming to identical structures and bit layouts.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can two UUID v4 values ever collide in real-world applications?</div>
      <div class="faq-answer">While theoretically possible, the mathematical probability of two randomly generated UUID v4 values colliding is so infinitely small (1 in 5.3 × 10^36) that it can be treated as zero in software engineering. You are trillions of times more likely to be hit by a meteorite than encounter a UUID collision.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why should I avoid Math.random() for generating UUIDs?</div>
      <div class="faq-answer">Standard <code>Math.random()</code> is a pseudo-random number generator (PRNG) designed for speed, not security. Its internal seed state can be predicted, creating vulnerabilities and significantly higher risks of collision. Our tool exclusively uses cryptographically secure random sources (<code>crypto.getRandomValues</code> and <code>crypto.randomUUID</code>).</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Should I use UUIDs as primary keys in SQL databases?</div>
      <div class="faq-answer">UUIDs are ideal for distributed architectures because client applications can generate primary keys before saving without round-trips to the database. However, because UUID v4 is purely random, inserting them into clustered B-Tree indexes (like MySQL InnoDB or SQL Server) can cause page splits and fragmentation. For heavy databases, consider UUID v7 or sequential prefixing.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UUID / GUID Generator",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Generate cryptographically secure RFC 4122 Version 4 UUIDs (GUIDs) in bulk online with customizable hyphens and casing."
  }
};
