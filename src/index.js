const express = require('express'); //import ExpressJS
const path = require('path');
const morgan = require('morgan');
const sass = require('sass');
const handlebars = require('express-handlebars');


const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db/index');

//Connect to DB
db.connect();

//Morgan
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')))

//Template Engine (Handlebars)
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Sass
const result = sass.compile(path.join(__dirname, 'resources/scss/app.scss'));
console.log(result.css);

route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
