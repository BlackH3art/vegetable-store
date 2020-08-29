// module.exports = function() {
//   return {
//     categories: ["vegetables", "fruits", "others"],
//     products: [
//       {id: 1, name: "apple", category: "fruits", price: 5.99, description: "sweet and juicy"},
//       {id: 2, name: "orange", category: "fruits", price: 6.99, description: "big, juicy"},
//       {id: 3, name: "banana", category: "fruits", price: 4.25, description: "tropical fruit"},
//       {id: 4, name: "potatos", category: "vegetables", price: 1.89, description: "source of energy and vitamins"},
//       {id: 5, name: "lettuce", category: "vegetables", price: 2.40, description: "green leaves"},
//       {id: 6, name: "beetrut", category: "vegetables", price: 5.20, description: "lots of C and B1 vitamins"},
//       {id: 7, name: "strawberries", category: "fruits", price: 10.58, description: "sweet and juicy"},
//       {id: 8, name: "pasta", category: "other", price: 3.98, description: "best for your spaghetti"},
//       {id: 9, name: "flour", category: "other", price: 2.00, description: "you can bake something with that"},
//       {id: 10, name: "eggs", category: "other", price: 8.99, description: "everyday at least 5 eggs"},
//       {id: 11, name: "sour cream", category: "other", price: 1.20, description: "pour it into your soup"}
//     ],
//     orders: []
//   }
// }


const faker = require('faker');
const products = [];
const categories = ["vegetables", "fruits", "others", "dairy products"];
const orders = [];

faker.seed(100);
for(let i = 1; i < 500; i++) {
  let category = faker.helpers.randomize(categories);
  products.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    price: Number(faker.commerce.price()),
    description: `${category}: ${faker.lorem.sentence(2)}`
  })
}

for(let i = 1; i < 50; i++) {
  let firstName = faker.name.firstName();
  let surname = faker.name.lastName();
  let order = {
    id: i,
    name: `${firstName} ${surname}`,
    email: faker.internet.email(firstName, surname),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    shipped: faker.random.boolean(),
    products: []
  };

  let productCount = faker.random.number({min: 1, max: 5});
  let product_ids = [];

  while (product_ids.length < productCount) {
    let candidateID = faker.random.number({min: 1, max: products.length})
    if (product_ids.indexOf(candidateID) === -1) {
      product_ids.push(candidateID);
    }
  }

  for (let j = 0; j < productCount; j++) {
    order.products.push({
      quantity: faker.random.number({min: 1, max: 10}),
      product_id: product_ids[j]
    })
  }
  orders.push(order)
}


module.exports = function () {
  return {
    categories: categories,
    products: products,
    orders: orders,
  }
}