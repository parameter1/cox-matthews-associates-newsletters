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
    subscribeLink: 'https://cma.dragonforms.com/CCNewsNow',
    ...brands.ccnews,
  },
  'diverse-daily': {
    name: 'Diverse Daily',
    logoSrc: '/files/base/diverse/all/image/static/Diverse-Logo-2023-BlueWithTag.png',
    subscribeLink: 'https://cma.dragonforms.com/DiverseDaily',
    ...brands.diverse,
  },
  'diverse-health': {
    name: 'Diverse Health',
    subscribeLink: 'https://cma.dragonforms.com/DiverseHealth',
    ...brands.health,
  },
  'diverse-hiring': {
    name: 'Diverse Hiring',
    subscribeLink: 'https://cma.dragonforms.com/DiverseHiring',
    ...brands.hiring,
  },
  'diverse-military': {
    name: 'Diverse Military',
    logoSrc: '/files/base/diverse/all/image/static/DiverseMilitary.png',
    subscribeLink: 'https://cma.dragonforms.com/DiverseMilitary',
  },
  'diverse-weekly-recap': {
    name: 'Diverse Weekly Recap',
    logoSrc: '/files/base/diverse/all/image/static/WeeklyRecap.png',
    ...brands.diverse,
  },
};

module.exports = config;
