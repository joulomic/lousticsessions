    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    const verifyWebhook = require('./verify-webhook');

    app.get('/', verifyWebhook);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(process.env.PORT || 3000);
