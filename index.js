//jshint esversion: 6
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/contacts', (req, res) => res.send('Contact me at: muhammad.sahil514@gmail.com!'));
app.get('/about',(req,res)=>res.send('nodemon is awesome!'));
app.get('/nodemon',(req,res)=>res.send('nodemon is awesome!'));
app.get('/node',(req,res)=>res.send('nodemon is awesome!'));
app.get('/node1',(req,res)=>res.send('nodemon is awesome!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})