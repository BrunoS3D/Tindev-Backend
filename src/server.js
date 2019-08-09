const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('srv://<name>:<password>@cluster0-culqu.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 5000);