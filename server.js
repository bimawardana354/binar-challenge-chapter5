const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./controllers')(app);

app.listen(port, () => {
  console.log('Server is running on port', port);
});
