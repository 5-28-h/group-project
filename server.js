// module imports
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors')

// express config
const app = express();
app.use(bodyParser.json())

// !!! DEVELOPMENT ONLY !!! //
// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200 
// }
  
// app.use(cors(corsOptions))


// !!! PRODUCTION ONLY !!! //
var distDir = __dirname + "/dist/group-project/";
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/group-project/"))
})

app.listen(process.env.PORT || 8080);