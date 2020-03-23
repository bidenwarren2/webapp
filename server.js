var express = require('express');
var app = express();

const port = 3000;

app.use(express.static('public'));
app.get('/asset/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Master listening on port ${port}!`))





