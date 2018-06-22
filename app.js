const express = require('express');
const path = require('path');
const app = express();
const route = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/api',route.route);

app.listen(3000,() => {console.log("server listenening at port 3000")})
