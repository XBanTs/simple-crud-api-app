const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

// ? Middleware to parse JSON bodies
app.use(express.json());

// ? Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false}));

// ? Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API  Server");
});


// ? to get product by id
app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product); 
      
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})



mongoose.connect("mongodb+srv://ayo:YpldB0Eh0pJmYFsI@backenddb.exs0kyz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
})
