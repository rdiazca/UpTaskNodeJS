const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
const port = 3000;

//Enable Pug (Template Engine)
app.set('view engine', 'pug');

//Add views folder
app.set('views', path.join(__dirname, './views'));

app.use('/', routes);

app.listen(port, () => {
  console.log(`UpTaskApp listening on port ${port}`);
});
