const express = require('express');

const routeNotFoundHandler = require('./middleware/routeNotFoundHandler');
const errorHandler = require('./middleware/errorHandler');

const logger = require('./utils/logger');
const config = require('./config');


const mainRoute = require('./routes/mainRoute');


const app = express();


app.use('/', mainRoute);
app.use(errorHandler);
app.use(routeNotFoundHandler);

app.listen(config.PORT, () => logger.log(`Listening on port ${config.PORT}`));