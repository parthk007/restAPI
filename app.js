const express = require('express');
//import bodyParser from 'body-parser';
const users = require('./routes/users')
const app= express();
app.use(express.json());
app.use('/users', users);

app.listen(8808, () => {
	console.log('Server up at 8808')
});