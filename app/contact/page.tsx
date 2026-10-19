import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';
import { SUPPORT_EMAIL, SIGN_UP_URL, SIGN_IN_URL } from '../../lib/links';
export const metadata: Metadata = { title: 'Contact', description: 'Contact HeyLucy for support, sales or partnership questions.', alternates: { canonical: '/contact' } };
export default function Contact() {
  return <LegalPage eyebrow="CONTACT" title="We’re here to help.">
    <div className="contact-grid">
      <article><h2>Support &amp; questions</h2><p>Email us and we’ll get back to you, usually within one business day.</p><a className="button" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></article>
      <article><h2>Try HeyLucy</h2><p>Set up your AI receptionist in minutes: add your business, services and hours, and get your Lucy phone number.</p><a className="button outline" href={SIGN_UP_URL}>Get started</a></article>
      <article><h2>Already a customer?</h2><p>Sign in to manage calls, appointments, messages and settings.</p><a className="text-link" href={SIGN_IN_URL}>Sign in →</a></article>
      <article><h2>Investors &amp; partners</h2><p>Interested in HeyLucy’s growth? Email us with “Investor” or “Partner” in the subject line.</p><a className="text-link" href={`mailto:${SUPPORT_EMAIL}?subject=Investor%20inquiry`}>Send an investor inquiry →</a></article>
    </div>
  </LegalPage>;
}
