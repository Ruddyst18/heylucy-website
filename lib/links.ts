// Where the Lucy app lives. Change LUCY_APP_URL in the host's environment if it moves.
export const APP_URL = (process.env.LUCY_APP_URL || 'https://app.heylucy.org').replace(/\/+$/, '');
export const SIGN_IN_URL = `${APP_URL}/`;
export const SIGN_UP_URL = `${APP_URL}/?signup=1`;
export const SUPPORT_EMAIL = 'support@heylucy.org';
export const UPDATED = 'October 17, 2026';
