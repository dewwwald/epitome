module.exports = {
    /**
     * Port the app listens on for localhost / 0.0.0.0
     */
    port: process.env.APP_PORT || 3000,

    /**
     * The url on which the app is hosted
     */
    appUrl: process.env.APP_URL || 'http://localhost:' + (process.env.APP_PORT || 3000),

    /**
     * App debug more or production mode toggler
     */
    debug: false,

    /**
     * File extension for model files
     */
    modelExt: '.model.js',

    /**
     * File extension for route files
     */
    routeExt: '.routing.js',

    /**
     * File extension for controller files
     */
    controllerExt: '.controller.js',

    /**
     * File extension for provider files
     */
    providerExt: '.provider.js',
};