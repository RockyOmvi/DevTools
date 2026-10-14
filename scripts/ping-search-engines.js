// Automated Search Engine Pinging & Instant IndexNow Dispatcher
const https = require('https');
const http = require('http');
const pagesConfig = require('../src/pages.js');

const HOST = 'devtoolhubs.com';
const INDEXNOW_KEY = 'e0f78bc41b2e49c7a23d81b95f2a1701';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

// Compile list of all URLs
const urls = [];

// General pages
pagesConfig.general.forEach(p => {
  if (p.filename === '404.html') return;
  const path = p.filename === 'index.html' ? '' : p.filename;
  urls.push(`https://${HOST}/${path}`);
});

// Tools
pagesConfig.tools.forEach(t => {
  urls.push(`https://${HOST}/${t.filename}`);
});

console.log(`[SEO Ping] Prepared ${urls.length} canonical URLs for instant submission.`);

// Helper to make GET requests
function pingGet(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ status: res.statusCode });
    }).on('error', (err) => {
      resolve({ error: err.message });
    });
  });
}

// Helper to post IndexNow JSON
function submitIndexNow() {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, data });
      });
    });

    req.on('error', (err) => {
      resolve({ error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function run() {
  console.log('\n--- 1. Submitting to IndexNow (Bing, Yandex, Seznam, Naver) ---');
  try {
    const res = await submitIndexNow();
    if (res.status === 200 || res.status === 202) {
      console.log(`[IndexNow] SUCCESS (HTTP ${res.status}): Submitted ${urls.length} URLs for immediate crawl.`);
    } else {
      console.log(`[IndexNow] Response HTTP ${res.status}: ${res.error || res.data || 'OK'}`);
    }
  } catch (err) {
    console.error('[IndexNow] Request failed:', err.message);
  }

  console.log('\n--- 2. Pinging Google Sitemap Endpoint ---');
  try {
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    const gRes = await pingGet(googlePingUrl);
    console.log(`[Google Ping] Dispatched ping to Google (HTTP ${gRes.status || gRes.error})`);
  } catch (err) {
    console.error('[Google Ping] Error:', err.message);
  }

  console.log('\n--- 3. Pinging Bing Sitemap Endpoint ---');
  try {
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    const bRes = await pingGet(bingPingUrl);
    console.log(`[Bing Ping] Dispatched ping to Bing (HTTP ${bRes.status || bRes.error})`);
  } catch (err) {
    console.error('[Bing Ping] Error:', err.message);
  }

  console.log('\n[Done] All search engine instant indexing notifications dispatched!');
}

run();
