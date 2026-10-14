const workspaces = require('../workspaces.json');
const ws = workspaces['tools/epoch-converter.html'];

module.exports = {
  filename: 'tools/epoch-converter.html',
  name: 'Unix Epoch & Timestamp Converter',
  metaTitle: 'Unix Timestamp Converter - Epoch to Human Date UTC & Local Time',
  metaDesc: 'Convert Unix timestamps (seconds & milliseconds) to human-readable dates (UTC, ISO 8601, RFC 2822, Local) and vice versa. Live ticking epoch clock with zero server logging.',
  canonical: 'https://devtoolhubs.com/tools/epoch-converter.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/json-validator.html' },
    { name: 'Epoch Converter', url: '/tools/epoch-converter.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Convert numeric Unix epoch timestamps in seconds and milliseconds to human-readable dates, ISO 8601, RFC 2822, and UTC strings instantly.',
  detailedDescription: `
    <p>A <strong>Unix Epoch Timestamp</strong> (also referred to as POSIX time or Unix time) measures the elapsed time expressed as the total number of seconds that have passed since the <strong>Unix Epoch</strong>: <code>00:00:00 UTC on Thursday, 1 January 1970</code>, without taking leap seconds into account. Unix time is the global de facto standard for representing absolute points in time across operating systems, distributed database records, JWT token expirations (<code>exp</code> and <code>iat</code> claims), message queues (Apache Kafka, RabbitMQ), and microservice logging architectures.</p>

    <h3>Why Epoch Timestamps are Essential in Software Engineering</h3>
    <p>Unlike human calendar dates, which are vulnerable to timezone discrepancies, daylight saving time (DST) shifts, leap years, and regional formatting ambiguities (such as the confusing <code>MM/DD/YYYY</code> vs <code>DD/MM/YYYY</code> conventions), an epoch timestamp is an immutable scalar integer. When server instances communicate across continents, exchanging timestamps eliminates ambiguity and enables blazing-fast mathematical comparisons (e.g., <code>timestampA &gt; timestampB</code>) and index sorting.</p>

    <h3>Seconds vs. Milliseconds vs. Microseconds: Precision Matrix</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Unit Level</th>
            <th>Digit Length</th>
            <th>Sample Value</th>
            <th>Typical Programming Ecosystem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Seconds</strong></td>
            <td>10 Digits</td>
            <td><code>1760460000</code></td>
            <td>POSIX / Linux Kernel, Python (<code>time.time()</code>), PHP, MySQL <code>UNIX_TIMESTAMP()</code>, JWT <code>exp</code></td>
          </tr>
          <tr>
            <td><strong>Milliseconds</strong></td>
            <td>13 Digits</td>
            <td><code>1760460000000</code></td>
            <td>JavaScript (<code>Date.now()</code>), Java (<code>System.currentTimeMillis()</code>), MongoDB, Elasticsearch</td>
          </tr>
          <tr>
            <td><strong>Microseconds</strong></td>
            <td>16 Digits</td>
            <td><code>1760460000000000</code></td>
            <td>PostgreSQL timestamps, Go (<code>time.Now().UnixMicro()</code>), C++ high-resolution chronometry</td>
          </tr>
          <tr>
            <td><strong>Nanoseconds</strong></td>
            <td>19 Digits</td>
            <td><code>1760460000000000000</code></td>
            <td>Go (<code>time.Now().UnixNano()</code>), Rust (<code>Instant</code>), Linux high-frequency trading engines</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>The Year 2038 Problem (Y2038 / Unix Millenium Bug)</h3>
    <p>Historic 32-bit computer systems store Unix timestamps as a signed 32-bit integer (<code>int32</code>). The maximum value that can be represented by a signed 32-bit integer is <code>2,147,483,647</code>. On <strong>Tuesday, 19 January 2038 at 03:14:07 UTC</strong>, this integer will overflow into negative values (wrapping around to <code>-2,147,483,648</code>), causing affected 32-bit kernels to misinterpret the date as December 13, 1901.</p>
    <p>Modern 64-bit systems allocate a 64-bit signed integer (<code>int64</code>) for timestamps, raising the maximum date limit to approximately <strong>292 billion years in the future</strong>, ensuring long-term systemic stability.</p>

    <h3>How to Obtain Current Epoch in Common Languages</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Language</th>
            <th>Seconds Code Snippet</th>
            <th>Milliseconds Code Snippet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>JavaScript (Node.js)</strong></td>
            <td><code>Math.floor(Date.now() / 1000)</code></td>
            <td><code>Date.now()</code></td>
          </tr>
          <tr>
            <td><strong>Python</strong></td>
            <td><code>import time; int(time.time())</code></td>
            <td><code>int(time.time() * 1000)</code></td>
          </tr>
          <tr>
            <td><strong>Go (Golang)</strong></td>
            <td><code>time.Now().Unix()</code></td>
            <td><code>time.Now().UnixMilli()</code></td>
          </tr>
          <tr>
            <td><strong>PHP</strong></td>
            <td><code>time()</code></td>
            <td><code>round(microtime(true) * 1000)</code></td>
          </tr>
          <tr>
            <td><strong>Java</strong></td>
            <td><code>Instant.now().getEpochSecond()</code></td>
            <td><code>System.currentTimeMillis()</code></td>
          </tr>
          <tr>
            <td><strong>Bash / Linux CLI</strong></td>
            <td><code>date +%s</code></td>
            <td><code>date +%s%3N</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>To convert a timestamp to human date:</strong> Paste any 10-digit (seconds) or 13-digit (milliseconds) Unix number into the timestamp input and click <em>Convert Timestamp</em>. The tool automatically detects precision and renders UTC, Local, ISO 8601, and Relative time representations.</li>
      <li><strong>To convert human date to epoch:</strong> Select a target calendar date and time from the date-picker and click <em>Convert Date</em> to obtain corresponding Unix epoch seconds and milliseconds.</li>
      <li><strong>Live Ticking Clock:</strong> Reference the top bar to inspect current Unix seconds and milliseconds in real-time, with one-click copy buttons.</li>
    </ol>
  `,
  example: `
    <p>Input Timestamp: <code>1760460000</code></p>
    <ul>
      <li><strong>UTC Time:</strong> Wed, 14 Oct 2026 16:40:00 GMT</li>
      <li><strong>ISO 8601:</strong> <code>2026-10-14T16:40:00.000Z</code></li>
      <li><strong>RFC 2822:</strong> Wed, 14 Oct 2026 16:40:00 +0000</li>
      <li><strong>Auto-Detected Precision:</strong> Seconds (10 digits)</li>
    </ul>
  `,
  benefits: `
    <ul>
      <li><strong>Client-Side Execution:</strong> All calculations run entirely inside your browser's V8 engine; no timestamp queries are dispatched over the network.</li>
      <li><strong>Smart Auto-Detection:</strong> Intelligently infers whether an entered timestamp is in seconds, milliseconds, or microseconds without manual toggles.</li>
      <li><strong>High Precision:</strong> Supports ISO 8601, RFC 2822, and human relative phrasing (e.g., "5 hours ago", "in 2 weeks").</li>
      <li><strong>Zero Latency:</strong> Instant instantaneous conversions for debugging API logs, database records, and authentication tokens.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What is a Unix epoch timestamp?</div>
      <div class="faq-answer">A Unix timestamp is an integer counting the number of seconds that have elapsed since the Unix epoch, defined as January 1, 1970 at 00:00:00 UTC. It provides an absolute, timezone-neutral temporal reference for computers and databases worldwide.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">How does this tool distinguish between seconds and milliseconds?</div>
      <div class="faq-answer">Current timestamps in seconds consist of 10 digits (e.g. ~1.7 billion in the 2020s), whereas timestamps in milliseconds consist of 13 digits. DevToolHubs inspects the numeric magnitude: values below 10 billion are treated as seconds, while larger values are parsed as milliseconds.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Does Unix time take leap seconds into account?</div>
      <div class="faq-answer">No. Under POSIX specifications, every standard day in Unix time contains exactly 86,400 seconds. When International Earth Rotation and Reference Systems Service (IERS) inserts a leap second, Unix clocks repeat or slew a second rather than indexing an 86,401st second.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What is the difference between GMT and UTC?</div>
      <div class="faq-answer">Greenwich Mean Time (GMT) is a historic solar-based time zone originally measured from the Royal Observatory in Greenwich, London. Coordinated Universal Time (UTC) is the ultra-precise atomic time standard governed by atomic clocks. For almost all software engineering applications, GMT and UTC reflect identical times with zero hour offset.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Why did my database timestamp convert to a different hour on my computer?</div>
      <div class="faq-answer">When an absolute UTC timestamp is converted into a human-readable calendar string, your web browser automatically applies your local operating system timezone offset. DevToolHubs displays both the standardized UTC date and your local regional time for complete transparency.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What will happen during the Year 2038 problem?</div>
      <div class="faq-answer">On January 19, 2038, systems relying on signed 32-bit integers to hold epoch seconds will overflow into negative numbers, interpreting the date as 1901. Modern systems, databases, and programming languages have upgraded to 64-bit integers, effectively preventing any disruption for the next 292 billion years.</div>
    </div>
  `,
  schema: {
    "@type": "SoftwareApplication",
    "name": "Unix Epoch & Timestamp Converter",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Convert Unix epoch timestamps in seconds and milliseconds to human-readable dates, UTC, ISO 8601, and RFC 2822 with 100% client-side privacy."
  }
};
