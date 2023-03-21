import app from './src/app.js'

//server setup
const port = process.env.PORT || 3001

app.listen(port)
console.log('Server listening on:', port)
