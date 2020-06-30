/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1592970010813_9960',
    // add your middleware config here
    middleware: ['userAgent'],
    gzip: {
      minSize: 1024
    },
    validate: {
      convert: true
    },
    responseCode: {
      success: 0,
      common: 1000,
      invalid: 1001,
      missing_field: 1002
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
