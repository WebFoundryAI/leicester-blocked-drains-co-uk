# Future Fixes

## Medium Priority

- ~~**`.env` not in `.gitignore`**~~ – FIXED: `.env` added to `.gitignore` and untracked from git.
- ~~**API keys in Git history**~~ – FIXED: `GOOGLE_MAPS_API_KEY` (AIzaSyB38...) deleted via Google API Keys API. Key returns 403. Set any new key only via the Cloudflare Pages dashboard (Settings → Environment Variables). Never commit API keys to the repository.
- ~~**Sign up for Ideal Postcodes account**~~ – FIXED: Hardcoded `iddqd` test key removed from source code. The function now requires `IDEAL_POSTCODES_API_KEY` to be set in Cloudflare Pages dashboard and returns a graceful error if not configured. Sign up at https://ideal-postcodes.co.uk (~2p per lookup) and set the key in Pages dashboard.
- ~~**Netlify lead function uses deprecated Supabase**~~ – REMOVED: Deprecated `netlify/functions/`, `netlify.toml`, `vercel.json`, and `supabase/` directory have been deleted. The active backend is `functions/api/lead.ts` (Cloudflare D1).

## Low Priority

- ~~**Missing skip-to-content link**~~ – FIXED: Skip link added to `BaseLayout.astro`.
- ~~**`wrangler.toml` has empty `account_id`/`zone_id`**~~ – FIXED: Zone ID added, pages_build_output_dir configured.
- ~~**XSS in address dropdown text**~~ – FIXED: Replaced `innerHTML` string concatenation with `document.createElement` + `textContent` in both `LeadForm.astro` and `HeroLeadForm.astro`.
- ~~**Phone validation too loose**~~ – FIXED: Replaced loose digit-count check with proper UK phone number regex.
- ~~**No CSRF protection on forms**~~ – FIXED: Origin/Referer check added to functions/api/lead.ts.

## All Clear

All identified issues have been resolved. No outstanding fixes remain.
