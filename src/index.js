const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
require('./models/Projects');

const app = express();
const port = 3000;

// Create connection to database
sequelize
  .sync() //Use sync for create tables in database
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.log(error));

// async function connection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// connection();

app.use(express.static('public'));

//Enable Pug (Template Engine)
app.set('view engine', 'pug');

//Add views folder
app.set('views', path.join(__dirname, './views'));

//Enable bodyParser to read form data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`UpTaskApp listening on port ${port}`);
});
