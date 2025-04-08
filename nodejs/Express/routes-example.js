const expreess = require('express');
const app = expreess();
const port = 3000;


// root route
app.get('/', (req, res) => {
  res.send('Welcome to our home page!');
});

// get all products
app.get('/products', (req, res) => {
    const products = [
        { id: 1, label: 'Product 1' },
        { id: 2, label: 'Product 2' },
        { id: 3, label: 'Product 3' }
    ];

    res.json(products);

});

// get a single product
app.get('/products/:productId', (req, res) => {
    const productId = parseInt(req.params.productId)
    const products = [
        { id: 1, label: 'Product 1' },
        { id: 2, label: 'Product 2' },
        { id: 3, label: 'Product 3' }
    ];

    const getSingleProduct = products.find(product => product.id === productId);
    
    if (!getSingleProduct) {
        return res.status(404).json({ message: 'Product not found' });
    }else {
        console.log(getSingleProduct);
    }
});

app.listen(port, () => {
  console.log(`Server is now running at post: ${port}`);
} );
