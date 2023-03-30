import express from 'express'
import path from 'path'
import ejs from 'ejs'
import checkDomain from './services.js/checkDomain.js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// app.get('/', (req, res) => {
//     if(req.headers.host === ''){
//       res.render('index');
//         }
//   });

const formatDomain = (domain) => {
    if (domain.includes('www.')) {
        const remakeDomain = domain.replace('www.', '')
        return remakeDomain.toLowerCase()
    }
}
app.get('/', async (req, res) => {
    console.log(req.headers.host)
    let domain
    let ipAddress
    if (req.headers.host === 'localhost:3001') {
        domain = 'www.hexdecode.com'
        ipAddress = '123.123.123.123'
    } else {
        domain = req.headers.host
        ipAddress = req.headers['X-Real-IP']
    }
    domain = formatDomain(domain)
    const domainData = await checkDomain(domain, ipAddress)
    // const domainData = {
    //     slug: 'hexdecode.com',
    //     url: { base: 'hexdecode', extension: 'com' },
    //     bin: { isActive: true, price: 250 },
    //     offers: { isActive: true, minimum: 25, offerCount: 0, highestOffer: 0 },
    //     analytics: { allTimeViews: 31, AllTimeUnique: 3 },
    //     advertising: { isActive: true },
    // }
    console.log(domainData)
    if (domainData) {
        res.render('index.ejs', { ...domainData })
    }
})

export default app
