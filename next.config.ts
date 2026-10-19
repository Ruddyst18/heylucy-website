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
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
    ] }];
  }
};
export default config;

