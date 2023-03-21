import axios from 'axios'

const backend = axios.create({
    baseURL: 'http://localhost:3000',
})

async function checkDomain(url, ip) {
    try {
        const response = await backend.get(`/${url}/${ip}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default checkDomain
