import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';
import { SUPPORT_EMAIL, UPDATED } from '../../lib/links';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'How HeyLucy collects, uses and protects information for businesses and their callers.', alternates: { canonical: '/privacy' } };
export default function Privacy() {
  const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
  return <LegalPage eyebrow="PRIVACY" title="Privacy Policy" updated={UPDATED}>
    <p>HeyLucy (“HeyLucy”, “we”, “us”) provides Lucy, an AI phone receptionist for businesses. HeyLucy is operated by its founder as a sole proprietorship based in Iowa, USA. This policy explains what information we collect, why, who we share it with, and the choices you have. Questions: {mail}.</p>

    <h2>Who this policy covers</h2>
    <ul>
      <li><strong>Business customers</strong> who create a HeyLucy account (“you”).</li>
      <li><strong>Callers</strong> who phone a business that uses Lucy. For callers, the business is responsible for how it uses their information; we process it on the business’s behalf.</li>
      <li><strong>Visitors</strong> to heylucy.org.</li>
    </ul>

    <h2>Information we collect</h2>
    <h3>From business customers</h3>
    <ul>
      <li>Account details: email address and password (stored only as a secure one-way hash).</li>
      <li>Your personal mobile number, used to send verification codes and reset a forgotten password.</li>
      <li>Business details you enter: business name, phone, address, hours, services, staff, FAQs, departments and settings.</li>
      <li>Billing status. Payments (card, digital wallets such as Apple Pay and Google Pay, and bank accounts) are handled by Stripe; we never see or store full card or bank account numbers.</li>
    </ul>
    <h3>From callers (on behalf of the business)</h3>
    <ul>
      <li>Caller phone number, the name they give, the reason for the call and the outcome (for example, an appointment booked or a message taken).</li>
      <li>Appointment details: date, time, service and notes.</li>
      <li>What the caller says is converted to text so Lucy can respond. If a caller leaves a voicemail, the recording and its transcription are stored so the business can review it.</li>
    </ul>
    <h3>From Google Calendar (only if you connect it)</h3>
    <p>If you choose to connect Google Calendar, Lucy reads the start and end times of events in your primary calendar so she never books over them, and — if you turn on “Sync appointments” — the event titles and times so they appear on Lucy’s calendar. Lucy also creates, moves and deletes the events for appointments she books. See “Google user data” below.</p>
    <h3>From website visitors</h3>
    <p>heylucy.org does not use advertising or analytics cookies. Our hosting providers keep standard technical logs (such as IP address and browser type) for security and reliability.</p>

    <h2>How we use information</h2>
    <ul>
      <li>To answer calls, book and manage appointments, answer questions and take messages for the business.</li>
      <li>To run your account: sign-in, password reset, verification codes and support.</li>
      <li>To keep the service secure and reliable: preventing fraud and abuse, rate limiting, monitoring errors and fixing problems.</li>
      <li>To process payments and comply with legal obligations.</li>
    </ul>
    <p>We do not sell personal information, and we do not use it for advertising.</p>

    <h2>Google user data</h2>
    <p>HeyLucy’s use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements. Specifically:</p>
    <ul>
      <li>We use Google Calendar data only to check your availability, show your appointments in Lucy, and keep Lucy’s bookings in sync with your calendar.</li>
      <li>We do not sell Google user data, use it for advertising, or use it to train AI models.</li>
      <li>We do not let people read your Google data, except with your permission, for security purposes, or where required by law.</li>
      <li>Your Google access token is stored encrypted. You can disconnect at any time in Settings → Google Calendar, which removes our access and deletes the calendar data Lucy copied. You can also remove access at <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>.</li>
    </ul>

    <h2>Who we share information with</h2>
    <p>We share information only with service providers that help us run HeyLucy, under their own privacy and security commitments:</p>
    <ul>
      <li><strong>Twilio</strong> — phone numbers, calls, speech-to-text, voicemail and text-message verification codes.</li>
      <li><strong>Google</strong> — Google Calendar, only if you connect it.</li>
      <li><strong>Stripe</strong> — subscription payments.</li>
      <li><strong>Render</strong> and <strong>Vercel</strong> — hosting for our servers, database and website.</li>
    </ul>
    <p>We may also disclose information if required by law, to protect the rights and safety of our users or the public, or as part of a sale or reorganization of the business (with notice to you).</p>

    <h2>How long we keep information</h2>
    <p>We keep account and business information while your account is open. When you close your account, we delete your account, business data, appointments, customers, call logs, messages and calendar connection. Limited records may be kept longer where needed for security, fraud prevention, accounting or legal reasons.</p>

    <h2>Security</h2>
    <p>We use encryption in transit (HTTPS), hashed passwords, encrypted Google tokens, verification of requests from Twilio, per-account data separation, rate limits and automated security testing. No system is perfectly secure, so please use a strong, unique password.</p>

    <h2>Your choices and rights</h2>
    <ul>
      <li>You can view and edit your business information in Settings, and delete appointments in Lucy.</li>
      <li>You can disconnect Google Calendar at any time.</li>
      <li>You can ask us for a copy of your data, to correct it, or to delete your account by emailing {mail}.</li>
      <li>Callers who want their information corrected or deleted should contact the business they called; we will help that business respond.</li>
    </ul>

    <h2>Children</h2>
    <p>HeyLucy is a service for businesses and is not directed to children under 13. We do not knowingly collect information from children.</p>

    <h2>Changes</h2>
    <p>We may update this policy. If changes are significant, we will notify account holders by email or in the app before they take effect. The date at the top shows the latest version.</p>

    <h2>Contact</h2>
    <p>HeyLucy, Iowa, USA — {mail}</p>
  </LegalPage>;
}
