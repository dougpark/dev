const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response - new home.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));