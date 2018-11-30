const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`started server at http://localhost:${PORT}`);
});
