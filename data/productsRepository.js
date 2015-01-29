//products repository
(function (repo) {
    
    var mongoUrl = "mongodb://localhost:27017/products",
        mongo = require('mongodb'),
        assert = require('assert');
    
    var mongoClient = mongo.MongoClient;

    repo.get = function () {
        
        return [
            {
                id: 0, name: "product 0"
            },
            {
                id: 1, name: "product 1"
            },
            {
                id: 2, name: "product 2"
            },
            {
                id: 3, name: "product 3"
            }];
    };
    
})(module.exports);
