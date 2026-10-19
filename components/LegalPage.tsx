import { Header, Footer } from './Header';
// Shared layout for Privacy, Terms and Contact.
export default function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated?: string; children: React.ReactNode }) {
  return <><Header/><main id="main" className="legal-page wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{updated ? <p className="legal-updated">Last updated: {updated}</p> : null}<div className="legal-body">{children}</div></main><Footer/></>;
}
