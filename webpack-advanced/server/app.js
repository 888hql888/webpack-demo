const express = require('express')
const app = express()
// const cors = require('cors')
// app.use(cors())
app.get('/api/getUserInfo', (req, res) => {
  res.send({
    name: '黑马儿5555555',
    age: 13
  })
});

app.listen(9999, () => {
  console.log('http://localhost:9999');
});