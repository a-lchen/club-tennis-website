const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use('/static', express.static('public'));

app.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'src/views' });
});

app.get('/members', function(req, res, next) {
  res.sendFile('members.html', { root: 'src/views' });
});

app.get('/about', function(req, res, next) {
  res.sendFile('about.html', { root: 'src/views' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
