const path = require('path');
const express = require('express');
const morgan = require('morgan');
const sass = require('sass');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//Morgan
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')))

//Template Engine (Handlebars)
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');  
app.set('views', path.join(__dirname, 'resources/views'));

//Sass
const result = sass.compile(path.join(__dirname, 'resources/scss/app.scss'));
console.log(result.css);


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
