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
    ...brands.ccnews,
  },
  'diverse-daily': {
    name: 'Diverse Daily',
    logoSrc: '/files/base/diverse/all/image/static/diverse-education-logo.png',
    ...brands.diverse,
  },
  'diverse-health': {
    name: 'Diverse Health',
    ...brands.health,
  },
  'diverse-hiring': {
    name: 'Diverse Hiring',
    ...brands.hiring,
  },
  'diverse-military': {
    name: 'Diverse Military',
    logoSrc: '/files/base/diverse/all/image/static/DiverseMilitary.png',
  },
  'diverse-weekly-recap': {
    name: 'Diverse Weekly Recap',
    logoSrc: '/files/base/diverse/all/image/static/WeeklyRecap.jpeg',
    ...brands.diverse,
  },
};

module.exports = config;
