import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://heylucy.org'),
  title: { default: 'HeyLucy – AI Receptionist That Answers Every Call, 24/7', template: '%s | HeyLucy' },
  description: 'HeyLucy is an AI receptionist that answers your business calls 24/7, books and reschedules appointments, syncs with Google Calendar, answers questions and takes messages.',
  openGraph: { title: 'HeyLucy – AI Receptionist That Answers Every Call, 24/7', description: 'Never miss another customer. Lucy answers calls, books appointments and syncs with Google Calendar.', url: 'https://heylucy.org', siteName: 'HeyLucy', type: 'website', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image' }
};
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>;
}

