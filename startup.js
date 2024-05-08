const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const banco = require('./repository/database');
const session = require("express-session");
const crypto = require("crypto");
const consign = require("consign");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views','mvc/views/ctrldev')
app.use(express.static('mvc/views/public'))
consign()
.include("mvc/controllers")
.into(app)
app.listen(3000, () => console.log("Online Server at port 3000"))
module.exports = app