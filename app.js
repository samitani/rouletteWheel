const express = require('express');
const app = express();

app.use(express.static(__dirname + '/statics'));

app.listen(80, () => console.log('Listening...'));
