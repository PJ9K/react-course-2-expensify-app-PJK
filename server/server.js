// express with node
// not something that is running through weback or browser
// making a development production server

const path = require('path')
const express = require('express')
const app = express()                 // create express application
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000 // for heroku, if it doesn't exist use 3000

app.use(express.static(publicPath)) // use this directory to serve up static assets
// serve up all assets from directory public

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})
// if what the person requested isn't in the public folder give them back index.html

app.listen(port, () => {
  console.log('Server is up!')
})
// start on port 3000



// start in terminal with; node server/server.js

