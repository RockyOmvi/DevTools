const fs = require('fs');
const path = require('path');
const pagesConfig = require('./src/pages.js');

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');
const assetsSrcDir = path.join(srcDir, 'assets');
const distDir = path.join(rootDir, 'dist');
const assetsDestDir = path.join(distDir, 'assets');

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

// Generate BreadcrumbList Schema (Schema.org)
function generateBreadcrumbSchema(breadcrumbs, canonicalUrl) {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://devtoolhubs.com/"
    }
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbs.forEach((crumb, idx) => {
      const fullUrl = crumb.url.startsWith('http') ? crumb.url : `https://devtoolhubs.com${crumb.url}`;
      items.push({
        "@type": "ListItem",
        "position": idx + 2,
        "name": crumb.name,
        "item": fullUrl
      });
    });
  }

  return {
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}

// Extract FAQPage Schema from raw FAQ HTML
function extractFaqSchema(faqHtml) {
  if (!faqHtml) return null;
  const questions = [];
  const regex = /<div class="faq-question">([\s\S]*?)<\/div>\s*<div class="faq-answer">([\s\S]*?)<\/div>/gi;
  let match;
  while ((match = regex.exec(faqHtml)) !== null) {
    const questionText = match[1].replace(/<[^>]+>/g, '').trim();
    const answerText = match[2].replace(/<[^>]+>/g, '').trim();
    if (questionText && answerText) {
      questions.push({
        "@type": "Question",
        "name": questionText,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answerText
        }
      });
    }
  }

  if (questions.length === 0) return null;

  return {
    "@type": "FAQPage",
    "mainEntity": questions
  };
}

// Build unified JSON-LD schema with @graph
function buildPageSchema(primarySchema, breadcrumbSchema, faqSchema) {
  const graph = [];

  if (primarySchema) {
    // Clone without outer context if present
    const cleanPrimary = { ...primarySchema };
    delete cleanPrimary['@context'];
    graph.push(cleanPrimary);
  }

  if (breadcrumbSchema) {
    graph.push(breadcrumbSchema);
  }

  if (faqSchema) {
    graph.push(faqSchema);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

function build() {
  console.log('Starting DevToolHubs static site build...');

  // 1. Ensure output folders exist
  ensureDir(distDir);
  ensureDir(assetsDestDir);
  ensureDir(path.join(distDir, 'tools'));

  // 2. Load templates
  const layoutTemplate = fs.readFileSync(path.join(srcDir, 'templates', 'layout.html'), 'utf8');
  const toolTemplate = fs.readFileSync(path.join(srcDir, 'templates', 'tool.html'), 'utf8');

  // 3. Compile General Pages
  console.log('Compiling essential general pages...');
  pagesConfig.general.forEach(page => {
    let html = layoutTemplate;
    
    // Breadcrumbs
    const crumbsHTML = generateBreadcrumbsHTML(page.breadcrumbs);
    const breadcrumbSchema = generateBreadcrumbSchema(page.breadcrumbs, page.canonical);
    const fullSchema = buildPageSchema(page.schema, breadcrumbSchema, null);

    // Replacements
    html = html
      .replace(/{{META_TITLE}}/g, page.metaTitle)
      .replace(/{{META_DESCRIPTION}}/g, page.metaDesc)
      .replace(/{{CANONICAL_URL}}/g, page.canonical)
      .replace(/{{SCHEMA_JSON}}/g, JSON.stringify(fullSchema, null, 2))
      .replace(/{{BREADCRUMBS_HTML}}/g, crumbsHTML)
      .replace(/{{MAIN_CONTENT}}/g, page.content)
      .replace(/{{PAGE_SCRIPTS}}/g, '');

    const destPath = path.join(distDir, page.filename);
    fs.writeFileSync(destPath, html, 'utf8');
    console.log(`- Created: dist/${page.filename}`);
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
    const breadcrumbSchema = generateBreadcrumbSchema(tool.breadcrumbs, tool.canonical);
    const faqSchema = extractFaqSchema(tool.faqs);
    const fullSchema = buildPageSchema(tool.schema, breadcrumbSchema, faqSchema);
    const scriptTag = `<script src="/assets/js/tools/${tool.script}"></script>`;

    html = html
      .replace(/{{META_TITLE}}/g, tool.metaTitle)
      .replace(/{{META_DESCRIPTION}}/g, tool.metaDesc)
      .replace(/{{CANONICAL_URL}}/g, tool.canonical)
      .replace(/{{SCHEMA_JSON}}/g, JSON.stringify(fullSchema, null, 2))
      .replace(/{{BREADCRUMBS_HTML}}/g, crumbsHTML)
      .replace(/{{MAIN_CONTENT}}/g, toolHtml)
      .replace(/{{PAGE_SCRIPTS}}/g, scriptTag);

    const destPath = path.join(distDir, tool.filename);
    fs.writeFileSync(destPath, html, 'utf8');
    console.log(`- Created: dist/${tool.filename}`);
  });

  // 5. Copy assets
  console.log('Copying static assets (CSS, JS, Images)...');
  copyDir(assetsSrcDir, assetsDestDir);

  // Copy favicon.png
  const faviconPath = path.join(distDir, 'favicon.png');
  const localFavicon = path.join(rootDir, 'favicon.png');
  if (fs.existsSync(localFavicon)) {
    fs.copyFileSync(localFavicon, faviconPath);
    console.log('- Copied optimized favicon.png to dist/');
  }

  // 6. Generate robots.txt, sitemap.xml, ads.txt, _redirects & _headers
  console.log('Generating robots.txt, sitemap.xml, ads.txt, _redirects & _headers...');
  
  // ads.txt
  const adsTxt = `google.com, pub-2528737901889485, DIRECT, f08c47fec0942fa0`;
  fs.writeFileSync(path.join(distDir, 'ads.txt'), adsTxt, 'utf8');
  console.log('- Created: dist/ads.txt');

  // Cloudflare _redirects
  const redirectsTxt = `# Canonical Domain & HTTPS Enforcement
http://devtoolhubs.com/* https://devtoolhubs.com/:splat 301!
https://www.devtoolhubs.com/* https://devtoolhubs.com/:splat 301!
http://www.devtoolhubs.com/* https://devtoolhubs.com/:splat 301!
`;
  fs.writeFileSync(path.join(distDir, '_redirects'), redirectsTxt, 'utf8');
  console.log('- Created: dist/_redirects');

  // Cloudflare _headers
  const headersTxt = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), camera=(), microphone=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/favicon.png
  Cache-Control: public, max-age=86400, stale-while-revalidate=604800
`;
  fs.writeFileSync(path.join(distDir, '_headers'), headersTxt, 'utf8');
  console.log('- Created: dist/_headers');

  // robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://devtoolhubs.com/sitemap.xml
`;
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');
  console.log('- Created: dist/robots.txt');

  // sitemap.xml
  const currentDate = new Date().toISOString().split('T')[0];
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add general pages
  pagesConfig.general.forEach(page => {
    // Skip 404
    if (page.filename === '404.html') return;
    const urlPath = page.filename === 'index.html' ? '' : page.filename;
    sitemapXml += `  <url>
    <loc>https://devtoolhubs.com/${urlPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.filename === 'index.html' ? '1.0' : '0.7'}</priority>
  </url>\n`;
  });

  // Add tools
  pagesConfig.tools.forEach(tool => {
    sitemapXml += `  <url>
    <loc>https://devtoolhubs.com/${tool.filename}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  sitemapXml += `</urlset>`;
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('- Created: dist/sitemap.xml');

  console.log('Build completed successfully!');
}

build();
