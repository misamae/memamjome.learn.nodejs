(function(apis){

    var products = require("./products.js");

    apis.init = function (app) {
        products.init(app);
    };

})(module.exports);