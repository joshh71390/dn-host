const incomingTraffic = async (req, res, next) => {
    // Get the hostname from the request
    const hostname = req.headers.host

    // Check if hostname is in first db
    // You'll need to replace this with your own database query logic
    db1.find(hostname, (err, result) => {
        if (err) {
            // Handle error
        } else if (!result) {
            // Hostname not found in first db
            res.render('not_found', { hostname })
        } else {
            // Hostname found in first db, query second server
            // You'll need to replace this with your own logic for querying the second server
            const endpoint = `getDomainInfo/${hostname}`
            secondServer.get(endpoint, (err, result) => {
                if (err) {
                    // Handle error
                } else {
                    // Render landing page with the result from the second server
                    res.render('landing_page', result)
                }
            })
        }
    })
}

export default incomingTraffic
