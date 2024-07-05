const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
