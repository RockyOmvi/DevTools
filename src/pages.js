module.exports = {
  // Main and Essential Pages
  general: [
    {
      filename: 'index.html',
      metaTitle: 'DevTools Hub - Free All-In-One Developer Utilities',
      metaDesc: 'A premium, browser-based suite of tools for web developers and engineers. Validate JSON, decode JWT, test Regex, hash passwords, compare diffs, test APIs and more.',
      canonical: 'https://devtoolshub.local/',
      breadcrumbs: [],
      content: `
        <div class="home-hero">
          <h1>Modern Developer Utilities, All In One Place</h1>
          <p>Completely secure, privacy-first, and client-side web tools. We never send your data to any server—everything is processed instantly in your browser.</p>
        </div>
        
        <div class="home-categories">
          <button class="category-tab active" onclick="filterCategory('all')">All Tools</button>
          <button class="category-tab" onclick="filterCategory('validation')">Validators & Parsers</button>
          <button class="category-tab" onclick="filterCategory('generators')">Generators</button>
          <button class="category-tab" onclick="filterCategory('security')">Hashing & Security</button>
          <button class="category-tab" onclick="filterCategory('network')">Network & APIs</button>
        </div>

        <div class="tools-grid" id="toolsGrid">
          <!-- Card: JSON Validator -->
          <div class="tool-card" data-category="validation">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <h3>JSON Validator</h3>
              <p>Prettify, format, parse, and validate JSON data strings in real-time with granular syntax error tracking.</p>
            </div>
            <a href="/tools/json-validator.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: JWT Decoder -->
          <div class="tool-card" data-category="validation">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
              </div>
              <h3>JWT Decoder</h3>
              <p>Decode JSON Web Tokens (JWT) safely to extract header details, JSON payload data, and verify token timelines.</p>
            </div>
            <a href="/tools/jwt-decoder.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: Regex Tester -->
          <div class="tool-card" data-category="validation">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              </div>
              <h3>Regex Tester</h3>
              <p>Verify and test your regular expressions in real-time. Features flag configurations and group matches inspection.</p>
            </div>
            <a href="/tools/regex-tester.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: URL Encoder -->
          <div class="tool-card" data-category="validation">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
              </div>
              <h3>URL Encoder</h3>
              <p>Convert unsafe query parameter strings into secure, percent-encoded string structures.</p>
            </div>
            <a href="/tools/url-encoder.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: URL Decoder -->
          <div class="tool-card" data-category="validation">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
              </div>
              <h3>URL Decoder</h3>
              <p>Decode percent-encoded strings back into readable parameter formats instantly.</p>
            </div>
            <a href="/tools/url-decoder.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: Cron Generator -->
          <div class="tool-card" data-category="generators">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              </div>
              <h3>Cron Generator</h3>
              <p>Build crontab schedules easily with options. Translates expressions to natural language and previews run times.</p>
            </div>
            <a href="/tools/cron-generator.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: UUID Generator -->
          <div class="tool-card" data-category="generators">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
              </div>
              <h3>UUID Generator</h3>
              <p>Generate RFC4122 compliant single or batch Version 1 and Version 4 UUIDs instantly.</p>
            </div>
            <a href="/tools/uuid-generator.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: SHA256 Generator -->
          <div class="tool-card" data-category="security">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 15l-4-4 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/></svg>
              </div>
              <h3>SHA256 Hash Generator</h3>
              <p>Generate highly secure cryptographic SHA-256 signatures for security, hashing and hashing analysis.</p>
            </div>
            <a href="/tools/sha256-generator.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: MD5 Generator -->
          <div class="tool-card" data-category="security">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <h3>MD5 Hash Generator</h3>
              <p>Generate standard 128-bit checksums for validating file integrity and basic string checks.</p>
            </div>
            <a href="/tools/md5-generator.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: Hash Generator -->
          <div class="tool-card" data-category="security">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>
              </div>
              <h3>Hash Generator (Multi)</h3>
              <p>Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes simultaneously for comparison.</p>
            </div>
            <a href="/tools/hash-generator.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: Diff Checker -->
          <div class="tool-card" data-category="validation">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
              </div>
              <h3>Diff Checker</h3>
              <p>Compare two blocks of code or text to identify changes line-by-line using high performance visualization.</p>
            </div>
            <a href="/tools/diff-checker.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Card: API Tester -->
          <div class="tool-card" data-category="network">
            <div>
              <div class="tool-card-icon">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>
              </div>
              <h3>API Tester</h3>
              <p>Test HTTP request payloads directly in-browser. Build custom headers, mock data configurations, and view raw details.</p>
            </div>
            <a href="/tools/api-tester.html" class="tool-card-btn">
              Open Tool
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <script>
          function filterCategory(cat) {
            const cards = document.querySelectorAll('.tool-card');
            const tabs = document.querySelectorAll('.category-tab');
            
            tabs.forEach(tab => {
              if(tab.getAttribute('onclick').includes(cat)) {
                tab.classList.add('active');
              } else {
                tab.classList.remove('active');
              }
            });

            cards.forEach(card => {
              if (cat === 'all' || card.getAttribute('data-category') === cat) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            });
          }
        </script>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "DevTools Hub",
        "url": "https://devtoolshub.local/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://devtoolshub.local/sitemap.html?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
    {
      filename: 'about.html',
      metaTitle: 'About Us - DevTools Hub',
      metaDesc: 'Learn more about DevTools Hub—a modern collection of online utilities built for developers, placing visual speed and user security above all.',
      canonical: 'https://devtoolshub.local/about.html',
      breadcrumbs: [{ name: 'About Us', url: '/about.html' }],
      content: `
        <div class="static-page-container">
          <h1>About Us</h1>
          <p>Welcome to <strong>DevTools Hub</strong>, a curated suite of high-performance developer utilities designed to streamline your daily workflows. We build utilities that we, as developers, need and use every single day.</p>
          <h2>Our Core Principles</h2>
          <ul>
            <li><strong>Privacy & Security First:</strong> All operations are processed strictly client-side. Your inputs, tokens, API requests, and data stay inside your browser storage and never touch our servers.</li>
            <li><strong>Blazing Fast Speeds:</strong> We optimize load times by avoiding heavy, bloated JS frameworks and compiling optimized, lightweight HTML and CSS documents.</li>
            <li><strong>Beautiful Aesthetics:</strong> A functional developer tool should also be a pleasure to work with. Our application features premium Dark and Light interfaces with responsive components.</li>
          </ul>
          <h2>Meet the Team</h2>
          <p>DevTools Hub is developed and maintained by a group of passionate software engineers who believe that high-quality, secure developer tooling should be free and accessible to everyone worldwide.</p>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us",
        "url": "https://devtoolshub.local/about.html",
        "description": "Learn about our development values, privacy guarantees, and lightweight tool sets."
      }
    },
    {
      filename: 'contact.html',
      metaTitle: 'Contact Us - DevTools Hub',
      metaDesc: 'Reach out to the DevTools Hub support team for suggestions, bug reports, or feature requests. Complete our contact form or contact us directly.',
      canonical: 'https://devtoolshub.local/contact.html',
      breadcrumbs: [{ name: 'Contact Us', url: '/contact.html' }],
      content: `
        <div class="static-page-container">
          <h1>Contact Us</h1>
          <p>Have questions, feedback, or custom tool requests? We would love to hear from you. Get in touch with our team using the contact options below.</p>
          
          <div class="contact-grid" style="margin-top: 2rem;">
            <div>
              <h3>Support Information</h3>
              <p>For support, suggestions, or potential partnership requests, email us directly:</p>
              <p><strong>Email:</strong> <a href="mailto:purushottamkumaroffical@gmail.com">purushottamkumaroffical@gmail.com</a></p>
              <p><strong>Response Time:</strong> We usually reply within 24-48 business hours.</p>
            </div>
            
            <div>
              <h3>Feedback Form</h3>
              <form id="contactForm" onsubmit="event.preventDefault(); window.showToast('Message sent! Thank you for your feedback.'); this.reset();" style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div class="form-group">
                  <label for="cName">Your Name</label>
                  <input type="text" id="cName" class="form-control" placeholder="Jane Doe" required>
                </div>
                <div class="form-group">
                  <label for="cEmail">Email Address</label>
                  <input type="email" id="cEmail" class="form-control" placeholder="jane@example.com" required>
                </div>
                <div class="form-group">
                  <label for="cMessage">Your Message</label>
                  <textarea id="cMessage" class="form-control" rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="align-self: flex-start;">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us",
        "url": "https://devtoolshub.local/contact.html",
        "description": "Contact DevTools Hub for tools updates, issues, or suggestions."
      }
    },
    {
      filename: 'privacy.html',
      metaTitle: 'Privacy Policy - DevTools Hub',
      metaDesc: 'Our Privacy Policy ensures your data stays fully inside your browser. We do not gather, store, or transmit your private text or tokens.',
      canonical: 'https://devtoolshub.local/privacy.html',
      breadcrumbs: [{ name: 'Privacy Policy', url: '/privacy.html' }],
      content: `
        <div class="static-page-container">
          <h1>Privacy Policy</h1>
          <p><strong>Last Updated: July 12, 2026</strong></p>
          <p>At DevTools Hub, we take your privacy extremely seriously. Because our tools operate completely client-side in your web browser, we do not collect, process, or transmit your text inputs, files, tokens, or configuration settings. Everything remains local to your device.</p>
          
          <h2>1. Information We Do Not Collect</h2>
          <p>When you use the JSON Validator, JWT Decoder, Hash Generator, API Tester, or any other utility, all data inputs and processed outputs remain in your browser's local sandbox memory. This data is never sent to our servers or third-party databases.</p>
          
          <h2>2. Analytics & Browser Cookies</h2>
          <p>We may use basic cookies or local storage settings strictly to save your user preferences, such as your chosen theme (Dark Mode / Light Mode).</p>
          
          <h2>3. Security</h2>
          <p>Since your computations are processed on your local machine, the risk of data intercept on transmission is eliminated. We encourage running this app over secure, HTTPS connections to protect browser runtimes.</p>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "url": "https://devtoolshub.local/privacy.html"
      }
    },
    {
      filename: 'terms.html',
      metaTitle: 'Terms & Conditions - DevTools Hub',
      metaDesc: 'Read our Terms of Service. Learn about standard usage rights and the client-side execution parameters of our developer toolset.',
      canonical: 'https://devtoolshub.local/terms.html',
      breadcrumbs: [{ name: 'Terms & Conditions', url: '/terms.html' }],
      content: `
        <div class="static-page-container">
          <h1>Terms & Conditions</h1>
          <p><strong>Last Updated: July 12, 2026</strong></p>
          <p>By accessing or using the DevTools Hub website, you agree to comply with and be bound by these standard terms. If you disagree, please stop using the site.</p>
          
          <h2>1. Use of Services</h2>
          <p>Our tools are provided entirely free of charge for commercial, educational, and personal web operations. You may not attempt to scrape or DDOS the platform interfaces.</p>
          
          <h2>2. Intellectual Property</h2>
          <p>The layout designs, CSS classes, build scripts, graphics, and code scripts belong to DevTools Hub and are protected under copyright rules.</p>
          
          <h2>3. Account / Usage Termination</h2>
          <p>We reserve the right to modify, terminate, or limit any part of this platform without prior notice.</p>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms & Conditions",
        "url": "https://devtoolshub.local/terms.html"
      }
    },
    {
      filename: 'disclaimer.html',
      metaTitle: 'Disclaimer of Warranties - DevTools Hub',
      metaDesc: 'Understand the standard disclaimer parameters. Our browser tools are provided as-is without any warranties of uninterrupted operation.',
      canonical: 'https://devtoolshub.local/disclaimer.html',
      breadcrumbs: [{ name: 'Disclaimer', url: '/disclaimer.html' }],
      content: `
        <div class="static-page-container">
          <h1>Disclaimer</h1>
          <p><strong>Effective Date: July 12, 2026</strong></p>
          <p>All tool outputs, hashes, validator results, cron patterns, and mock API tests provided by DevTools Hub are provided on an "as-is" and "as-available" basis without any express or implied warranties.</p>
          
          <h2>1. Accuracy of Tools</h2>
          <p>While we test our decoders, cron simulators, and validators for accuracy, bugs can occur. We do not warrant that all tools will perform perfectly, or meet custom server operations.</p>
          
          <h2>2. Professional Reliance</h2>
          <p>Do not rely solely on the tools for critical cryptographic setups or enterprise operations without double-checking outputs using alternative standard compilers.</p>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Disclaimer",
        "url": "https://devtoolshub.local/disclaimer.html"
      }
    },
    {
      filename: 'cookie-policy.html',
      metaTitle: 'Cookie Policy - DevTools Hub',
      metaDesc: 'Learn how we use simple browser storage and cookies to maintain your Dark/Light theme configuration and user preferences.',
      canonical: 'https://devtoolshub.local/cookie-policy.html',
      breadcrumbs: [{ name: 'Cookie Policy', url: '/cookie-policy.html' }],
      content: `
        <div class="static-page-container">
          <h1>Cookie Policy</h1>
          <p><strong>Effective Date: July 12, 2026</strong></p>
          <p>This Cookie Policy explains what cookies and local storage items we employ on DevTools Hub to improve your experience.</p>
          
          <h2>1. Strictly Necessary Storage</h2>
          <p>We use your browser's <code>localStorage</code> API to store your theme preferences (e.g. <code>theme = "dark"</code>). This item does not identify you, and is kept completely within your machine.</p>
          
          <h2>2. Managing Preferences</h2>
          <p>You can clear your cookies or local storage settings at any time in your browser settings configuration panel.</p>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Cookie Policy",
        "url": "https://devtoolshub.local/cookie-policy.html"
      }
    },
    {
      filename: 'dmca.html',
      metaTitle: 'DMCA & Copyright Policy - DevTools Hub',
      metaDesc: 'Read our copyright and DMCA compliance policy. Learn how to submit copyright claims to the DevTools Hub support team.',
      canonical: 'https://devtoolshub.local/dmca.html',
      breadcrumbs: [{ name: 'DMCA Policy', url: '/dmca.html' }],
      content: `
        <div class="static-page-container">
          <h1>DMCA & Copyright Policy</h1>
          <p><strong>Effective Date: July 12, 2026</strong></p>
          <p>We respect the intellectual property rights of others. If you believe your copyrighted content has been copied on our pages, please email us directly with details.</p>
          
          <h2>1. Requesting Removal</h2>
          <p>To submit a valid copyright notice, write to our support agent at <a href="mailto:purushottamkumaroffical@gmail.com">purushottamkumaroffical@gmail.com</a> containing:</p>
          <ul>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Direct URL or screenshot showing where it exists on this site.</li>
            <li>Your contact info including email and name.</li>
          </ul>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "DMCA Policy",
        "url": "https://devtoolshub.local/dmca.html"
      }
    },
    {
      filename: 'sitemap.html',
      metaTitle: 'HTML Sitemap - DevTools Hub',
      metaDesc: 'Comprehensive navigation directory listing every essential page and developer tool available on DevTools Hub.',
      canonical: 'https://devtoolshub.local/sitemap.html',
      breadcrumbs: [{ name: 'Sitemap', url: '/sitemap.html' }],
      content: `
        <div class="static-page-container">
          <h1>HTML Sitemap</h1>
          <p>Find links below to access all 22 web pages and tools hosted on DevTools Hub.</p>
          
          <h2 style="margin-top: 2rem;">Essential Core Pages</h2>
          <ul>
            <li><a href="/">Home (Tools Hub)</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/contact.html">Contact Us</a></li>
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="/terms.html">Terms & Conditions</a></li>
            <li><a href="/disclaimer.html">Disclaimer</a></li>
            <li><a href="/cookie-policy.html">Cookie Policy</a></li>
            <li><a href="/dmca.html">DMCA / Copyright Policy</a></li>
          </ul>

          <h2 style="margin-top: 2rem;">Interactive Developer Tools</h2>
          <ul>
            <li><a href="/tools/json-validator.html">JSON Validator</a></li>
            <li><a href="/tools/jwt-decoder.html">JWT Decoder</a></li>
            <li><a href="/tools/regex-tester.html">Regex Tester</a></li>
            <li><a href="/tools/url-encoder.html">URL Encoder</a></li>
            <li><a href="/tools/url-decoder.html">URL Decoder</a></li>
            <li><a href="/tools/cron-generator.html">Cron Expression Generator</a></li>
            <li><a href="/tools/uuid-generator.html">UUID Generator</a></li>
            <li><a href="/tools/sha256-generator.html">SHA-256 Hash Generator</a></li>
            <li><a href="/tools/md5-generator.html">MD5 Checksum Generator</a></li>
            <li><a href="/tools/hash-generator.html">Multi Hash Generator</a></li>
            <li><a href="/tools/diff-checker.html">Diff Checker</a></li>
            <li><a href="/tools/api-tester.html">API Tester</a></li>
          </ul>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "HTML Sitemap",
        "url": "https://devtoolshub.local/sitemap.html"
      }
    },
    {
      filename: '404.html',
      metaTitle: 'Page Not Found - DevTools Hub',
      metaDesc: 'The page you are looking for does not exist. Navigate back to our home hub to access the list of developer utilities.',
      canonical: 'https://devtoolshub.local/404.html',
      breadcrumbs: [{ name: '404 Page', url: '/404.html' }],
      content: `
        <div class="error-404-container">
          <h1>404</h1>
          <p>Oops! The page you are looking for has taken a break or doesn't exist.</p>
          <a href="/" class="btn btn-primary">Return to Homepage</a>
        </div>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "404 Page Not Found",
        "url": "https://devtoolshub.local/404.html"
      }
    }
  ],

  // 12 Tools Pages
  tools: [
    {
      filename: 'tools/json-validator.html',
      name: 'JSON Validator',
      metaTitle: 'JSON Validator & Prettifier - Format, Validate JSON Online',
      metaDesc: 'Validate, format, lint and minify JSON documents with detailed inline syntax errors highlight. Completely client-side and secure.',
      canonical: 'https://devtoolshub.local/tools/json-validator.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'JSON Validator', url: '/tools/json-validator.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="jsonInput">Input raw JSON data string:</label>
          <textarea id="jsonInput" class="code-textarea" placeholder="{\\"key\\": \\"value\\"}" spellcheck="false"></textarea>
        </div>
        
        <div class="workspace-actions" style="margin-bottom: 1rem; align-items: center; justify-content: space-between;">
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-primary" id="validateBtn">Validate</button>
            <button class="btn btn-success" id="formatBtn">Format / Prettify</button>
            <button class="btn btn-secondary" id="minifyBtn">Minify</button>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <select id="indentSelect" class="form-control" style="width: auto; padding: 0.4rem 0.5rem;">
              <option value="2">2 Spaces</option>
              <option value="4">4 Spaces</option>
              <option value="tab">Tab Indent</option>
            </select>
            <button class="btn btn-secondary" id="loadSampleBtn">Load Sample</button>
            <button class="btn btn-danger" id="clearBtn">Clear</button>
          </div>
        </div>

        <div class="error-message" id="errorMessage"></div>
        <div class="success-message" id="successMessage"></div>

        <div class="output-container">
          <div class="output-header">
            <span>Result / Output Preview</span>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary" id="copyBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
              <button class="btn btn-secondary" id="downloadBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Download</button>
            </div>
          </div>
          <div class="output-body" id="outputBody"></div>
        </div>
      `,
      script: 'json-validator.js',
      description: 'Format, parse, lint, and validate raw JSON text arrays in real-time. Detects line-by-line syntax errors for easy debugging.',
      detailedDescription: 'The online JSON Validator checks if a string is written in standard RFC 8259 compliance. Copy and paste your data to locate missing quotation marks, commas, curly braces, or brackets instantly. The entire calculation occurs client-side in the browser.',
      howToUse: `
        <ol>
          <li>Copy your raw JSON code.</li>
          <li>Paste it directly into the big text box.</li>
          <li>Click <strong>Format / Prettify</strong> to clean up layout spacing, or click <strong>Validate</strong> to check correct formatting.</li>
          <li>Click <strong>Copy</strong> or <strong>Download</strong> to save the final compiled result.</li>
        </ol>
      `,
      example: `
        <p><strong>Raw Input:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 0.5rem; border-radius: var(--radius-sm); font-size: 0.8rem; overflow-x: auto;">{"user":"John Doe","roles":["admin","user"]}</pre>
        <p style="margin-top: 0.5rem;"><strong>Prettified Output:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 0.5rem; border-radius: var(--radius-sm); font-size: 0.8rem; overflow-x: auto;">{
  "user": "John Doe",
  "roles": [
    "admin",
    "user"
  ]
}</pre>
      `,
      benefits: `
        <ul>
          <li><strong>Granular Error Messages:</strong> Spot missing brackets or commas with clear line locations.</li>
          <li><strong>No Server Logs:</strong> Your confidential configuration files never leaves your workstation.</li>
          <li><strong>Indentation Choices:</strong> Configure indents to match team settings.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">What causes JSON parsing errors?</div>
          <div class="faq-answer">Common issues include missing double-quotes on keys, trailing commas after elements, and missing closing brackets.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Are there size limits on validation?</div>
          <div class="faq-answer">No, since it runs client-side, the limit is bound only by your browser’s system memory capabilities.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Why is standard validation secure here?</div>
          <div class="faq-answer">The tool uses JavaScript's JSON.parse() API. No network calls are made.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/jwt-decoder.html">JWT Decoder</a></li>
        <li><a href="/tools/diff-checker.html">Diff Checker</a></li>
        <li><a href="/tools/api-tester.html">API Tester</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "JSON Validator & Prettifier",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "description": "Lint, pretty-print, and validate JSON data instantly in-browser."
      }
    },
    {
      filename: 'tools/jwt-decoder.html',
      name: 'JWT Decoder',
      metaTitle: 'JWT Decoder Online - Inspect and Read JSON Web Tokens',
      metaDesc: 'Decode JSON Web Tokens (JWT) payload structures online. Extract cryptographic header metadata and expiration times.',
      canonical: 'https://devtoolshub.local/tools/jwt-decoder.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'JWT Decoder', url: '/tools/jwt-decoder.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="jwtInput">Input Encoded JWT string token:</label>
          <textarea id="jwtInput" class="code-textarea" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." spellcheck="false"></textarea>
        </div>
        
        <div class="workspace-actions" style="margin-bottom: 1rem;">
          <button class="btn btn-primary" id="decodeBtn">Decode JWT</button>
          <button class="btn btn-secondary" id="loadSampleBtn">Load Sample Token</button>
          <button class="btn btn-danger" id="clearBtn">Clear</button>
        </div>

        <div class="error-message" id="errorMessage"></div>

        <div class="diff-container">
          <div class="diff-box">
            <h4 style="margin-bottom: 0.5rem;">Token Header (Decoded)</h4>
            <div class="output-container" style="margin-top: 0;">
              <div class="output-header">
                <span>Header JSON</span>
                <button class="btn btn-secondary" id="copyHeaderBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
              </div>
              <div class="output-body" id="headerOutput" style="min-height: 100px;"></div>
            </div>
          </div>
          <div class="diff-box">
            <h4 style="margin-bottom: 0.5rem;">Token Payload (Decoded)</h4>
            <div class="output-container" style="margin-top: 0;">
              <div class="output-header">
                <span>Payload JSON</span>
                <button class="btn btn-secondary" id="copyPayloadBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
              </div>
              <div class="output-body" id="payloadOutput" style="min-height: 100px;"></div>
            </div>
          </div>
        </div>

        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">Time & Claims Metadata</h4>
        <div id="metadataOutput" style="background-color: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border); font-size: 0.9rem;">
          <p style="color: var(--text-muted);">Please decode a JWT token to extract claims.</p>
        </div>
      `,
      script: 'jwt-decoder.js',
      description: 'Decode and extract claims from standard JWT tokens locally. Checks alg info, scopes, and expiration details.',
      detailedDescription: 'The JWT Decoder splits standard base64url encoded tokens into their three components: header, payload data, and signature. Claims like exp (expiration), iat (issued time), and sub are parsed into readable timestamps for convenient inspection.',
      howToUse: `
        <ol>
          <li>Copy your JWT token.</li>
          <li>Paste the code into the text input.</li>
          <li>The tool will parse and render claims instantly in the header and payload blocks.</li>
          <li>Analyze key metrics such as remaining expiration time in the claims summary.</li>
        </ol>
      `,
      example: `
        <p><strong>Example Token Payload Claims:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 0.5rem; border-radius: var(--radius-sm); font-size: 0.8rem; overflow-x: auto;">{
  "sub": "user_id_12345",
  "name": "Jane Developer",
  "exp": 1801112022
}</pre>
      `,
      benefits: `
        <ul>
          <li><strong>Privacy Ensured:</strong> We never log, view, or record token keys or data.</li>
          <li><strong>Locale Timestamps:</strong> Unix timestamps are automatically converted to your locale format.</li>
          <li><strong>Clear Layout:</strong> Easily separate headers from claim body configurations.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">Does this tool verify the cryptographic signature?</div>
          <div class="faq-answer">This decoder does not verify signature authenticity because signature checks require your private secret keys.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">What does "sub" and "exp" stand for?</div>
          <div class="faq-answer">"sub" stands for Subject (user ID), and "exp" stands for Expiration Time (Unix timestamp).</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/json-validator.html">JSON Validator</a></li>
        <li><a href="/tools/api-tester.html">API Tester</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "JWT Decoder Online",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Decode base64url encoded JSON Web Tokens (JWT) payload structures online."
      }
    },
    {
      filename: 'tools/regex-tester.html',
      name: 'Regex Tester',
      metaTitle: 'Regex Tester & Matcher - Test Regular Expressions Online',
      metaDesc: 'Test regular expressions in real-time. Matches are highlighted dynamically with detailed capture groups tables.',
      canonical: 'https://devtoolshub.local/tools/regex-tester.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'Regex Tester', url: '/tools/regex-tester.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="regexPattern">Regular Expression Pattern:</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span style="font-family: var(--font-mono); font-weight: 600; color: var(--text-muted);">/</span>
            <input type="text" id="regexPattern" class="form-control" style="font-family: var(--font-mono); flex: 1;" placeholder="[a-zA-Z]+">
            <span style="font-family: var(--font-mono); font-weight: 600; color: var(--text-muted);">/</span>
            <div style="display: flex; gap: 0.35rem; align-items: center; background-color: var(--bg-tertiary); padding: 0.5rem; border-radius: var(--radius-md); border: 1px solid var(--border);">
              <label style="margin: 0; font-size: 0.8rem; display: flex; align-items: center; gap: 0.2rem;"><input type="checkbox" id="flagG" checked>g</label>
              <label style="margin: 0; font-size: 0.8rem; display: flex; align-items: center; gap: 0.2rem;"><input type="checkbox" id="flagI">i</label>
              <label style="margin: 0; font-size: 0.8rem; display: flex; align-items: center; gap: 0.2rem;"><input type="checkbox" id="flagM">m</label>
              <label style="margin: 0; font-size: 0.8rem; display: flex; align-items: center; gap: 0.2rem;"><input type="checkbox" id="flagS">s</label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="testText">Test Target Text String:</label>
          <textarea id="testText" class="code-textarea" placeholder="Paste target text to test matches against..."></textarea>
        </div>

        <div class="workspace-actions" style="margin-bottom: 1rem;">
          <button class="btn btn-secondary" id="loadSampleBtn">Load Email Match Sample</button>
          <button class="btn btn-danger" id="clearBtn">Clear</button>
        </div>

        <div class="error-message" id="errorMessage"></div>

        <h4 style="margin-bottom: 0.5rem;">Match Highlights</h4>
        <div id="highlightedText" style="background-color: var(--bg-primary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border); white-space: pre-wrap; font-family: var(--font-mono); font-size: 0.9rem; min-height: 100px; max-height: 200px; overflow-y: auto; margin-bottom: 1.5rem;"></div>

        <h4 style="margin-bottom: 0.5rem;">Capture Groups / Index Details</h4>
        <div id="matchDetails" style="background-color: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border); overflow-x: auto; min-height: 80px;"></div>
      `,
      script: 'regex-tester.js',
      description: 'Run regular expressions against raw text datasets instantly. Visualizes indices and subgroups details.',
      detailedDescription: 'The online Regex Tester compiles expressions in real-time. Toggle flags such as Case-Insensitive (i), Global (g), and Multiline (m). Matches are dynamically highlighted as you write, accompanied by a table showing exact index offsets.',
      howToUse: `
        <ol>
          <li>Type your pattern in the <strong>Regular Expression Pattern</strong> bar.</li>
          <li>Choose your flags (Global, Case-Insensitive, etc.).</li>
          <li>Paste the content to test in the <strong>Test Target Text String</strong> box.</li>
          <li>Review the visual highlights and view captured groups table.</li>
        </ol>
      `,
      example: `
        <p><strong>Pattern:</strong> <code>\\b[0-9]{3}-[0-9]{2}-[0-9]{4}\\b</code></p>
        <p><strong>Text Match:</strong> "Customer SSN is 123-45-6789."</p>
      `,
      benefits: `
        <ul>
          <li><strong>Instant Interactivity:</strong> Expressions evaluate automatically on keystrokes.</li>
          <li><strong>Group Inspection:</strong> Highlights groups inside match details.</li>
          <li><strong>No Server Logs:</strong> Your queries are processed in-browser.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">What does the global (g) flag do?</div>
          <div class="faq-answer">The "g" flag indicates the regex should search for all possible matches instead of stopping after the first occurrence.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Which regex syntax engine is used?</div>
          <div class="faq-answer">It uses the native JavaScript RegExp engine of your browser.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/diff-checker.html">Diff Checker</a></li>
        <li><a href="/tools/url-encoder.html">URL Encoder</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Regex Tester & Matcher",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Verify and test regular expressions in real-time online."
      }
    },
    {
      filename: 'tools/url-encoder.html',
      name: 'URL Encoder',
      metaTitle: 'URL Encoder Online - Convert Strings to Percent-Encoding',
      metaDesc: 'Convert unsafe special characters in strings into URL-safe percent-encoded characters securely.',
      canonical: 'https://devtoolshub.local/tools/url-encoder.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'URL Encoder', url: '/tools/url-encoder.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="urlInput">Input String to URL Encode:</label>
          <textarea id="urlInput" class="code-textarea" placeholder="https://example.com/search?q=hello world & details"></textarea>
        </div>
        
        <div class="workspace-actions" style="margin-bottom: 1rem; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-primary" id="encodeBtn">Encode URL</button>
            <button class="btn btn-danger" id="clearBtn">Clear</button>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <select id="modeSelect" class="form-control" style="width: auto;">
              <option value="component">Encode URI Component (Strict)</option>
              <option value="full">Encode Full URI (Keep protocols)</option>
            </select>
          </div>
        </div>

        <div class="error-message" id="errorMessage"></div>

        <div class="output-container">
          <div class="output-header">
            <span>Encoded Output</span>
            <button class="btn btn-secondary" id="copyBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
          </div>
          <div class="output-body" id="outputBody"></div>
        </div>
      `,
      script: 'url-encoder-decoder.js',
      description: 'Encode query parameter components securely into percent-encoding representations client-side.',
      detailedDescription: 'The online URL Encoder converts unsafe ASCII characters into a % followed by a two-digit hexadecimal representation. This ensures correct parameters formatting when building API request queries.',
      howToUse: `
        <ol>
          <li>Type or paste the query string into the input box.</li>
          <li>Select the coding mode (Strict vs Keep Protocols).</li>
          <li>Click <strong>Encode URL</strong> to generate the formatted code string.</li>
          <li>Click <strong>Copy</strong> to use the URL payload.</li>
        </ol>
      `,
      example: `
        <p><strong>Input:</strong> <code>hello world & co.</code></p>
        <p><strong>Encoded Component:</strong> <code>hello%20world%20%26%20co.</code></p>
      `,
      benefits: `
        <ul>
          <li><strong>Encoding Control:</strong> Toggle component encoding to choose whether parameter symbols should be converted.</li>
          <li><strong>No Server Logs:</strong> Everything runs locally inside browser contexts.</li>
          <li><strong>Fast Handling:</strong> Results generate instantly.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">What is the difference between Full encoding and Component encoding?</div>
          <div class="faq-answer">Full encoding preserves protocols (like http://) and directory symbols, while Component encoding strictly converts all characters including slashes, hashes and query indicators.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/url-decoder.html">URL Decoder</a></li>
        <li><a href="/tools/regex-tester.html">Regex Tester</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "URL Encoder Online",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Convert unsafe special characters in strings into URL-safe percent-encoded characters."
      }
    },
    {
      filename: 'tools/url-decoder.html',
      name: 'URL Decoder',
      metaTitle: 'URL Decoder Online - Decode Percent-Encoded Strings',
      metaDesc: 'Decode percent-encoded strings back into readable string sequences. Safe browser-based conversion.',
      canonical: 'https://devtoolshub.local/tools/url-decoder.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'URL Decoder', url: '/tools/url-decoder.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="urlInput">Input Percent-Encoded String to Decode:</label>
          <textarea id="urlInput" class="code-textarea" placeholder="https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world"></textarea>
        </div>
        
        <div class="workspace-actions" style="margin-bottom: 1rem; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-primary" id="decodeBtn">Decode URL</button>
            <button class="btn btn-danger" id="clearBtn">Clear</button>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <select id="modeSelect" class="form-control" style="width: auto;">
              <option value="component">Decode URI Component</option>
              <option value="full">Decode Full URI</option>
            </select>
          </div>
        </div>

        <div class="error-message" id="errorMessage"></div>

        <div class="output-container">
          <div class="output-header">
            <span>Decoded Output</span>
            <button class="btn btn-secondary" id="copyBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
          </div>
          <div class="output-body" id="outputBody"></div>
        </div>
      `,
      script: 'url-encoder-decoder.js',
      description: 'Decode parameters back into readable plaintext configurations securely in-browser.',
      detailedDescription: 'The online URL Decoder reverts percent-encoded strings back into plaintext characters. It checks for valid hex signatures and translates them back to standard character formats.',
      howToUse: `
        <ol>
          <li>Paste the encoded URL or query parameter.</li>
          <li>Select the decodable modes.</li>
          <li>Click <strong>Decode URL</strong>.</li>
          <li>Review and copy the plain output text.</li>
        </ol>
      `,
      example: `
        <p><strong>Encoded Input:</strong> <code>hello%20world%20%26%20co.</code></p>
        <p><strong>Decoded Result:</strong> <code>hello world & co.</code></p>
      `,
      benefits: `
        <ul>
          <li><strong>Granular Validation:</strong> Alerts users if invalid character formats prevent correct conversion.</li>
          <li><strong>Completely Private:</strong> Calculations run safely client-side.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">What causes URL decoding to fail?</div>
          <div class="faq-answer">Errors occur if there are incomplete percent sequences, such as a percentage symbol not followed by two valid hexadecimal characters.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/url-encoder.html">URL Encoder</a></li>
        <li><a href="/tools/json-validator.html">JSON Validator</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "URL Decoder Online",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Decode percent-encoded strings back into readable string sequences."
      }
    },
    {
      filename: 'tools/cron-generator.html',
      name: 'Cron Expression Generator',
      metaTitle: 'Cron Expression Generator - Visual Cron Schedule Builder',
      metaDesc: 'Generate crontab schedule expressions visually. Includes real-time human explanations and previews next run dates.',
      canonical: 'https://devtoolshub.local/tools/cron-generator.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'Cron Generator', url: '/tools/cron-generator.html' }
      ],
      workspace: `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
          <div class="form-group">
            <label for="cronMinute">Minute</label>
            <select id="cronMinute" class="form-control">
              <option value="*">Every Minute (*)</option>
              <option value="*/5">Every 5 Minutes (*/5)</option>
              <option value="*/10">Every 10 Minutes (*/10)</option>
              <option value="*/15">Every 15 Minutes (*/15)</option>
              <option value="0">At Minute 0 (0)</option>
              <option value="30">At Minute 30 (30)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cronHour">Hour</label>
            <select id="cronHour" class="form-control">
              <option value="*">Every Hour (*)</option>
              <option value="*/2">Every 2 Hours (*/2)</option>
              <option value="0">Midnight (0)</option>
              <option value="12">Noon (12)</option>
              <option value="9-17">Working Hours (9-17)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cronDayOfMonth">Day of Month</label>
            <select id="cronDayOfMonth" class="form-control">
              <option value="*">Every Day (*)</option>
              <option value="1">1st of Month (1)</option>
              <option value="15">15th of Month (15)</option>
              <option value="*/2">Every 2 Days (*/2)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cronMonth">Month</label>
            <select id="cronMonth" class="form-control">
              <option value="*">Every Month (*)</option>
              <option value="1">January (1)</option>
              <option value="6">June (6)</option>
              <option value="12">December (12)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cronDayOfWeek">Day of Week</label>
            <select id="cronDayOfWeek" class="form-control">
              <option value="*">Every Weekday (*)</option>
              <option value="1-5">Mon - Fri (1-5)</option>
              <option value="0,6">Weekend (0,6)</option>
              <option value="1">Monday (1)</option>
            </select>
          </div>
        </div>

        <div class="error-message" id="errorMessage"></div>

        <div class="form-group">
          <label for="cronExpression">Generated Cron Expression:</label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="cronExpression" class="form-control" style="font-family: var(--font-mono); font-size: 1.2rem; text-align: center; font-weight: 600;" value="* * * * *">
            <button class="btn btn-secondary" id="copyBtn">Copy</button>
          </div>
        </div>

        <div style="background-color: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 1.5rem;">
          <h4 style="margin-bottom: 0.25rem;">Schedule Explanation</h4>
          <p id="cronDescription" style="font-size: 1rem; font-weight: 500; color: var(--accent);"></p>
        </div>

        <h4 style="margin-bottom: 0.5rem;">Next 5 Execution Dates (Local Time)</h4>
        <ul id="nextRunsList" style="list-style: none; padding-left: 0; font-size: 0.9rem; display: flex; flex-direction: column; gap: 0.5rem;"></ul>
      `,
      script: 'cron-generator.js',
      description: 'Generate standard crontab configurations visually. Check timing sequences and execution cycles.',
      detailedDescription: 'The visual Cron Generator compiles schedules using standard syntax forms. It translates expressions into a natural language description, showing exactly when your automation scripts or scheduled servers will trigger.',
      howToUse: `
        <ol>
          <li>Use the dropdown panels to configure intervals for Minute, Hour, Day, Month, and Weekdays.</li>
          <li>Review the generated 5-field cron string automatically.</li>
          <li>Read the English summary explaining the timeline.</li>
          <li>Verify the dates listed in the execution log panel and click <strong>Copy</strong>.</li>
        </ol>
      `,
      example: `
        <p><strong>Selection:</strong> Every 5 minutes, Mon-Fri.</p>
        <p><strong>Cron Result:</strong> <code>*/5 * * * 1-5</code></p>
      `,
      benefits: `
        <ul>
          <li><strong>Time Simulation:</strong> Previews the upcoming dates so you can spot scheduling conflicts immediately.</li>
          <li><strong>Cron Explainer:</strong> Simplifies complex syntax expressions into plain English.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">What format does this cron builder target?</div>
          <div class="faq-answer">This matches the standard Unix/Linux 5-field crontab format.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Does it support seconds or years?</div>
          <div class="faq-answer">It is configured for standard crontab, which has a minimum resolution of one minute and does not include seconds or years fields.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/uuid-generator.html">UUID Generator</a></li>
        <li><a href="/tools/json-validator.html">JSON Validator</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Cron Expression Generator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Generate standard crontab schedule expressions visually online."
      }
    },
    {
      filename: 'tools/uuid-generator.html',
      name: 'UUID Generator',
      metaTitle: 'UUID Generator Online - Generate UUID v4 and v1 Free',
      metaDesc: 'Generate random UUID v4 and time-based UUID v1 values in bulk. Choose uppercase formats or omit hyphens.',
      canonical: 'https://devtoolshub.local/tools/uuid-generator.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'UUID Generator', url: '/tools/uuid-generator.html' }
      ],
      workspace: `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
          <div class="form-group">
            <label for="uuidVersion">UUID Version</label>
            <select id="uuidVersion" class="form-control">
              <option value="v4">Version 4 (Random)</option>
              <option value="v1">Version 1 (Time-based)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="quantityInput">Quantity (Max 500)</label>
            <input type="number" id="quantityInput" class="form-control" value="5" min="1" max="500">
          </div>
          <div class="form-group" style="display: flex; flex-direction: column; justify-content: flex-end;">
            <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: 500; cursor: pointer; margin-bottom: 0.5rem;">
              <input type="checkbox" id="uppercaseToggle"> Uppercase
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: 500; cursor: pointer;">
              <input type="checkbox" id="hyphensToggle" checked> Hyphens
            </label>
          </div>
        </div>

        <div class="workspace-actions" style="margin-bottom: 1rem;">
          <button class="btn btn-primary" id="generateBtn">Generate UUIDs</button>
          <button class="btn btn-danger" id="clearBtn">Clear</button>
        </div>

        <div class="output-container">
          <div class="output-header">
            <span>Generated IDs</span>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary" id="copyBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy All</button>
              <button class="btn btn-secondary" id="downloadBtn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Download TXT</button>
            </div>
          </div>
          <div class="output-body" id="outputBody" style="min-height: 150px; font-size: 0.9rem;"></div>
        </div>
      `,
      script: 'uuid-generator.js',
      description: 'Create unique identifier keys in RFC4122 layouts. Supports batch creation and toggle configuration.',
      detailedDescription: 'The online UUID Generator creates universally unique identifiers. Version 4 utilizes high-entropy cryptographically secure random number generation. Version 1 leverages timestamp signatures. Use this for database primary keys and mock ids.',
      howToUse: `
        <ol>
          <li>Select the version model (V4 vs V1).</li>
          <li>Choose how many identifier strings to build at once (up to 500).</li>
          <li>Toggle formatting settings (Hyphens vs Uppercase letters).</li>
          <li>Click <strong>Generate UUIDs</strong> and copy the list of results.</li>
        </ol>
      `,
      example: `
        <p><strong>UUID V4 Output:</strong> <code>f81d4fae-7dec-11d0-a765-00a0c91e6bf6</code></p>
      `,
      benefits: `
        <ul>
          <li><strong>Bulk Mode:</strong> Generate hundreds of values in a single click for testing setup templates.</li>
          <li><strong>Cryptographic Security:</strong> Employs browsers native <code>crypto.getRandomValues</code> API.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">What is a UUID V4?</div>
          <div class="faq-answer">Version 4 UUIDs are completely random IDs which have a near-zero probability of collision across database engines.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Are these IDs unique?</div>
          <div class="faq-answer">Yes, they are mathematically unique. Generating two matching random UUID v4s is practically impossible.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/cron-generator.html">Cron Generator</a></li>
        <li><a href="/tools/hash-generator.html">Hash Generator</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "UUID Generator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Generate random UUID v4 and time-based UUID v1 values in bulk online."
      }
    },
    {
      filename: 'tools/sha256-generator.html',
      name: 'SHA256 Generator',
      metaTitle: 'SHA256 Hash Generator Online - Secure Cryptographic Hash',
      metaDesc: 'Compute the cryptographic SHA-256 signature of any text string. Fully browser-based security check tool.',
      canonical: 'https://devtoolshub.local/tools/sha256-generator.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'SHA256 Generator', url: '/tools/sha256-generator.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="hashInput">Input String to SHA256 Hash:</label>
          <textarea id="hashInput" class="code-textarea" placeholder="Enter string text..."></textarea>
        </div>
        
        <input type="hidden" id="singleAlgo" value="sha256">

        <div class="workspace-actions" style="margin-bottom: 1rem;">
          <button class="btn btn-primary" id="calculateBtn">Compute Hash</button>
          <button class="btn btn-secondary" id="loadSampleBtn">Load Sample Text</button>
          <button class="btn btn-danger" id="clearBtn">Clear</button>
        </div>

        <div class="output-container">
          <div class="output-header">
            <span>SHA-256 Hex Hash Result</span>
            <button class="btn btn-secondary" data-copy-id="outputBody" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
          </div>
          <div class="output-body" id="outputBody" style="font-size: 1.05rem; word-break: break-all; min-height: 40px; padding: 1.25rem 1rem;"></div>
        </div>
      `,
      script: 'hash-generators.js',
      description: 'Convert plaintext code strings to secure 256-bit cryptographic digest keys.',
      detailedDescription: 'The online SHA-256 Generator uses SHA-2 (Secure Hash Algorithm 2) signatures. It converts custom strings of any size into a fixed 64-character hexadecimal digest. Perfect for validation checks and security audits.',
      howToUse: `
        <ol>
          <li>Type or paste your text inside the input box.</li>
          <li>The hash calculation triggers automatically in real-time as you write.</li>
          <li>Review the 64-character hash signature.</li>
          <li>Click <strong>Copy</strong> to use.</li>
        </ol>
      `,
      example: `
        <p><strong>Input:</strong> <code>admin</code></p>
        <p><strong>SHA256 Hash:</strong> <code>8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918</code></p>
      `,
      benefits: `
        <ul>
          <li><strong>Direct Hashing:</strong> Performs computations using your browser's SubtleCrypto API.</li>
          <li><strong>No External Transmission:</strong> Your passwords or secret text files never leave your device.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">Can I reverse a SHA-256 hash?</div>
          <div class="faq-answer">No, SHA-256 is a one-way hashing function. It is mathematically designed to be impossible to reverse or retrieve the original input text.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Are there collisions in SHA-256?</div>
          <div class="faq-answer">No collisions have ever been found for SHA-256. It is highly secure.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/md5-generator.html">MD5 Generator</a></li>
        <li><a href="/tools/hash-generator.html">Hash Generator (Multi)</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "SHA256 Hash Generator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Compute the cryptographic SHA-256 signature of any text string online."
      }
    },
    {
      filename: 'tools/md5-generator.html',
      name: 'MD5 Generator',
      metaTitle: 'MD5 Hash Generator Online - Compute 128-bit Checksums',
      metaDesc: 'Compute the 128-bit MD5 checksum signature of any input string. Simple, secure, and fast browser tool.',
      canonical: 'https://devtoolshub.local/tools/md5-generator.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'MD5 Generator', url: '/tools/md5-generator.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="hashInput">Input String to MD5 Hash:</label>
          <textarea id="hashInput" class="code-textarea" placeholder="Enter string text..."></textarea>
        </div>
        
        <input type="hidden" id="singleAlgo" value="md5">

        <div class="workspace-actions" style="margin-bottom: 1rem;">
          <button class="btn btn-primary" id="calculateBtn">Compute MD5</button>
          <button class="btn btn-secondary" id="loadSampleBtn">Load Sample Text</button>
          <button class="btn btn-danger" id="clearBtn">Clear</button>
        </div>

        <div class="output-container">
          <div class="output-header">
            <span>MD5 Hex Hash Result</span>
            <button class="btn btn-secondary" data-copy-id="outputBody" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Copy</button>
          </div>
          <div class="output-body" id="outputBody" style="font-size: 1.05rem; word-break: break-all; min-height: 40px; padding: 1.25rem 1rem;"></div>
        </div>
      `,
      script: 'hash-generators.js',
      description: 'Compute 128-bit checksums for string validation and data comparisons in real-time.',
      detailedDescription: 'The online MD5 Generator calculates the Message-Digest Algorithm 5 checksum. It produces a 32-character hex signature which is widely used for matching file integrity parameters and basic check validations.',
      howToUse: `
        <ol>
          <li>Type your input string in the box.</li>
          <li>The MD5 hex signature updates dynamically.</li>
          <li>Review the 32-character hash block.</li>
          <li>Copy the result to verify files.</li>
        </ol>
      `,
      example: `
        <p><strong>Input:</strong> <code>hello</code></p>
        <p><strong>MD5 Output:</strong> <code>5d41402abc4b2a76b9719d911017c592</code></p>
      `,
      benefits: `
        <ul>
          <li><strong>Offline Usable:</strong> Operates entirely inside the client context, enabling usage without internet connections once page is loaded.</li>
          <li><strong>Instant Processing:</strong> Optimized algorithm calculates signatures in milliseconds.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">Is MD5 secure for password hashing?</div>
          <div class="faq-answer">No. MD5 has known cryptographic vulnerabilities and can be bypassed or decrypted via collision attacks. Use SHA-256 or bcrypt for password hashing.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/sha256-generator.html">SHA256 Generator</a></li>
        <li><a href="/tools/hash-generator.html">Hash Generator (Multi)</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "MD5 Hash Generator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Compute the 128-bit MD5 checksum signature of any input string online."
      }
    },
    {
      filename: 'tools/hash-generator.html',
      name: 'Hash Generator',
      metaTitle: 'Hash Generator Online - Compare SHA256, MD5, SHA1, SHA512',
      metaDesc: 'Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic hashes simultaneously. Real-time comparison.',
      canonical: 'https://devtoolshub.local/tools/hash-generator.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'Hash Generator', url: '/tools/hash-generator.html' }
      ],
      workspace: `
        <div class="form-group">
          <label for="hashInput">Input String to Hash:</label>
          <textarea id="hashInput" class="code-textarea" placeholder="Type text to generate all hashes..."></textarea>
        </div>

        <div class="workspace-actions" style="margin-bottom: 1.5rem;">
          <button class="btn btn-primary" id="calculateBtn">Generate All Hashes</button>
          <button class="btn btn-secondary" id="loadSampleBtn">Load Sample Text</button>
          <button class="btn btn-danger" id="clearBtn">Clear</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <!-- Row MD5 -->
          <div class="form-group" style="margin-bottom: 0;">
            <label style="display: flex; justify-content: space-between; align-items: center;">
              <span>MD5 (128-bit)</span>
              <button class="btn btn-secondary" data-copy-id="outMD5" style="padding: 0.15rem 0.4rem; font-size: 0.7rem;">Copy</button>
            </label>
            <div id="outMD5" style="background-color: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all; min-height: 28px;"></div>
          </div>

          <!-- Row SHA1 -->
          <div class="form-group" style="margin-bottom: 0;">
            <label style="display: flex; justify-content: space-between; align-items: center;">
              <span>SHA-1 (160-bit)</span>
              <button class="btn btn-secondary" data-copy-id="outSHA1" style="padding: 0.15rem 0.4rem; font-size: 0.7rem;">Copy</button>
            </label>
            <div id="outSHA1" style="background-color: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all; min-height: 28px;"></div>
          </div>

          <!-- Row SHA224 -->
          <div class="form-group" style="margin-bottom: 0;">
            <label style="display: flex; justify-content: space-between; align-items: center;">
              <span>SHA-224 (224-bit)</span>
              <button class="btn btn-secondary" data-copy-id="outSHA224" style="padding: 0.15rem 0.4rem; font-size: 0.7rem;">Copy</button>
            </label>
            <div id="outSHA224" style="background-color: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all; min-height: 28px;"></div>
          </div>

          <!-- Row SHA256 -->
          <div class="form-group" style="margin-bottom: 0;">
            <label style="display: flex; justify-content: space-between; align-items: center;">
              <span>SHA-256 (256-bit)</span>
              <button class="btn btn-secondary" data-copy-id="outSHA256" style="padding: 0.15rem 0.4rem; font-size: 0.7rem;">Copy</button>
            </label>
            <div id="outSHA256" style="background-color: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all; min-height: 28px;"></div>
          </div>

          <!-- Row SHA384 -->
          <div class="form-group" style="margin-bottom: 0;">
            <label style="display: flex; justify-content: space-between; align-items: center;">
              <span>SHA-384 (384-bit)</span>
              <button class="btn btn-secondary" data-copy-id="outSHA384" style="padding: 0.15rem 0.4rem; font-size: 0.7rem;">Copy</button>
            </label>
            <div id="outSHA384" style="background-color: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all; min-height: 28px;"></div>
          </div>

          <!-- Row SHA512 -->
          <div class="form-group" style="margin-bottom: 0;">
            <label style="display: flex; justify-content: space-between; align-items: center;">
              <span>SHA-512 (512-bit)</span>
              <button class="btn btn-secondary" data-copy-id="outSHA512" style="padding: 0.15rem 0.4rem; font-size: 0.7rem;">Copy</button>
            </label>
            <div id="outSHA512" style="background-color: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all; min-height: 28px;"></div>
          </div>
        </div>
      `,
      script: 'hash-generators.js',
      description: 'Compute all major hashing algorithm checksums (MD5, SHA1, SHA256, SHA512) at the same time.',
      detailedDescription: 'The online multi-hash generator takes strings and computes MD5, SHA-1, SHA-224, SHA-256, SHA-384, and SHA-512 hashes simultaneously. This allows developers to instantly compare lengths, signatures and hash values side-by-side.',
      howToUse: `
        <ol>
          <li>Type the input value.</li>
          <li>View the computed hash strings generated for each encryption standard.</li>
          <li>Use individual <strong>Copy</strong> buttons next to the respective algorithm.</li>
        </ol>
      `,
      example: `
        <p><strong>MD5 length:</strong> 32 chars.</p>
        <p><strong>SHA-256 length:</strong> 64 chars.</p>
        <p><strong>SHA-512 length:</strong> 128 chars.</p>
      `,
      benefits: `
        <ul>
          <li><strong>Universal Generation:</strong> Run 6 discrete hashing standards concurrently.</li>
          <li><strong>Comparative View:</strong> Inspect differing hash lengths and hex representations.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">What is a cryptographic hash function?</div>
          <div class="faq-answer">A hash function takes an arbitrary block of data and returns a fixed-size bit string. It is a one-way operation.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/sha256-generator.html">SHA256 Generator</a></li>
        <li><a href="/tools/md5-generator.html">MD5 Generator</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Multi Hash Generator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic hashes simultaneously."
      }
    },
    {
      filename: 'tools/diff-checker.html',
      name: 'Diff Checker',
      metaTitle: 'Diff Checker Online - Compare Text and Code Differences',
      metaDesc: 'Compare two text snippets or source code files line-by-line to identify changes, additions, and deletions.',
      canonical: 'https://devtoolshub.local/tools/diff-checker.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'Diff Checker', url: '/tools/diff-checker.html' }
      ],
      workspace: `
        <div class="diff-container">
          <div class="diff-box">
            <label for="originalText" style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.35rem; color: var(--text-secondary);">Original Text (Left Pane)</label>
            <textarea id="originalText" class="code-textarea" placeholder="Paste original text here..." style="min-height: 180px;"></textarea>
          </div>
          <div class="diff-box">
            <label for="modifiedText" style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.35rem; color: var(--text-secondary);">Modified Text (Right Pane)</label>
            <textarea id="modifiedText" class="code-textarea" placeholder="Paste modified text here..." style="min-height: 180px;"></textarea>
          </div>
        </div>

        <div class="workspace-actions" style="margin-bottom: 1.5rem;">
          <button class="btn btn-primary" id="compareBtn">Compare Diffs</button>
          <button class="btn btn-secondary" id="loadSampleBtn">Load Sample Code</button>
          <button class="btn btn-danger" id="clearBtn">Clear</button>
        </div>

        <div class="error-message" id="errorMessage"></div>

        <div class="diff-result-wrapper">
          <div class="diff-output" id="diffOutput" style="display: none;">
            <div class="diff-pane" id="diffLeft" style="border-right: 1px solid var(--border); padding-right: 0.5rem;"></div>
            <div class="diff-pane" id="diffRight" style="padding-left: 0.5rem;"></div>
          </div>
        </div>
      `,
      script: 'diff-checker.js',
      description: 'Compare code blocks or document paragraphs. Identifies modifications using standard LCS algorithms.',
      detailedDescription: 'The online Diff Checker implements a Longest Common Subsequence (LCS) comparison to align text records. It isolates specific code adjustments, coloring additions in green and deletions in red.',
      howToUse: `
        <ol>
          <li>Paste your original source code or raw paragraph text inside the <strong>Original Text</strong> window.</li>
          <li>Paste the updated files or text into the <strong>Modified Text</strong> window.</li>
          <li>Click <strong>Compare Diffs</strong>.</li>
          <li>Review changes line-by-line in the dual comparison panel.</li>
        </ol>
      `,
      example: `
        <p><strong>Left Pane (Deletions):</strong> Highlights lines removed or modified in red.</p>
        <p><strong>Right Pane (Additions):</strong> Highlights new lines inserted in green.</p>
      `,
      benefits: `
        <ul>
          <li><strong>LCS Alignment:</strong> Accurately tracks line alignments to prevent misaligned blocks.</li>
          <li><strong>Clean Visualization:</strong> Easily spot minor refactorings.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">How does the comparison algorithm work?</div>
          <div class="faq-answer">It utilizes the Longest Common Subsequence (LCS) algorithm to find the minimum edits (additions or deletions) needed to transform text 1 into text 2.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/json-validator.html">JSON Validator</a></li>
        <li><a href="/tools/regex-tester.html">Regex Tester</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Diff Checker Online",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Compare two text snippets or source code files line-by-line online."
      }
    },
    {
      filename: 'tools/api-tester.html',
      name: 'API Tester',
      metaTitle: 'API Tester Online - Send HTTP Requests Free',
      metaDesc: 'Test API endpoints directly in your browser. Send GET, POST, PUT requests, configure headers, bodies and view formatting response.',
      canonical: 'https://devtoolshub.local/tools/api-tester.html',
      breadcrumbs: [
        { name: 'Tools', url: '/tools/json-validator.html' },
        { name: 'API Tester', url: '/tools/api-tester.html' }
      ],
      workspace: `
        <div class="api-tester-grid">
          <div class="api-request-bar">
            <select id="apiMethod" class="form-control api-method-select">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
              <option value="PATCH">PATCH</option>
              <option value="OPTIONS">OPTIONS</option>
            </select>
            <input type="text" id="apiUrl" class="form-control" placeholder="https://jsonplaceholder.typicode.com/posts/1" style="flex: 1;">
            <button class="btn btn-primary" id="sendRequestBtn" style="padding: 0.6rem 1.5rem;">Send</button>
          </div>

          <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.5rem;">
            <label style="display: flex; align-items: center; gap: 0.4rem; font-weight: 600; font-size: 0.85rem; cursor: pointer; color: var(--text-secondary);">
              <input type="checkbox" id="mockMode"> Use Mock Response
            </label>
          </div>

          <div class="api-tabs">
            <button class="api-tab-btn active" id="tabHeaders">Headers</button>
            <button class="api-tab-btn" id="tabBody">Body</button>
          </div>

          <!-- Pane: Headers -->
          <div class="api-tab-content active" id="paneHeaders">
            <div id="headersList" class="api-headers-list" style="margin-bottom: 0.75rem;">
              <!-- Dynamic Rows -->
            </div>
            <button type="button" class="btn btn-secondary" id="addHeaderBtn">+ Add Request Header</button>
          </div>

          <!-- Pane: Body -->
          <div class="api-tab-content" id="paneBody">
            <textarea id="requestBody" class="code-textarea" placeholder="{\\n  \\"key\\": \\"value\\"\\n}" disabled style="min-height: 150px;"></textarea>
          </div>

          <div class="workspace-actions" style="margin-top: 1rem;">
            <button class="btn btn-danger" id="clearBtn">Clear Fields</button>
          </div>
        </div>

        <div class="error-message" id="errorMessage" style="margin-top: 1rem;"></div>

        <!-- Response Container -->
        <div id="responseWrapper" style="display: none; margin-top: 1.5rem;">
          <h4 style="margin-bottom: 0.5rem;">Response Summary</h4>
          <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
            <span id="responseStatus" style="padding: 0.35rem 0.75rem; border-radius: var(--radius-sm); font-weight: 700; font-size: 0.85rem;">200 OK</span>
            <span id="responseTime" style="font-size: 0.85rem; color: var(--text-muted);">Time: 0 ms</span>
          </div>

          <div class="diff-container">
            <div class="diff-box">
              <h5 style="margin-bottom: 0.5rem; color: var(--text-secondary);">Response Headers</h5>
              <pre id="responseHeaders" style="background-color: var(--bg-tertiary); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; min-height: 120px; overflow-y: auto; max-height: 250px; white-space: pre-wrap; word-break: break-all;"></pre>
            </div>
            <div class="diff-box">
              <h5 style="margin-bottom: 0.5rem; color: var(--text-secondary);">Response Body</h5>
              <pre id="responseBody" style="background-color: var(--bg-tertiary); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; min-height: 120px; overflow-y: auto; max-height: 250px; white-space: pre-wrap; word-break: break-all;"></pre>
            </div>
          </div>
        </div>
      `,
      script: 'api-tester.js',
      description: 'Make HTTP requests directly in the browser with support for custom headers, payloads and simulated mock data models.',
      detailedDescription: 'The online API Tester sends HTTP requests using Javascript fetch controls. Configure headers, methods (GET, POST, etc.) and payload payloads. Results list response headers alongside pretty-printed body JSON blocks.',
      howToUse: `
        <ol>
          <li>Type the endpoint target URL in the URL input bar.</li>
          <li>Choose your HTTP Verb method (GET, POST, PUT, DELETE).</li>
          <li>Navigate to the Headers or Body tab to set request properties.</li>
          <li>Click <strong>Send</strong>. Check the response status and formatting payload output.</li>
        </ol>
      `,
      example: `
        <p><strong>Target Endpoint:</strong> <code>https://jsonplaceholder.typicode.com/posts/1</code></p>
        <p><strong>Response status:</strong> <code>200 OK</code></p>
      `,
      benefits: `
        <ul>
          <li><strong>Browser Sandbox:</strong> Test resources natively. Helps double check CORS endpoints.</li>
          <li><strong>Mock Engine:</strong> Turn on "Use Mock Response" to test API configurations without network requests.</li>
        </ul>
      `,
      faqs: `
        <div class="faq-item">
          <div class="faq-question">Why did my request fail with a CORS error?</div>
          <div class="faq-answer">Web browsers block cross-origin requests unless the target server sends Access-Control-Allow-Origin headers matching this site. Activate Mock Response to bypass CORS checks.</div>
        </div>
      `,
      relatedTools: `
        <li><a href="/tools/json-validator.html">JSON Validator</a></li>
        <li><a href="/tools/jwt-decoder.html">JWT Decoder</a></li>
      `,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "API Tester Online",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Test HTTP request payloads directly in your browser."
      }
    }
  ]
};
