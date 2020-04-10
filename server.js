const express = require("express");
const server = express();
const helmet = require('helmet');

//routers
const actionsRouter = require('./routers/actionRouter');
const projectsRouter = require('./routers/projectRouter');

//middleware
server.use(express.json());
server.use(helmet());

//router middleware
server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

//server message
server.get('/', (req, res) => {
    res.send(`<h2> Actions and Projects API Working!! </h2>`);
  });

module.exports = server;