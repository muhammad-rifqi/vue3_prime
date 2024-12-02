require('dotenv').config();
const express = require('express');
const apps = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT;
const cookieParser = require("cookie-parser");
const db = require('./db/query');

apps.use(cookieParser());
apps.use(bodyParser.json())
apps.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
apps.use(cors());

//::::::::::::::: Api & Query DB AUTH ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

apps.get('/api_user', db.user);

apps.post('/api_update_user/:id', db.update_user);

apps.get('/api_delete_user/:id', db.delete_user);

apps.get('/api_transaction', db.transaction);

apps.get('/api_delete_transaction/:id', db.transaction_delete);

apps.post('/api_insert_transaction', db.transaction_insert);

//------------------------------------------------

apps.post('/api_approve1', db.approve1);

apps.post('/api_rejected1', db.rejected1);

//------------------------------------------------

apps.post('/api_approve2', db.approve2);

apps.post('/api_rejected2', db.rejected2);

//------------------------------------------------

apps.post('/api_approve3', db.approve3);

apps.post('/api_rejected3', db.rejected3);

//------------------------------------------------ 

apps.post('/api_approve4', db.approve4);

apps.post('/api_rejected4', db.rejected4);

//------------------------------------------------

apps.post('/act_login', db.do_login);

apps.listen(port);