const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.send('cya bitch')
})

app.listen(3000, () => console.log('server is running on port 3000...'))
