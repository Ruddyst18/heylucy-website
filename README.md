# HeyLucy website foundation

A downloadable, editable Next.js App Router + TypeScript website. Built for continued development in Claude Code, Codex, or any editor. No paid design library, external font service, analytics, database, or AI key is required to preview it.

## Start locally

Install Node.js 22 LTS or newer, extract this folder, and open a terminal here:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. If you intentionally remove the included package-lock.json, use `npm install` instead of `npm ci`.

## What is included

- Responsive public homepage with original sage-and-cream visual design.
- Interactive, explicitly labeled sample conversations (no live AI calls).
- Accessible navigation, keyboard focus, FAQ disclosures, reduced-motion support.
- Separate `/login` page with the generated office background, without baked-in UI.
- Search metadata, canonical home URL, sitemap and robots routes.
- A noindex login page, custom 404, baseline HTTP security headers.
- Instructions for AI coding agents in `CLAUDE.md`.

## Connect your existing Lucy login

Copy `.env.example` to `.env.local`. Set `LUCY_LOGIN_URL` to your actual HTTPS sign-in URL on your app host, such as `https://app.heylucy.org/login`. The example subdomain is not assumed to exist. Restart the dev server after changing environment variables; rebuild production after changes. The page then links to your existing secure login provider. For this starter, the root `heylucy.org` host is rejected to avoid linking back into this starter; change the validation when integrating same-domain authentication.

Without configuration the login page clearly says the account service is not connected. It does not show fake password fields, store credentials, create sessions, or pretend to authenticate users. The background photo is at `public/workspace.png`.

## Continue in Claude Code

Open a Claude Code session in this extracted folder and paste:

> Read CLAUDE.md and README.md. Run the site locally and inspect the existing implementation. Help me turn this starter into the production HeyLucy.org website. First identify my actual Lucy features, authentication provider, AI backend and hosting. Reuse the existing secure services rather than replacing them. Preserve the design and workspace login background. Connect one integration at a time, validate it, and save changes in Git. Never expose secrets or customer data in frontend code. Do not deploy or change live DNS until I approve the reviewed result.

## Production build

```sh
npm run typecheck
npm run build
npm start
```

In a restricted Windows environment that blocks child-process workers, set `LUCY_LOCAL_BUILD=1` before `npm run build`. This uses thread workers and the TypeScript API checker for that local build only; normal hosting keeps the framework defaults.

## Verification for this delivery

Dependencies installed with a saved package-lock.json. TypeScript checking passed. Production compilation and static page generation passed using the local worker setting described above. Local HTTP checks returned 200 for the homepage, login, office image, sitemap and robots routes, and 404 for an unknown route. Login noindex and baseline security headers were checked. The homepage was opened in the local browser. A full mobile and authentication integration review remains required before launch.

For Vercel, import this project from your Git repository and use the detected Next.js settings. Set your production environment variables in the host dashboard. Validate on the preview URL before connecting heylucy.org. A migration must preserve your existing DNS mail records and application routes. This package has not been deployed and does not change the existing website.

## Before launch

Confirm all product copy matches real features; replace the illustrative wording with approved content. Add real plans only after pricing is decided. Add accurate privacy, terms, contact, retention, and support information before collecting customer data. Implement authorization, rate limits, usage limits, backend validation and monitoring before exposing paid AI endpoints. Keep API keys server-side. Configure backups for any database you later add. Verify mobile, keyboard and production user flows. Set up Search Console and submit `/sitemap.xml`; indexing and rankings are not guaranteed. This is a website foundation, not an audited production AI platform.

## Main files

`app/page.tsx`: homepage and copy. `app/globals.css`: styles. `components/Demo.tsx`: local example selector. `app/login/page.tsx`: connection point for existing login. `app/layout.tsx`: global metadata. `app/sitemap.ts`, `app/robots.ts`: discovery configuration. `next.config.ts`: security headers.

## Image

`workspace.png` is the AI-generated office image created for this project. The preview UI and Lucy text were removed from the picture. No third-party image hotlinks are used.

## Founder positioning update

The founder supplied receptionist positioning: 24/7 natural-voice call answering, scheduling/rescheduling/cancellation, Google Calendar integration, recognition of returning callers, business FAQs and message capture. This starter illustrates these workflows; it does not implement or independently verify them. The homepage now includes customer-focused copy and an investor overview. Text reminders, live transfers, call summaries and Outlook remain roadmap items. Do not publish the claim of 174 automated tests, guaranteed booking correctness, market statistics, traction, pricing or a free trial without evidence and confirmed terms. No trial signup endpoint was provided; calls to action lead to the sample conversation.
