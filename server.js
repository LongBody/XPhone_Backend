require('./mongoose-connect')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routers')
var cors = require('cors');
const { Console } = require('console');
const cookieSession = require('cookie-session')

const app = express()
const port = 8888
var http = require('http').createServer(app);
app.use(cors());
// const router = require('./routers')

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.use(router)

app.get('/', (req, res) => res.send("Hello"))

app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack
    res.status(400).json({ message, stack })
})


app.use(function (req, res, next) {
    var allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:3000', 'http://localhost:3000/shopsale#/shopsale/sign-in',
        'https://shopsale.herokuapp.com/', 'https://shopsale.herokuapp.com/google/callback'
    ];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});



const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}


// Example protected and unprotected routes

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

http.listen(process.env.PORT || port, '0.0.0.0', () => {
    console.log('listening on *:' + port);
});