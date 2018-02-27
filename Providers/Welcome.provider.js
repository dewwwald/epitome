const fs = require('fs'),
    path = require('path'),
    { Provider } = require('epitome-core');
    
module.exports = class WelcomeProvider extends Provider {
    initialize(next) {
        next('Welcome to assimilate.');
    }

    register(message) {
        console.log(message);
    }

    final() {
        console.log('...');
    }
}