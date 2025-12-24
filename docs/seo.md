# SEO/GEO QA Checklist

## Pre-Launch Verification

### 1. Sitemap Verification
- [ ] Fetch `https://swindonblockeddrains.co.uk/sitemap.xml` - confirm HTTP 200
- [ ] Verify all `<url>` entries have `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
- [ ] Confirm `/llm.html` is included in sitemap
- [ ] Check all URLs use consistent trailing slash format

### 2. Robots.txt Verification
- [ ] Fetch `https://swindonblockeddrains.co.uk/robots.txt` - confirm HTTP 200
- [ ] Verify `Sitemap:` directive points to correct absolute URL
- [ ] Confirm GPTBot, PerplexityBot, Claude-Web are allowed
- [ ] Confirm Google-Extended, CCBot are disallowed
- [ ] Verify admin routes are disallowed

### 3. Per-Page SEO Verification
For each key page, view source and confirm:
- [ ] `<title>` tag present and unique
- [ ] `<meta name="description">` present and unique
- [ ] `<link rel="canonical">` present and self-referencing
- [ ] Open Graph tags present (og:title, og:description, og:url, og:image)
- [ ] Twitter Card tags present

Key pages to check:
- Homepage `/`
- Services `/services/`
- Blocked Drains `/services/blocked-drains/`
- Locations `/locations/`
- Swindon `/locations/swindon/`
- Contact `/contact/`

### 4. Structured Data Verification
- [ ] Test homepage with Google Rich Results Test
- [ ] Verify LocalBusiness schema is valid
- [ ] Verify FAQPage schema on FAQ page
- [ ] Verify Service schemas on service pages
- [ ] Check for no errors/warnings in structured data

### 5. LLM Page Verification
- [ ] Fetch `https://swindonblockeddrains.co.uk/llm.html` - confirm HTTP 200
- [ ] Verify page is static HTML (no JS required to render content)
- [ ] Confirm JSON-LD schemas are present and valid
- [ ] Check all factual information matches main site

### 6. Google Search Console
- [ ] Submit sitemap at `https://swindonblockeddrains.co.uk/sitemap.xml`
- [ ] Use URL Inspection on homepage
- [ ] Click "Test Live URL" → "View Tested Page"
- [ ] Confirm rendered HTML contains main content
- [ ] Check for any crawl errors or warnings

### 7. Canonical Consistency
- [ ] Test URLs with and without trailing slashes load correctly
- [ ] Verify client-side normalizer redirects to canonical format
- [ ] Confirm no redirect loops exist

## Tools

- **Google Search Console**: https://search.google.com/search-console
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Validator**: https://validator.schema.org/
- **Lighthouse**: Chrome DevTools → Lighthouse tab

## Notes

- Site uses Client-Side Rendering (CSR) - Google renders JS content
- Static OG tags in index.html serve as baseline for non-JS crawlers
- react-helmet-async provides per-route metadata for JS-capable crawlers
- Trailing slash convention: all non-root URLs end with `/`
