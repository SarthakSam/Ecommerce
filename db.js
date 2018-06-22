const Sequelize = require('sequelize');

const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
  }
});

const User = db.define('users',{
    id: {    type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
        },
    name: {  type: Sequelize.STRING,
             allowNull: false
          }
})

const Product = db.define('products',{
     id: {
             type: Sequelize.INTEGER,
             autoIncrement: true,
             primaryKey: true
         },
      name: {  type: Sequelize.INTEGER,
               allowNull: false
            },
      manufacturer: Sequelize.STRING,
      price: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0.0
            }
})

const Cart = db.define('newcart',{
     id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
      productName: {
                  type: Sequelize.STRING,
                   allowNull: false
                 },
      productPrice: {
                     type: Sequelize.FLOAT,
                     allowNull: false,
                 },
      productManufacturer: {
                            type: Sequelize.STRING,
                             allowNull: false
                     },
      quantity:  {
                   type: Sequelize.INTEGER,
                   defaultValue: 1
                 }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))


module.exports={
  User,Product,Cart
}
