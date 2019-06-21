const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const port = process.env.PORT || 3000;

//ACCOUNTS
var ctrl_account = require('./controllers_account');
var routes_account = require('./routes_account');

//USERS
var ctrl_user = require('./controllers_user');
var routes_user = require('./routes_user');

//BANK EMPLOYEE
var ctrl_emp = require('./controllers_emp');
var routes_emp = require('./routes_emp');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(helmet());

routes_account(app);
routes_user(app);
routes_emp(app);

app.listen(port);
console.log('server started om port '+port+'...');