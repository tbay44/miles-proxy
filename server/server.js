const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(express.static(path.join(__dirname + "/../client")))
app.use(express.json());
app.use(cors());



app.listen(8081, () => {
  console.log('listening on port 8081')
})