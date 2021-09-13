const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://diverseeducation.serve.email-x.parameter1.com');

config
  .setAdUnits('ccnews-now', [
    {
      name: 'sponsor',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('diverse-daily', [
    {
      name: 'sponsor',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('diverse-health', [
    {
      name: 'sponsor',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('diverse-hiring', [
    {
      name: 'sponsor',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('diverse-military', [
    {
      name: 'sponsor',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('diverse-weekly-recap', [
    {
      name: 'sponsor',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-a',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-b',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-c',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-d',
      id: '',
      width: 300,
      height: 250,
    },
    {
      name: 'rotation-e',
      id: '',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
