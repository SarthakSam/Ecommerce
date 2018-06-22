const Product = require('../../db').Product
const route = require('express').Router();

route.get('/',(req,res) => {
   Product.findAll()
   .then((products) => { res.status(200).send(products); })
   .catch((err) => { res.status(500).send({ error: "could not retrieve products" }); });
});

route.post('/',(req,res) => {
    if(isNaN(req.body.price)){
      res.status(403).send({ error: "Price not valid"})
    }
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product) => { res.status(201).send(product); })
    .catch((error) => { res.status(501).send({ error: "Error adding product" }) })
})


module.exports = { route}
