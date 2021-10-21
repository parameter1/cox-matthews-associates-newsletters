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
    ...brands.diverse,
  },
  'diverse-health': {
    name: 'Diverse Health',
    ...brands.diverse,
  },
  'diverse-hiring': {
    name: 'Diverse Hiring',
    ...brands.diverse,
  },
  'diverse-military': {
    name: 'Diverse Military',
    ...brands.diverse,
  },
  'diverse-weekly-recap': {
    name: 'Diverse Weekly Recap',
    ...brands.diverse,
  },
};

module.exports = config;
