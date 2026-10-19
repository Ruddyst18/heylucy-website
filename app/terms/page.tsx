import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '../../components/LegalPage';
import { SUPPORT_EMAIL, UPDATED } from '../../lib/links';
export const metadata: Metadata = { title: 'Terms of Service', description: 'The terms for using HeyLucy, the AI phone receptionist.', alternates: { canonical: '/terms' } };
export default function Terms() {
  const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
  return <LegalPage eyebrow="TERMS" title="Terms of Service" updated={UPDATED}>
    <p>These terms are an agreement between you and HeyLucy, a sole proprietorship based in Iowa, USA (“HeyLucy”, “we”, “us”). By creating an account or using HeyLucy, you agree to them. If you use HeyLucy for a business, you confirm you are allowed to accept these terms for that business.</p>

    <h2>1. The service</h2>
    <p>HeyLucy provides Lucy, an AI receptionist that answers phone calls for your business, answers questions using the information you provide, takes messages, and books, moves and cancels appointments. Optional features include Google Calendar sync. We may improve, change or remove features over time.</p>

    <h2>2. Your account</h2>
    <ul>
      <li>You must give accurate information, verify your personal phone, and keep your password secure.</li>
      <li>You are responsible for activity under your account. Tell us right away at {mail} if you think it has been misused.</li>
      <li>You must be at least 18 years old.</li>
    </ul>

    <h2>3. Your responsibilities</h2>
    <ul>
      <li><strong>Accurate information.</strong> Lucy answers using the hours, services, prices and other details you enter. Keep them up to date.</li>
      <li><strong>Laws about calls.</strong> You are responsible for complying with laws that apply to your business and your calls, including telemarketing, call-recording and consent laws, and privacy laws for your customers’ information.</li>
      <li><strong>Sensitive information.</strong> Do not use HeyLucy to collect payment card numbers, Social Security numbers, or health information that requires special legal protection (such as under HIPAA) unless we have agreed to it in writing.</li>
      <li><strong>Emergencies.</strong> Lucy is not an emergency service. Callers with an emergency should hang up and call 911.</li>
    </ul>

    <h2>4. Acceptable use</h2>
    <p>You may not use HeyLucy to break the law, send spam or unwanted calls or texts, impersonate anyone, harass people, interfere with or probe the service’s security, or resell the service without our permission. We may suspend accounts that do.</p>

    <h2>5. AI limits</h2>
    <p>Lucy uses speech recognition and automated responses. She can mishear callers, misunderstand requests or give an incomplete answer. Review your appointments and messages regularly, and confirm important details with your customers. HeyLucy is a tool to help your team; it does not replace your judgment.</p>

    <h2>6. Phone numbers and third-party services</h2>
    <p>Phone numbers we provide through Twilio remain subject to carrier and Twilio rules and may be released if your account is closed or unpaid. Google Calendar and other connected services are governed by their own terms.</p>

    <h2>7. Plans, billing and cancellation</h2>
    <ul>
      <li>Paid plans are billed monthly in advance through Stripe and renew automatically until you cancel. Extra calls above your plan are billed at the listed per-call price on your next invoice. You can pay by any method offered at checkout, such as card, digital wallet or bank account.</li>
      <li>You can cancel at any time; service continues until the end of the period you paid for. Fees already paid are not refunded except where required by law.</li>
      <li>We may change prices with at least 30 days’ notice. New prices apply from your next billing period.</li>
      <li>Usage beyond your plan’s limits may be paused or charged as shown in the app.</li>
    </ul>

    <h2>8. Your data</h2>
    <p>You own your business data and your customers’ information. You give us permission to process it only to provide and secure the service, as described in our <Link href="/privacy">Privacy Policy</Link>. You can delete your account at any time; we then delete your data as described there.</p>

    <h2>9. Availability</h2>
    <p>We work hard to keep Lucy available around the clock, but we do not guarantee the service will be uninterrupted or error-free. Phone networks, Google, Twilio and other providers can have outages outside our control.</p>

    <h2>10. Disclaimers and limitation of liability</h2>
    <p>To the extent allowed by law, HeyLucy is provided “as is” without warranties of any kind. HeyLucy is not liable for lost profits, lost business, missed or incorrect appointments, or indirect or consequential damages. Our total liability for any claim is limited to the amount you paid us in the 12 months before the claim.</p>

    <h2>11. Indemnity</h2>
    <p>You agree to cover claims brought against HeyLucy by third parties that arise from your use of the service in breach of these terms or the law.</p>

    <h2>12. Ending the agreement</h2>
    <p>You can stop using HeyLucy and close your account at any time. We may suspend or close accounts that break these terms or are unpaid, with notice where reasonable.</p>

    <h2>13. Governing law</h2>
    <p>These terms are governed by the laws of the State of Iowa, USA. Disputes will be handled in the state or federal courts located in Iowa.</p>

    <h2>14. Changes</h2>
    <p>We may update these terms. If changes are significant, we will notify account holders before they take effect. Continuing to use HeyLucy after that means you accept the updated terms.</p>

    <h2>Contact</h2>
    <p>HeyLucy, Iowa, USA — {mail}</p>
  </LegalPage>;
}
