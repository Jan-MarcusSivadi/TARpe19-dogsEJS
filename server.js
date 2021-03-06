const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));

app.get('/', (req, res) => {
    //https://api.thecatapi.com/v1/images/search
    let defaultimageurl = {
        url: "https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg"
    };
    res.render('index.ejs', {imageSrc: defaultimageurl});
});

app.post('/get-dog', (req, res)=>{
    const url = "https://dog.ceo/api/breeds/image/random";

    axios.get(url)
    .then(response =>{
        let randomImageUrl = {
            url: response.data.message
        };

        res.render('index.ejs', {imageSrc: randomImageUrl});

    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});