(function(index){

    var products = require("./products.js");

    index.init = function (app) {
        products.init(app);
        app.get("/", function(req, res){
            res.send("<html><body><h1>api</h1></body></html>");
        });
    };


})(module.exports);