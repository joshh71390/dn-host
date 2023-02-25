import express from 'express'
import path from 'path'
import ejs from 'ejs'
import checkDomain from './services.js/checkDomain.js'

import incomingTraffic from './incomingTraffic.js'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// app.get('/', (req, res) => {
//     if(req.headers.host === ''){
//       res.render('index');
//         }
//   });


const formatDomain = (domain) => {
    if (domain.includes('www.')) {
        domain = domain.replace('www.', '')
    }
    return domain.toLowerCase()
}
app.get('/', async (req, res) => {
    console.log(req.headers.host)
    let domain
    if (req.headers.host === 'localhost:3000') {
        domain = "www.DNLanding.com"
    }
    else {
    domain = req.headers.host
    }

    
    domain = formatDomain(domain)
    const domainData = await checkDomain(domain)

    console.log(domainData)

    res.render('index.ejs', {url: domainData.url, price: domainData.price})
})

export default app
