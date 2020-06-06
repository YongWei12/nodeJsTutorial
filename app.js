// core modules--> look for a global module in node js
const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//express exports as a function
const app = express()

//setting ejs view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


//its a middleware that parse the incomming requests
app.use(bodyParser.urlencoded({extended:false}));
//static will make the folder public to outside user
app.use(express.static(path.join(__dirname,"public")));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page Not Found'});
});

app.listen(3000);