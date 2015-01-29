//products.js

(function(products){
    
    var repository = require("../data/productsRepository.js");

    products.init = function(app) {

        app.get("/api/products/", function(req, res){
            res.set("Content-Type", "application/json");
            var products = repository.get();

            res.send(products);
        });

        app.get("/api/products/:id", function(req, res){
            var id = req.params.id; 

            console.log("getting product with id: " + id);

            res.set("Content-Type", "application/json");
            res.send({id: 0, name: "test product 0"});
        });
    };

})(module.exports);