const workspaces = require('../workspaces.json');
const ws = workspaces['tools/cron-generator.html'];

module.exports = {
  filename: 'tools/cron-generator.html',
  name: 'Cron Expression Generator',
  metaTitle: 'Cron Expression Generator & Crontab Schedule Builder Online',
  metaDesc: 'Visual Crontab builder and cron schedule generator. Translate 5-field cron syntax into human-readable schedules with 100% client-side privacy.',
  canonical: 'https://devtoolhubs.com/tools/cron-generator.html',
  breadcrumbs: [
    { name: 'Tools', url: '/tools/cron-generator.html' },
    { name: 'Cron Generator', url: '/tools/cron-generator.html' }
  ],
  workspace: ws.workspace,
  script: ws.script,
  relatedTools: ws.relatedTools,
  description: 'Convert visual schedule configurations into standard 5-part POSIX crontab expressions.',
  detailedDescription: `
    <p>A <strong>cron expression</strong> is a standardized string format used to configure recurring automated tasks in Unix-like operating systems (Linux, macOS, BSD) via the <strong>crontab</strong> daemon, as well as modern cloud schedulers such as AWS CloudWatch Events/EventBridge, Google Cloud Scheduler, Kubernetes CronJobs, and Node.js task runners (like <code>node-cron</code> and <code>agenda</code>).</p>

    <h3>The Standard 5-Field POSIX Cron Syntax</h3>
    <p>In standard POSIX crontab configuration, each scheduled job is defined by five distinct time and date fields separated by whitespace, followed by the command line to be executed:</p>
    <div class="code-snippet-block" style="font-size: 1rem; font-weight: bold;">
      * &nbsp;&nbsp;&nbsp;&nbsp;* &nbsp;&nbsp;&nbsp;&nbsp;* &nbsp;&nbsp;&nbsp;&nbsp;* &nbsp;&nbsp;&nbsp;&nbsp;*<br>
      ┬ &nbsp;&nbsp;&nbsp;┬ &nbsp;&nbsp;&nbsp;┬ &nbsp;&nbsp;&nbsp;┬ &nbsp;&nbsp;&nbsp;┬<br>
      │ &nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;└─── Day of Week (0 - 6) (0 = Sunday, 6 = Saturday)<br>
      │ &nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;└──────── Month (1 - 12)<br>
      │ &nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;└───────────── Day of Month (1 - 31)<br>
      │ &nbsp;&nbsp;&nbsp;└────────────────── Hour (0 - 23)<br>
      └─────────────────────── Minute (0 - 59)
    </div>

    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Field #</th>
            <th>Name</th>
            <th>Allowed Values</th>
            <th>Special Characters Supported</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><strong>Minute</strong></td>
            <td>0 - 59</td>
            <td><code>*</code> , <code>-</code> , <code>/</code></td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Hour</strong></td>
            <td>0 - 23 (24-hour military format)</td>
            <td><code>*</code> , <code>-</code> , <code>/</code></td>
          </tr>
          <tr>
            <td>3</td>
            <td><strong>Day of Month</strong></td>
            <td>1 - 31</td>
            <td><code>*</code> , <code>-</code> , <code>/</code> , <code>?</code> , <code>L</code> , <code>W</code></td>
          </tr>
          <tr>
            <td>4</td>
            <td><strong>Month</strong></td>
            <td>1 - 12 or JAN - DEC</td>
            <td><code>*</code> , <code>-</code> , <code>/</code></td>
          </tr>
          <tr>
            <td>5</td>
            <td><strong>Day of Week</strong></td>
            <td>0 - 6 (0 = Sunday) or SUN - SAT</td>
            <td><code>*</code> , <code>-</code> , <code>/</code> , <code>?</code> , <code>L</code> , <code>#</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Special Characters Reference</h3>
    <ul>
      <li><strong>Asterisk (<code>*</code>):</strong> Wildcard representing "every" possible value for that field (e.g. <code>*</code> in the Minute field means "every minute").</li>
      <li><strong>Comma (<code>,</code>):</strong> Value list separator allowing multiple distinct execution intervals (e.g. <code>1,15,30</code> in Minute field).</li>
      <li><strong>Hyphen (<code>-</code>):</strong> Defines an inclusive numerical range (e.g. <code>9-17</code> in Hour field means every hour from 9 AM to 5 PM).</li>
      <li><strong>Slash (<code>/</code>):</strong> Specifies step intervals (e.g. <code>*/15</code> in Minute field means "every 15 minutes", starting at 0).</li>
    </ul>

    <h3>Standard Cron Schedules Cheat Sheet</h3>
    <div class="content-table-wrapper">
      <table class="content-table">
        <thead>
          <tr>
            <th>Schedule</th>
            <th>Cron Expression</th>
            <th>Execution Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Every minute</td>
            <td><code>* * * * *</code></td>
            <td>Runs at the beginning of every single minute.</td>
          </tr>
          <tr>
            <td>Every 5 minutes</td>
            <td><code>*/5 * * * *</code></td>
            <td>Runs at minutes 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, and 55.</td>
          </tr>
          <tr>
            <td>Every hour on the hour</td>
            <td><code>0 * * * *</code></td>
            <td>Runs at minute 0 of every hour.</td>
          </tr>
          <tr>
            <td>Daily at midnight</td>
            <td><code>0 0 * * *</code></td>
            <td>Runs every day at 00:00 (12:00 AM).</td>
          </tr>
          <tr>
            <td>Weekdays at 9:00 AM</td>
            <td><code>0 9 * * 1-5</code></td>
            <td>Runs Monday through Friday at 09:00 AM.</td>
          </tr>
          <tr>
            <td>Weekly on Sunday at 2 AM</td>
            <td><code>0 2 * * 0</code></td>
            <td>Runs every Sunday at 02:00 AM (typical for weekly database backups).</td>
          </tr>
          <tr>
            <td>First day of every month at midnight</td>
            <td><code>0 0 1 * *</code></td>
            <td>Runs at 00:00 on day 1 of every month.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout-box callout-info">
      <strong>Crontab Best Practice:</strong> When deploying cron jobs in production Linux environments, always redirect both standard output (stdout) and standard error (stderr) to a log file or <code>/dev/null</code> (e.g. <code>0 2 * * * /usr/local/bin/backup.sh &gt;&gt; /var/log/backup.log 2&gt;&amp;1</code>) to prevent cron from spamming the system mail queue.
    </div>
  `,
  howToUse: `
    <ol>
      <li><strong>Select Desired Interval:</strong> Use the interactive select controls to pick your schedule for Minutes, Hours, Day of Month, Month, and Day of Week.</li>
      <li><strong>Automatic Expression Construction:</strong> The tool continuously builds and updates the standard 5-part POSIX cron string as you modify dropdowns.</li>
      <li><strong>Human-Readable Interpretation:</strong> Read the translated English schedule description underneath the generated expression to verify the exact scheduled timing.</li>
      <li><strong>Copy Expression:</strong> Click <strong>Copy Expression</strong> to immediately copy the generated cron string to your clipboard for your crontab file, Kubernetes manifest, or cloud scheduler.</li>
    </ol>
  `,
  example: `
    <p><strong>Example 1: Running a Database Backup Every Night at 2:30 AM:</strong></p>
    <div class="code-snippet-block">30 2 * * * /opt/scripts/db_backup.sh >> /var/log/db_backup.log 2>&1</div>

    <p style="margin-top: 1rem;"><strong>Example 2: Clearing Cache Every 15 Minutes:</strong></p>
    <div class="code-snippet-block">*/15 * * * * /usr/bin/php /var/www/html/artisan cache:clear</div>

    <p style="margin-top: 1rem;"><strong>Editing Crontab on Linux/macOS:</strong></p>
    <div class="code-snippet-block"># View current scheduled jobs
crontab -l

# Edit crontab file in terminal
crontab -e</div>

    <p style="margin-top: 1rem;"><strong>Scheduling in Node.js with node-cron:</strong></p>
    <div class="code-snippet-block">const cron = require('node-cron');

// Schedule task to run every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running daily midnight maintenance job...');
});</div>
  `,
  benefits: `
    <ul>
      <li><strong>Eliminates Syntax Errors:</strong> Build valid POSIX expressions visually without memorizing field orders or special characters.</li>
      <li><strong>Immediate Human Translation:</strong> Instantly translates confusing numbers into natural English explanations.</li>
      <li><strong>Universal Compatibility:</strong> Generated expressions work seamlessly across Linux crontab, Docker, Kubernetes, AWS, and GCP.</li>
      <li><strong>100% Client-Side Privacy:</strong> Build your infrastructure schedules without server logging or external tracking.</li>
      <li><strong>One-Click Workflow:</strong> Quickly copy the finalized expression directly into your terminal or deployment templates.</li>
    </ul>
  `,
  faqs: `
    <div class="faq-item">
      <div class="faq-question">What is the difference between 5-field and 6-field/7-field cron expressions?</div>
      <div class="faq-answer">Standard Unix/Linux crontab uses 5 fields (Minute, Hour, Day of Month, Month, Day of Week). Some framework schedulers (such as Quartz in Java, Spring Boot, or AWS EventBridge) introduce a 6th field for Seconds at the beginning or a 7th field for Year at the end. Our generator focuses on the universal 5-field POSIX standard.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Does 0 or 7 represent Sunday in cron?</div>
      <div class="faq-answer">In most modern Linux implementations (Vixie Cron), both <code>0</code> and <code>7</code> represent Sunday. However, sticking to <code>0</code> for Sunday (0 = Sunday, 1 = Monday, ..., 6 = Saturday) ensures strict compliance across all BSD, macOS, and POSIX systems.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">What happens if both Day of Month and Day of Week are specified?</div>
      <div class="faq-answer">In standard POSIX crontab, when both Day of Month (field 3) and Day of Week (field 5) are specified with non-asterisk values, the command will execute when EITHER condition is met (an OR relationship, not an AND relationship). For example, <code>0 0 15 * 5</code> executes on the 15th of the month AND on every Friday.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">Which timezone does crontab execute in?</div>
      <div class="faq-answer">By default, standard system crontab runs according to the local timezone configured on the host operating system (often UTC on cloud servers). You can explicitly define <code>CRON_TZ=America/New_York</code> at the top of your crontab file on modern Linux distributions to enforce a specific timezone.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question">How do I test if my cron job is actually running?</div>
      <div class="faq-answer">On Linux, you can inspect cron execution logs via <code>journalctl -u cron</code> (or <code>grep CRON /var/log/syslog</code> on Debian/Ubuntu, or <code>/var/log/cron</code> on CentOS/RHEL). Additionally, writing job output to a specific log file (e.g. <code>&gt;&gt; /tmp/cron_test.log 2&gt;&amp;1</code>) allows you to verify execution timestamps and view error traces.</div>
    </div>
  `,
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cron Expression Generator",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Visual crontab schedule builder and cron expression generator. Translate 5-part POSIX syntax into readable schedules with client-side privacy."
  }
};
