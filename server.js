
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Gun = require('./gun');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client'));

app.post("/gun", async function(req, res){
    try {
        const gun = await Gun.create(req.body);
        res.json(gun);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.get("/gun", async function(req, res){
    try {
        const guns = await Gun.find();
        res.json(guns);
    } catch (error) {
        res.status(400).json(error);
    }
});

mongoose.connect("mongodb+srv://admin:jdq9MNflPxlSnyrT@cluster0.iephf.mongodb.net/safestore?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});