const expreess = require('express');
const app = expreess();
const port = 3000;

// application level settings
app.set('view engine', 'ejs'); // set the view engine to ejs

//routing
app.get('/', (req, res) => {
  res.send('home page!');
});


app.post('/api/data',(req, res) => {
    res.json({
        message: 'Data received',
        data: req.body
    })
})

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('Something went wrong!')

})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});