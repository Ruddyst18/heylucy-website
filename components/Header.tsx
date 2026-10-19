import Link from 'next/link';
import { SIGN_IN_URL, SIGN_UP_URL } from '../lib/links';
export function Brand() { return <Link href="/" className="brand" aria-label="HeyLucy home"><span className="spark" aria-hidden="true">✦</span> <span className="brand-hey">Hey</span>Lucy<span className="brand-dot">.</span></Link>; }
export function Header() {
  return <header className="header wrap"><Brand/><nav aria-label="Main navigation"><Link href="/#possibilities">Features</Link><Link href="/#how-it-works">How it works</Link><Link href="/#pricing">Pricing</Link><Link href="/#questions">FAQs</Link><Link href="/#investors">For investors</Link></nav><div className="header-actions"><a href={SIGN_IN_URL} className="button small outline">Sign in</a><a href={SIGN_UP_URL} className="button small">Get started</a></div></header>;
}
export function Footer() { return <footer className="wrap footer"><Brand/><p>HeyLucy — the AI receptionist that answers every call, 24/7.</p><nav className="legal" aria-label="Company"><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav><span>© {new Date().getFullYear()} HeyLucy</span></footer>; }
