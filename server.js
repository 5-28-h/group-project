// module imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const passport = require('passport');
const cors = require('cors')

require("./models/user");
require("./models/jentry");
require('./config/passport');
require('./config/database');

// express config
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

//connect to DB
mongoose.connect('mongodb://admin:password1@ds131329.mlab.com:31329/group-project')
.then(() => console.log('Database connected'))
.catch(err => console.log('Error Connecting to Database'));

// !!! DEVELOPMENT ONLY !!! //
// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions))


// !!! PRODUCTION ONLY !!! //
var distDir = __dirname + "/dist/group-project/";
app.use(express.static(distDir));

const users = require('./routes/users');
const jentries = require('./routes/jentry.routes');
app.use('/user', jentries);
app.use('/', users);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/group-project/"))
})

app.listen(process.env.PORT || 8080);
