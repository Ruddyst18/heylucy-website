import { redirect } from 'next/navigation';
import { SIGN_IN_URL } from '../../lib/links';
// Old links to heylucy.org/login go straight to the Lucy app.
export default function Login() { redirect(SIGN_IN_URL); }
