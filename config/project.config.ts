export const config = {
  urls: {
    google: process.env.GOOGLE_URL || 'https://www.google.co.in',
  },
  selectors: {
    searchBox: 'textarea[aria-label="Search"]',
  },
  timeouts: {
    defaultTimeout: 5000,
  },
};
