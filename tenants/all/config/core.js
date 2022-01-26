const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'ccnews-now': {
    name: 'CCNews Now',
    subscribeLink: 'https://responses.diverseeducation.com/CCNewsNow?utm_campaign=5730&utm_medium=email&utm_source=Eloqua',
    ...brands.ccnews,
  },
  'diverse-daily': {
    name: 'Diverse Daily',
    logoSrc: '/files/base/diverse/all/image/static/diverse-education-logo.png',
    subscribeLink: 'https://responses.diverseeducation.com/DiverseDaily?elqTrackId=02420E0A4C85B5B6A2D2E5556FD7B98C&elq=00000000000000000000000000000000&elqaid=652&elqat=2&elqCampaignId=',
    ...brands.diverse,
  },
  'diverse-health': {
    name: 'Diverse Health',
    subscribeLink: 'https://responses.diverseeducation.com/DiverseHealth?elqTrackId=C5DA3CD4035F8499D7FFDC2CB140C732&elq=00000000000000000000000000000000&elqaid=652&elqat=2&elqCampaignId=',
    ...brands.health,
  },
  'diverse-hiring': {
    name: 'Diverse Hiring',
    subscribeLink: 'https://responses.diverseeducation.com/DiverseHiring?elqTrackId=A075496F337E340B1A7413883DF3F7FF&elq=00000000000000000000000000000000&elqaid=652&elqat=2&elqCampaignId=',
    ...brands.hiring,
  },
  'diverse-military': {
    name: 'Diverse Military',
    logoSrc: '/files/base/diverse/all/image/static/DiverseMilitary.png',
    subscribeLink: 'https://responses.diverseeducation.com/DiverseMilitary?elqTrackId=60941DDF640284FA0CD0A9B6C6A1BD34&elq=00000000000000000000000000000000&elqaid=652&elqat=2&elqCampaignId=',
  },
  'diverse-weekly-recap': {
    name: 'Diverse Weekly Recap',
    logoSrc: '/files/base/diverse/all/image/static/WeeklyRecap.jpeg',
    ...brands.diverse,
  },
};

module.exports = config;
