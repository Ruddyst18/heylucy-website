import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  // Restricted local environments may prohibit child-process build workers.
  ...(process.env.LUCY_LOCAL_BUILD === '1' ? { experimental: { workerThreads: true, cpus: 2, useTypeScriptCli: false } } : {}),
  // Addresses that existed on the old heylucy.org (Stripe links to /support, shared /pricing links).
  async redirects() {
    return [
      { source: '/support', destination: '/contact', permanent: true },
      { source: '/pricing', destination: '/#pricing', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/(.*)', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      // Next.js adds small inline scripts for page loading, so scripts allow 'unsafe-inline';
      // everything else is locked to this site (no third-party scripts, frames or plugins).
      { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" }
    ] }];
  }
};
export default config;

