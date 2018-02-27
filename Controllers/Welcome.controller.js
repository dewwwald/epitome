const path = require('path'),
    fs = require('fs');

module.exports = class WelcomeController {
    get container() {
        return this._container;
    }
    
    constructor(container) {
        this._container = container;
    }

    get(request, response) {
        response.json({ message: 'hello world' });
    }
}