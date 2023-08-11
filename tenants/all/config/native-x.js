const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://diverse.native-x.parameter1.com/email-placement', { enabled: true });

config
  .setAliasPlacements('ccnews-now', [
    { name: 'native-slot-1', id: '617190722f211d0001c095dc' },
  ])
  .setAliasPlacements('diverse-daily', [
    { name: 'native-slot-1', id: '6176b70d2f211d0001c099db' },
  ])
  .setAliasPlacements('diverse-health', [
    { name: 'native-slot-1', id: '617813f92f211d0001c09a76' },
  ])
  .setAliasPlacements('diverse-hiring', [
    { name: 'native-slot-1', id: '6178153d2175830001464af8' },
  ])
  .setAliasPlacements('diverse-military', [
    { name: 'native-slot-1', id: '617816d22175830001464b39' },
  ])
  .setAliasPlacements('diverse-weekly-recap', [
    { name: 'native-slot-1', id: '6176ba2a2f211d0001c09a00' },
  ]);

module.exports = config;
