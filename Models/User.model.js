const path = require('path'),
    { Model, SERIALIZE_ALL } = require('epitome-core');

module.exports = class UserModel extends Model {
    constructor() {
        super();
        
        this.serializable = SERIALIZE_ALL;
    
        this.schema = {
            name: String
        }
    }
}