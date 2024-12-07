const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
const express = require('express');
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
    });
    app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
    });
    app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
    });
    app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
    });