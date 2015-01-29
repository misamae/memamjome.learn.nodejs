(function (connect) {

    var url = 'mongodb://localhost:27017/products';
    var mongoClient = require('mongodb').MongoClient,
        assert = require('assert');

    connect.connect = function (next) {

        mongoClient.connect(url, function (err, db) {
            assert.equal(null, err);

            console.info('connected to mongo server at: ' + url);

            db.close();
            next(null);
        });
    };

})(module.exports);