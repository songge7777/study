let express = require('express')

let app = express()

app.get('/user', function(req, res) {
  res.json({ code: 1, name: '123' })
})
app.listen(3000)