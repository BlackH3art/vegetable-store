module.exports = function() {
  return {
    categories: ["vegetables", "fruits", "others"],
    products: [
      {id: 1, name: "apple", category: "fruits", price: 5.99, description: "sweet and juicy"},
      {id: 2, name: "orange", category: "fruits", price: 6.99, description: "big, juicy"},
      {id: 3, name: "banana", category: "fruits", price: 4.25, description: "tropical fruit"},
      {id: 4, name: "potatos", category: "vegetables", price: 1.89, description: "source of energy and vitamins"},
      {id: 5, name: "lettuce", category: "vegetables", price: 2.40, description: "green leaves"},
      {id: 6, name: "beetrut", category: "vegetables", price: 5.20, description: "lots of C and B1 vitamins"},
      {id: 7, name: "strawberries", category: "fruits", price: 10.58, description: "sweet and juicy"},
      {id: 8, name: "pasta", category: "other", price: 3.98, description: "best for your spaghetti"},
      {id: 9, name: "flour", category: "other", price: 2.00, description: "you can bake something with that"},
      {id: 10, name: "eggs", category: "other", price: 8.99, description: "everyday at least 5 eggs"},
      {id: 11, name: "sour cream", category: "other", price: 1.20, description: "pour it into your soup"}
    ],
    orders: []
  }
}