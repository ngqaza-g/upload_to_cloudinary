const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json({limit: '5mb'}));
app.use(express.static('public'));
app.use('/api', require('./routes/router'));



app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT ${PORT}`));