import axios from 'axios'

const backend = axios.create({
    baseURL: 'http://dnlist.app.jsdeploy.com/',
})

async function checkDomain(url) {
   try {
       const response = await backend.get(`/${url}`)
       const domainData = response.data
   
       return domainData
    
   } catch (error) {
        console.log(error)
   }
}

export default checkDomain
