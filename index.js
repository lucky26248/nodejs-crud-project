const express = require('express'), //Express Framework import
 app = express(); // Create Express Application using app we create routes,middleware,and start serever.
 bodyparser = require('body-parser');

const db = require('./db'); //Database connection import kar rahe ho.Ye db.js file execute karega.

const employeeRoutes = require('./controllers/employee.controller'); //Employee ke saare routes import kar rahe ho.

// Middleware : JSON request ko JavaScript object banana.
app.use(bodyparser.json())
app.use(express.json()); // hr request k liye chalega

app.use('/api/employees', employeeRoutes);

//Logging error Middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send('Something went wrong!');
});

// First make sure DB connection is successful
db.query('SELECT 1')
    .then(() => {
        console.log('DB connection succeeded.');
        app.listen(3000, () => {
            console.log('Server started at port 3000');
        });
    })
    .catch(err => {
        console.log('DB connection failed.\n', err);
    });

// node app.js

//         │
//         ▼

// Express Application Create

//         │
//         ▼

// Middleware Register

//         │
//         ▼

// Routes Register

//         │
//         ▼

// Database Connect

//         │
//         ▼

// Server Start

//         │
//         ▼

// Ready to Accept Requests