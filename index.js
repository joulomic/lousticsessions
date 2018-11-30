    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    const verifyWebhook = require('./verify-webhook');
var port = process.env.PORT || 3000;

    app.get('/', verifyWebhook);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(port, () => {
       console.log("App is running on port " + port);
    });
