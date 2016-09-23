// Dependencies
// =============================================================
var express = require('express');
var body-parser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Tells body-parser what type of content to receive
app.use(body-parser.json());
app.use(body-parser.urlencoded({ extended: true }));
app.use(body-parser.text());
app.use(body-parser({ type: 'application/vnd.api+json' }));