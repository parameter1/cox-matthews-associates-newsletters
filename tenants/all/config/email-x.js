const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://diverse.serve.email-x.parameter1.com');

config
  .setAdUnits('ccnews-now', [
    {
      name: 'ad-slot-1',
      id: '61718f6f0b81fa1a4a8068bb',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '61718f82c9a53c50cec6c153',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '61718f970b81fa1a098068e0',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '61718fa8c9a53cb0a2c6c166',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('diverse-daily', [
    {
      name: 'ad-slot-1',
      id: '6176b658c9a53cbe41c6c38b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '6176b66cc9a53c48e8c6c39e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '6176b67ec9a53ccb50c6c3a8',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '6176b68ec9a53c2339c6c3bb',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('diverse-weekly-recap', [
    {
      name: 'ad-slot-1',
      id: '6176b9ba0b81fa95ca806bdc',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '6176b9d30b81fa88a1806bef',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '6176b9e6c9a53c9558c6c489',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '6176b9f7c9a53c2beac6c493',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('diverse-health', [
    {
      name: 'ad-slot-1',
      id: '6178138b0b81fa2bb9806d45',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '6178139b0b81fa7067806d58',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '617813abc9a53c026fc6c5f8',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '617813c0c9a53c19f9c6c60b',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('diverse-hiring', [
    {
      name: 'ad-slot-1',
      id: '617814e50b81fa693f806d98',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '617814f8c9a53c5d1fc6c643',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '617815080b81fa9295806dc6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '61781518c9a53c3c7bc6c656',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
