const User = require('../../db').User
const route = require('express').Router();

route.get('/',(req,res) => {
   User.findAll()
   .then((users) => { res.status(200).send(users); })
   .catch((err) => { res.status(500).send({ error: "could not retrieve users" }); });
});

route.post('/',(req,res) => {
    console.log("USer post",req.body.name)
    User.create({
        name: req.body.name
    }).then((user) => { console.log(user); res.status(201).send(user); })
    .catch((error) => { res.status(501).send({ error: "Error adding user" }) })
})

module.exports = { route }
