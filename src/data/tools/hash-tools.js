const workspaces = require('../workspaces.json');
const wsSha256 = workspaces['tools/sha256-generator.html'];
const wsMd5 = workspaces['tools/md5-generator.html'];
const wsMulti = workspaces['tools/hash-generator.html'];

const sha256Generator = {
  filename: 'tools/sha256-generator.html',
  name: 'SHA-256 Hash Generator',
  metaTitle: 'SHA-256 Hash Generator Online - Compute 256-Bit Cryptographic Digests',
  metaDesc: 'Generate secure SHA-256 cryptographic hash digests online using the W3C Web Cryptography API. Fast, secure, and 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/sha256-generator.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/sha256-generator.html' },
    { name: 'SHA-256 Generator', url: '/tools/sha256-generator.html' }
  ],
  workspace: wsSha256.workspace,
  script: wsSha256.script,
  relatedTools: wsSha256.relatedTools,
  description: 'Compute 256-bit cryptographic message digests in-browser using the Web Cryptography API for verification and signature hashing.',
  detailedDescription: `
    <p>The <strong>Secure Hash Algorithm 256-bit (SHA-256)</strong> is a cryptographic hash function standardized by the National Institute of Standards and Technology (NIST) under <strong>FIPS PUB 180-4</strong>. As a key member of the SHA-2 family, SHA-256 transforms an arbitrary-length message buffer into a deterministic, fixed-size <strong>256-bit (32-byte)</strong> digest, canonically formatted as a 64-character hexadecimal string.</p>

    <h3>Mathematical Foundation & Security Properties</h3>
    <p>SHA-256 operates using the classical <strong>Merkle–Damgård construction</strong>. The input message is padded with length information to a multiple of 512 bits, split into 512-bit message blocks, and iteratively processed through 64 rounds of non-linear logical functions, bitwise shifts, and modular 2<sup>32</sup> additions.</p>
    <p>A cryptographically robust hash function must fulfill three fundamental security properties:</p>
    <ol>
      <li><strong>Pre-image Resistance (One-Way):</strong> Given a hash output <code>H</code>, it is computationally infeasible to reverse or find the original message <code>M</code> such that <code>hash(M) = H</code>.</li>
      <li><strong>Second Pre-image Resistance (Weak Collision Resistance):</strong> Given an input <code>M1</code>, it is computationally infeasible to discover another distinct input <code>M2</code> such that <code>hash(M1) = hash(M2)</code>.</li>
      <li><strong>Collision Resistance (Strong Collision Resistance):</strong> It is computationally infeasible to identify any two arbitrary inputs <code>M1</code> and <code>M2</code> that produce identical hash digests.</li>
    </ol>

    <h3>The Avalanche Effect</h3>
    <p>A vital property of SHA-256 is the <strong>avalanche effect</strong>: altering even a single bit in the input message (e.g., changing a lowercase letter to uppercase or adding a period) results in an output digest where approximately 50% of the output bits flip unpredictably.</p>

    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Input Text String</th>
            <th>SHA-256 Digest (64 Hex Characters)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hello</code></td>
            <td><code>2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824</code></td>
          </tr>
          <tr>
            <td><code>Hello</code> (single uppercase change)</td>
            <td><code>185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-info">
      <strong>Real-World Applications:</strong> SHA-256 forms the cryptographic backbone of TLS/SSL certificate signatures, Git commit object identification (alongside SHA-1), Docker image layer content addressability, and Bitcoin blockchain Proof-of-Work mining.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Enter Input:</strong> Type or paste your plaintext string, API key, configuration file, or token into the input textarea.</li>
      <li><strong>Compute Hash:</strong> Click the <strong>Generate Hash</strong> button. The browser immediately processes the string using hardware-accelerated Web Cryptography.</li>
      <li><strong>Verify 64-Character Digest:</strong> Inspect the resulting 64-character hexadecimal digest in the output preview container.</li>
      <li><strong>Copy to Clipboard:</strong> Click <strong>Copy</strong> to quickly capture the computed hash digest for verification or integration into scripts.</li>
    </ol>
  `,
  example: `
    <p><strong>Input String:</strong></p>
    <div class="code-snippet-block">DevToolHubs Client-Side Cryptography 2026</div>

    <p style="margin-top: 1rem;"><strong>Resulting SHA-256 Hash Digest:</strong></p>
    <div class="code-snippet-block">4b611e97d4b4a3a6a9b40db428383f98e8336d396781297e64147775a6c11782</div>

    <p style="margin-top: 1rem;"><strong>Computing SHA-256 in JavaScript (Web Crypto API):</strong></p>
    <div class="code-snippet-block">async function sha256(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}</div>

    <p style="margin-top: 1rem;"><strong>Computing SHA-256 in Python:</strong></p>
    <div class="code-snippet-block">import hashlib
text = "DevToolHubs Client-Side Cryptography 2026"
hash_str = hashlib.sha256(text.encode('utf-8')).hexdigest()
print(hash_str)</div>
  `,
  benefits: `
    <ul>
      <li><strong>W3C SubtleCrypto Acceleration:</strong> Uses your device's native browser cryptographic libraries for high throughput and security.</li>
      <li><strong>FIPS 180-4 Compliance:</strong> Produces mathematically verified 256-bit digests identical to OpenSSL and standard Linux tools.</li>
      <li><strong>Absolute Client-Side Privacy:</strong> Your text never touches a server. Perfect for generating hashes of proprietary keys and internal data.</li>
      <li><strong>Real-Time Execution:</strong> Instant results without network round-trips or server latency.</li>
      <li><strong>Lightweight & Clean:</strong> Pure JavaScript implementation with zero tracking or external script overhead.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">Can a SHA-256 hash be decrypted or reversed?</div>
      <div class="faq-answer">No. SHA-256 is a one-way cryptographic hash function, not an encryption algorithm. While encryption is designed to be decrypted with a key, a hash maps an infinite universe of possible inputs into a fixed 256-bit output, losing information in the process. It cannot be reversed mathematically.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Should I use plain SHA-256 to hash user passwords?</div>
      <div class="faq-answer">No. While SHA-256 is secure for data integrity and digital signatures, it is designed to be computationally fast. Attackers equipped with modern GPUs can compute billions of SHA-256 hashes per second using rainbow tables and brute force. For passwords, always use slow, salted cryptographic functions like Argon2id, bcrypt, or PBKDF2.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Has anyone ever found a SHA-256 collision?</div>
      <div class="faq-answer">No. To date, no collision has ever been discovered for SHA-256. Finding a collision would require approximately 2^128 operations, which exceeds the combined computational capacity of all computers on Earth running for billions of years.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">How does SHA-256 differ from SHA-1 and MD5?</div>
      <div class="faq-answer">MD5 (128-bit) and SHA-1 (160-bit) have both been broken by practical collision attacks and are officially deprecated for security purposes. SHA-256 provides a much larger 256-bit keyspace and remains cryptographically secure against all known practical attacks.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SHA-256 Hash Generator",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Compute 256-bit cryptographic SHA-256 message digests online using the browser Web Cryptography API."
  }
};

const md5Generator = {
  filename: 'tools/md5-generator.html',
  name: 'MD5 Hash Generator',
  metaTitle: 'MD5 Hash Generator Online - Compute 128-Bit RFC 1321 Checksums',
  metaDesc: 'Generate standard 128-bit MD5 checksums online for file integrity validation and legacy database indexing. 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/md5-generator.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/md5-generator.html' },
    { name: 'MD5 Generator', url: '/tools/md5-generator.html' }
  ],
  workspace: wsMd5.workspace,
  script: wsMd5.script,
  relatedTools: wsMd5.relatedTools,
  description: 'Generate standard 128-bit checksums for validating file integrity and basic string checks.',
  detailedDescription: `
    <p>The <strong>Message Digest Algorithm 5 (MD5)</strong> is a widely used hash function standardized by Ronald Rivest in 1991 under <strong>RFC 1321</strong>. MD5 takes an input string or file buffer and produces a fixed-size <strong>128-bit (16-byte)</strong> checksum, typically rendered as a 32-character hexadecimal string.</p>

    <h3>Historical Context & Cryptographic Status</h3>
    <p>When MD5 was initially introduced, it was widely adopted for digital signatures, password storage, and message integrity verification. However, beginning in 2004, cryptographic researchers (notably Xiaoyun Wang et al.) demonstrated that MD5 is fundamentally vulnerable to <strong>collision attacks</strong>, where two different inputs can be crafted to produce the exact same MD5 digest.</p>
    <p>Consequently, in 2008 the United States Computer Emergency Readiness Team (US-CERT) declared that MD5 <em>"should be considered cryptographically broken and unsuitable for further use"</em> in security-sensitive applications such as SSL/TLS certificates and password hashing.</p>

    <div class="callout-box callout-warning">
      <strong>Important Security Guidance:</strong> MD5 must <strong>NEVER</strong> be used to hash passwords, authenticate tokens, or sign cryptographic certificates. For security-critical applications, always use SHA-256, SHA-512, or salted password hashing algorithms (Argon2id or bcrypt).
    </div>

    <h3>Legitimate Modern Use Cases for MD5</h3>
    <p>Despite being cryptographically broken for security, MD5 remains popular for non-adversarial utility purposes:</p>
    <ul>
      <li><strong>File Transfer Verification:</strong> Verifying that large software downloads, ISO disk images, or datasets were not corrupted during download.</li>
      <li><strong>AWS S3 ETag Checksums:</strong> Amazon S3 uses the MD5 digest of an uploaded object as its default ETag for single-part uploads to verify transmission integrity.</li>
      <li><strong>Database Partitioning &amp; Cache Keys:</strong> Fast string hashing for sharding tables or building unique cache keys in Redis and Memcached.</li>
      <li><strong>File Deduplication:</strong> Quickly identifying duplicate images or documents in large file systems before conducting byte-by-byte comparisons.</li>
    </ul>
  `,
  howToUse: `
    <ol>
      <li><strong>Input Text:</strong> Type or paste your plaintext string, file checksum, or identifier into the input textarea.</li>
      <li><strong>Generate MD5:</strong> Click the <strong>Generate Hash</strong> button to execute the 128-bit hashing algorithm locally.</li>
      <li><strong>Inspect 32-Character Digest:</strong> The computed 32-character hexadecimal MD5 checksum appears instantly in the output preview.</li>
      <li><strong>Copy to Clipboard:</strong> Click the <strong>Copy</strong> button to capture the checksum for integration into deployment scripts or verification checks.</li>
    </ol>
  `,
  example: `
    <p><strong>Sample Input:</strong></p>
    <div class="code-snippet-block">The quick brown fox jumps over the lazy dog</div>

    <p style="margin-top: 1rem;"><strong>Canonical 32-Character MD5 Checksum:</strong></p>
    <div class="code-snippet-block">9e107d9d372bb6826bd81d3542a419d6</div>

    <p style="margin-top: 1rem;"><strong>Generating MD5 in Node.js:</strong></p>
    <div class="code-snippet-block">const crypto = require('crypto');
const hash = crypto.createHash('md5').update('DevToolHubs').digest('hex');
console.log(hash); // 32-char hex string</div>

    <p style="margin-top: 1rem;"><strong>Generating MD5 in Python:</strong></p>
    <div class="code-snippet-block">import hashlib
checksum = hashlib.md5(b'DevToolHubs').hexdigest()
print(checksum)</div>
  `,
  benefits: `
    <ul>
      <li><strong>RFC 1321 Compliance:</strong> Generates canonical 128-bit checksums identical to standard Linux <code>md5sum</code> utilities.</li>
      <li><strong>S3 ETag Compatibility:</strong> Ideal for cross-referencing multi-cloud file upload ETags against local files.</li>
      <li><strong>100% Client-Side Privacy:</strong> Calculations happen in your browser sandbox without remote transmission.</li>
      <li><strong>Blazing Fast:</strong> High-performance execution optimized for rapid developer testing.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">Why is MD5 considered insecure?</div>
      <div class="faq-answer">Researchers discovered practical collision attacks where two different files can be generated with identical MD5 checksums in mere seconds on commodity hardware. This allows attackers to create a malicious executable that possesses the exact same MD5 hash as a trusted software package.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Is it still safe to use MD5 for file checksums?</div>
      <div class="faq-answer">Yes, as long as you are only checking for accidental corruption (such as network packet loss or bad disk sectors) rather than intentional tampering by an adversary. If you suspect an active adversary could tamper with the download, use SHA-256 instead.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why is the MD5 output always 32 characters long?</div>
      <div class="faq-answer">MD5 always produces a 128-bit integer regardless of input length. When represented in hexadecimal notation, each character represents 4 bits (1 nibble), resulting in exactly 128 / 4 = 32 hexadecimal characters.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">How does MD5 compare with CRC32?</div>
      <div class="faq-answer">CRC32 produces a 32-bit checksum and is extremely fast, but has a high chance of collision across large datasets. MD5 produces a 128-bit digest, offering vastly superior collision resistance against accidental data corruption.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MD5 Hash Generator",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Generate standard 128-bit RFC 1321 MD5 checksums online for file integrity checks and non-cryptographic digests."
  }
};

const hashGenerator = {
  filename: 'tools/hash-generator.html',
  name: 'Multi-Hash Generator',
  metaTitle: 'Multi-Hash Generator Online - MD5, SHA-1, SHA-256, SHA-384, SHA-512',
  metaDesc: 'Generate and compare MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic digests simultaneously with 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/hash-generator.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/hash-generator.html' },
    { name: 'Hash Generator', url: '/tools/hash-generator.html' }
  ],
  workspace: wsMulti.workspace,
  script: wsMulti.script,
  relatedTools: wsMulti.relatedTools,
  description: 'Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes simultaneously for comparison.',
  detailedDescription: `
    <p>Cryptographic hash algorithms are standard mathematical primitives used across software engineering for data integrity, digital signatures, HMAC message authentication, and commit tracking. However, choosing the right hash function involves understanding trade-offs between <strong>output digest length</strong>, <strong>computation speed</strong>, and <strong>cryptographic collision resistance</strong>.</p>

    <h3>Side-by-Side Comparison of Hashing Algorithms</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Output Length</th>
            <th>Standard Reference</th>
            <th>Security Status</th>
            <th>Primary Contemporary Use Cases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MD5</strong></td>
            <td>128 bits (32 hex chars)</td>
            <td>RFC 1321</td>
            <td><span style="color: var(--danger); font-weight: bold;">Broken</span> (Collision vulnerable)</td>
            <td>Non-cryptographic checksums, AWS S3 ETags, cache keys</td>
          </tr>
          <tr>
            <td><strong>SHA-1</strong></td>
            <td>160 bits (40 hex chars)</td>
            <td>FIPS PUB 180-1</td>
            <td><span style="color: var(--warning); font-weight: bold;">Deprecated</span> (SHAttered attack)</td>
            <td>Legacy Git commit object IDs, legacy systems</td>
          </tr>
          <tr>
            <td><strong>SHA-256</strong></td>
            <td>256 bits (64 hex chars)</td>
            <td>FIPS PUB 180-4</td>
            <td><span style="color: var(--success); font-weight: bold;">Secure</span> (Industry standard)</td>
            <td>TLS/SSL certificates, Bitcoin PoW, software verification</td>
          </tr>
          <tr>
            <td><strong>SHA-384</strong></td>
            <td>384 bits (96 hex chars)</td>
            <td>FIPS PUB 180-4</td>
            <td><span style="color: var(--success); font-weight: bold;">Secure</span> (High security)</td>
            <td>NSA Suite B, enterprise cryptographic protocols</td>
          </tr>
          <tr>
            <td><strong>SHA-512</strong></td>
            <td>512 bits (128 hex chars)</td>
            <td>FIPS PUB 180-4</td>
            <td><span style="color: var(--success); font-weight: bold;">Secure</span> (Maximum security)</td>
            <td>High-security signatures, 64-bit architecture speed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-info">
      <strong>Performance Characteristic on 64-bit CPUs:</strong> Because SHA-512 utilizes 64-bit word operations natively, it is frequently faster to compute on modern 64-bit processors (x86_64 and ARM64) than SHA-256 (which uses 32-bit words), despite producing a digest twice as long.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Input String:</strong> Type or paste your plaintext string, identifier, or token into the main input box.</li>
      <li><strong>Simultaneous Calculation:</strong> The tool automatically computes MD5, SHA-1, SHA-256, SHA-384, and SHA-512 digests in parallel using the Web Cryptography API.</li>
      <li><strong>Compare Outputs:</strong> Inspect the resulting digests side-by-side to verify matching parameters across security standards.</li>
      <li><strong>Copy Any Digest:</strong> Click the dedicated copy icon next to any specific algorithm to immediately capture that digest.</li>
    </ol>
  `,
  example: `
    <p><strong>Input:</strong> <code>DevToolHubs</code></p>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Hexadecimal Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MD5 (128-bit)</strong></td>
            <td><code>47e0981d3f58a36fa5e9b8970104ad54</code></td>
          </tr>
          <tr>
            <td><strong>SHA-1 (160-bit)</strong></td>
            <td><code>f71887e504c55d048d08404a55928f6d35706cc9</code></td>
          </tr>
          <tr>
            <td><strong>SHA-256 (256-bit)</strong></td>
            <td><code>5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  benefits: `
    <ul>
      <li><strong>Simultaneous Multi-Algorithm Output:</strong> Eliminates switching between multiple pages to compute different hash digests.</li>
      <li><strong>Hardware Accelerated:</strong> Harnesses native browser SubtleCrypto APIs for maximum calculation speed.</li>
      <li><strong>Direct Visual Comparison:</strong> Easily compare bit lengths and check against expected checksum files.</li>
      <li><strong>100% Client-Side Privacy:</strong> Zero external transmission, safeguarding private keys and strings.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">Why would someone choose SHA-512 over SHA-256?</div>
      <div class="faq-answer">SHA-512 provides a 512-bit output, offering even higher theoretical collision resistance (2^256 vs 2^128 operations). Furthermore, on 64-bit CPUs, SHA-512 can actually outperform SHA-256 because its inner loop operates on 64-bit words rather than 32-bit words.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Can I use this tool to verify downloaded software checksums?</div>
      <div class="faq-answer">Yes! Simply paste the expected string or token to see its corresponding hashes, or compute the checksum to compare against the SHA256SUMS or MD5SUMS file provided by the software vendor.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What is HMAC and how does it relate to these hashes?</div>
      <div class="faq-answer">A Hash-based Message Authentication Code (HMAC) combines any of these hash functions (such as HMAC-SHA256) with a secret cryptographic key. It allows two communicating parties to verify both the data integrity AND the authenticity of a message.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Multi-Hash Generator",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes simultaneously online with complete client-side privacy."
  }
};

module.exports = { sha256Generator, md5Generator, hashGenerator };
