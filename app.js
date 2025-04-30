const express = require("express");
const path = require('path');
const app = express();
const cors = require('cors');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
  }

const { Park } = require('./models');

app.get('/api/parks', async (req, res) => {

    let query = {
        where: {}
    };

    if(req.query.enclosed) {
        query.where.enclosed = true;
    };

    if(req.query.bathrooms) {
        query.where.bathrooms = true;
    }

    if(req.query.parking) {
        query.where.parking = req.query.parking;
    }

    const parks = await Park.findAll(query); // Fetch parks from DB
    res.json(parks); // Send raw data, no rendering
});

app.post('/api/parks', async (req, res) => {
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


const port = 8000;
app.listen(port, () => console.log('Server listening on port: ', port));