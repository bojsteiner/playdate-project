const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.json());


const { Park } = require('./models');


app.get('/parks', async (req, res) => {

    let query = {
        where: {}
    };

    if(req.query.enclosed) {
        query.where.enclosed = true;
    };

    if(req.query.bathrooms) {
        query.where.bathrooms = true;
    }

    const enclosed = req.query.enclosed === "true";
    const bathrooms = req.query.bathrooms === "true";
    const parks = await Park.findAll(query); // Fetch parks from DB
    res.render('parks', { parks, enclosed, bathrooms }); // Pass data to EJS file
});

app.post('/parks', async (req, res) => {
    const newPark = await Park.create({
        name: req.body.name,
        address: req.body.address,
        imageUrl: req.body.imageUrl,
        enclosed: req.body.enclosed,
        bathrooms: req.body.bathrooms,
        shade: req.body.shade,
        parking: req.body.parking,
        youngKidsArea: req.body.youngKidsArea
    });

    res.json({message: "Successfully created new Park", data: newPark})

})

app.get('/', (req, res) => {
    res.render('index')
    // res.sendFile(path.join(__dirname, 'index.html'));
});



const port = 8000;
app.listen(port, () => console.log('Server listening on port: ', port));