const express = require('express');
const app = express();
const Otels = require("./otels/otels")


// const otels = new Otels();
// otels.create({otelname: "Osmik", location: "Kadikoy", category: "1-star"})


app.listen(5000, () => {
    console.log('Port is listening');
})

