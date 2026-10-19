# HeyLucy project instructions

This is a Next.js App Router + TypeScript public business website starter. Use Node 22+. Read README.md before editing. Keep changes small and reviewable; save progress in Git when a repository has been initialized by the owner.

## Product boundaries

Lucy is an AI receptionist for appointment businesses. The founder supplied the capability brief documented in README.md. Those capabilities are not implemented or independently verified in this marketing starter. Pricing, security evidence, testimonials, traction and legal policies remain unconfirmed. Do not invent them. Existing sample conversations are labeled static illustrations and must remain clearly labeled until real functionality is implemented.

The owner approved the office photograph as the homepage hero background and the `/login` background. Keep the remaining public sections in the cream/sage design. Keep login separate from public marketing pages. Never fake authentication, accept passwords without a real authentication provider, or put secret API keys in public environment variables or client components. Implement server-side authorization before returning any private data. Do not persist sensitive customer information in localStorage.

## Structure and verification

Use Server Components by default and client components for interactions only. Preserve semantic markup, skip link, keyboard navigation, visible focus and reduced-motion behavior. Do not add packages for things native CSS or HTML can handle well. Run `npm run typecheck` and `npm run build` after changes; test actual user flows when integrating services. Keep package-lock.json tracked. Test your chosen production host's headers and configuration.

## Integrations to discover, not assume

Ask the owner for the existing source repository and service names before replacing application infrastructure. Confirm the actual auth, AI provider, database, payment provider and domain host as relevant. Add secrets through environment variables. Document setup in README.md. Use staging to verify before modifying live routes or DNS.

## Explicit owner approval requirement

The owner requires review and explicit approval before ANY changes to an already published Lucy website, Vercel project, GitHub repository, DNS, or other external service. All starter work must remain local until that approval. Do not push code, create or merge remote pull requests, deploy previews or production, or modify external settings without that approval. Downloading dependencies and running local checks are allowed.

No external accounts have been created or connected by this starter. No deployment is authorized by these repository instructions.




## Audience clarification
Lucy is for businesses across industries, not specifically salons or appointment-only businesses. Lead with call answering, customer questions, and message capture. Present scheduling as a capability where relevant. Use general-business examples first and a balanced industry list.
