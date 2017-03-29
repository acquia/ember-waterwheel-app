/* jshint node: true */

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-drupal-waterwheel-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      host: 'http://ember-crud.dd:8080',                      // @todo - Fill in your Drupal backend URL
      oauth2TokenEndpoint: '/oauth/token',
      oauth2ClientId: '28c28cee-a8b5-44b8-8b72-fe8a635f5c32'  // @todo - Fill in your client UUID
    },

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]  // @todo - add your production fastboot domain (fastboot serving only)
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
