const express = require('express');
const { studentRouter } = require('./routes/students.router');
const app = express()

const port = 3000


app.use('/students', studentRouter)



// Not Found request
app.use((req, res) => {
    res.status(404).send('Страница не обнаружена!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})