const route = require('express').Router();
const Cart = require('../../db').Cart;


route.get('/',(req,res) => {
    console.log("get")
    Cart.findAll()
    .then((items) => { res.status(200).send(items); })
    .catch( (err) => { res.status(500).send({ error: "could not retrieve cart items"}); } )
});

route.post('/',(req,res) => {
     console.log("post",req.body.name)
     console.log("post",req.body.price)
     console.log("post",req.body.manufacturer)
  Cart.findOne({ where: {productName: req.body.name} }).then(item => {
      if(item){
          console.log("item already present");
          let newquan = item.quantity+1;
          item.updateAttributes({quantity: newquan });
      }
      else{
          Cart.create({
              productName: req.body.name,
              productPrice: req.body.price,
              productManufacturer: req.body.manufacturer,
          }).then((item) => { res.status(201).send(item); })
          .catch((error) => { res.status(501).send({ error: "Error adding item" }) })
      }
  })
})
module.exports = {route}
