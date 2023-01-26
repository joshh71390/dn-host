import express from 'express'
import path from 'path'
import ejs from 'ejs'

import incomingTraffic from './incomingTraffic.js'

const app = express()


app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// app.get('/', (req, res) => {
//     if(req.headers.host === ''){
//       res.render('index');
//         }
//   });

app.get('/', (req, res) => {
    console.log (req.headers.host)
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000')
})

export default app
