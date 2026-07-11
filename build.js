const fs = require('fs');
const path = require('path');
const pagesConfig = require('./src/pages.js');

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');
const assetsSrcDir = path.join(srcDir, 'assets');
const assetsDestDir = path.join(rootDir, 'assets');

// Utility to ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Copy directory recursively
function copyDir(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Generate breadcrumbs HTML helper
function generateBreadcrumbsHTML(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return `<a href="/">Home</a>`;
  }

  let html = `<a href="/">Home</a>`;
  breadcrumbs.forEach((crumb, idx) => {
    html += `
      <span class="breadcrumbs-separator">
        <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align: middle;"><path d="M9 18l6-6-6-6"/></svg>
      </span>
    `;
    if (idx === breadcrumbs.length - 1) {
      html += `<span>${crumb.name}</span>`;
    } else {
      html += `<a href="${crumb.url}">${crumb.name}</a>`;
    }
  });
  return html;
}

function build() {
  console.log('Starting DevTools Hub static site build...');

  // 1. Ensure output folders exist
  ensureDir(assetsDestDir);
  ensureDir(path.join(rootDir, 'tools'));

  // 2. Load templates
  const layoutTemplate = fs.readFileSync(path.join(srcDir, 'templates', 'layout.html'), 'utf8');
  const toolTemplate = fs.readFileSync(path.join(srcDir, 'templates', 'tool.html'), 'utf8');

  // 3. Compile General Pages
  console.log('Compiling essential general pages...');
  pagesConfig.general.forEach(page => {
    let html = layoutTemplate;
    
    // Breadcrumbs
    const crumbsHTML = generateBreadcrumbsHTML(page.breadcrumbs);

    // Replacements
    html = html
      .replace(/{{META_TITLE}}/g, page.metaTitle)
      .replace(/{{META_DESCRIPTION}}/g, page.metaDesc)
      .replace(/{{CANONICAL_URL}}/g, page.canonical)
      .replace(/{{SCHEMA_JSON}}/g, JSON.stringify(page.schema, null, 2))
      .replace(/{{BREADCRUMBS_HTML}}/g, crumbsHTML)
      .replace(/{{MAIN_CONTENT}}/g, page.content)
      .replace(/{{PAGE_SCRIPTS}}/g, '');

    const destPath = path.join(rootDir, page.filename);
    fs.writeFileSync(destPath, html, 'utf8');
    console.log(`- Created: ${page.filename}`);
  });

  // 4. Compile Tool Pages
  console.log('Compiling developer tool pages...');
  pagesConfig.tools.forEach(tool => {
    let toolHtml = toolTemplate;
    
    // Compile tool template inner contents first
    toolHtml = toolHtml
      .replace(/{{TOOL_NAME}}/g, tool.name)
      .replace(/{{TOOL_DESCRIPTION}}/g, tool.description)
      .replace(/{{TOOL_WORKSPACE}}/g, tool.workspace)
      .replace(/{{TOOL_DETAILED_DESCRIPTION}}/g, tool.detailedDescription)
      .replace(/{{TOOL_HOW_TO_USE}}/g, tool.howToUse)
      .replace(/{{TOOL_EXAMPLE}}/g, tool.example)
      .replace(/{{TOOL_BENEFITS}}/g, tool.benefits)
      .replace(/{{TOOL_FAQS}}/g, tool.faqs)
      .replace(/{{RELATED_TOOLS}}/g, tool.relatedTools);

    // Merge into layout
    let html = layoutTemplate;
    const crumbsHTML = generateBreadcrumbsHTML(tool.breadcrumbs);
    const scriptTag = `<script src="/assets/js/tools/${tool.script}"></script>`;

    html = html
      .replace(/{{META_TITLE}}/g, tool.metaTitle)
      .replace(/{{META_DESCRIPTION}}/g, tool.metaDesc)
      .replace(/{{CANONICAL_URL}}/g, tool.canonical)
      .replace(/{{SCHEMA_JSON}}/g, JSON.stringify(tool.schema, null, 2))
      .replace(/{{BREADCRUMBS_HTML}}/g, crumbsHTML)
      .replace(/{{MAIN_CONTENT}}/g, toolHtml)
      .replace(/{{PAGE_SCRIPTS}}/g, scriptTag);

    const destPath = path.join(rootDir, tool.filename);
    fs.writeFileSync(destPath, html, 'utf8');
    console.log(`- Created: ${tool.filename}`);
  });

  // 5. Copy assets
  console.log('Copying static assets (CSS, JS)...');
  copyDir(assetsSrcDir, assetsDestDir);

  // Create a placeholder favicon.png to avoid broken link console errors
  // We can write a tiny 1x1 transparent png or simple icon bytes
  const faviconPath = path.join(rootDir, 'favicon.png');
  if (!fs.existsSync(faviconPath)) {
    // 1x1 Transparent PNG Base64
    const base64Png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    fs.writeFileSync(faviconPath, Buffer.from(base64Png, 'base64'));
    console.log('- Created: placeholder favicon.png');
  }

  // 6. Generate robots.txt & sitemap.xml
  console.log('Generating robots.txt & sitemap.xml...');
  
  // robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://devtoolshub.local/sitemap.xml
`;
  fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');
  console.log('- Created: robots.txt');

  // sitemap.xml
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add general pages
  pagesConfig.general.forEach(page => {
    // Skip 404
    if (page.filename === '404.html') return;
    const urlPath = page.filename === 'index.html' ? '' : page.filename;
    sitemapXml += `  <url>
    <loc>https://devtoolshub.local/${urlPath}</loc>
    <lastmod>2026-07-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.filename === 'index.html' ? '1.0' : '0.7'}</priority>
  </url>\n`;
  });

  // Add tools
  pagesConfig.tools.forEach(tool => {
    sitemapXml += `  <url>
    <loc>https://devtoolshub.local/${tool.filename}</loc>
    <lastmod>2026-07-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  sitemapXml += `</urlset>`;
  fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('- Created: sitemap.xml');

  console.log('Build completed successfully!');
}

build();
