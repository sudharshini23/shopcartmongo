// const mongoConnect = require('../util/database')
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    // db.collection('products').insertOne({name: 'A book', price: 12.99})
    return db.collection('products')
    .insertOne(this)
    .then(result => {
      console.log("This is getDb result", result);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = Product;
