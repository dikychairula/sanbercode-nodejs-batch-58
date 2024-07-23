const express = require('express');
const app = express();
const port = 3000;

// Middleware parsing JSON
app.use(express.json());

// Data produk
let categories = [
  { id: 1, name: 'Elektronik'},
  { id: 2, name: 'Perabotan'}
];

let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik'},
    { id: 2, name: 'Meja', category : 'Perabotan'}
];

// 1. GET * categories
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// GET * products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// 2. GET category by ID
app.get('/api/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find(category => category.id === id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).send('category not found');
  }
});

// 3. POST new Category
app.post('/api/categories', (req, res) => {
  const newCategory = req.body;
  newCategory.id = categories.length ? categories[categories.length-1].id + 1 : 1;
  categories.push(newCategory);
  res.status(201).send('category added successfully');
});

// 4. PUT Category by ID
app.put('/api/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updateCategory = req.body;
  const index = categories.findIndex(category => category.id === id);

  if (index !== -1) {
    categories[index] = { ...categories[index], ...updateCategory };
    res.send('category updated successfully');
  } else {
    res.status(404).send('category not found');
  }
});

// 5. DELETE Category by ID
app.delete('/api/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  categories = categories.filter(category => category.id !== id);
  res.send('category deleted successfully');
});

// 6. GET Product by productName
app.get('/api/products/:name', (req, res) => {
    const name = req.params.name;
    const product = products.find(product => product.name === name);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('product not found');
    }
});

// GET Product by product name and category
app.get('/api/products/:category/:name', (req, res) => {
  const category = req.params.category;
  const name = req.params.name;

  const product = products.find(product => product.name === name && product.category === category);

  if (product) {
      res.json(product);
  } else {
      res.status(404).send('Product not found');
  }
});

// start server Express di port yang ditentukan
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});