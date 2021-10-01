const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to our homepage')
        res.end()
    }
    if(req.url === '/about'){
        res.end('Here is about')
    }
    res.end('saad')
})

server.listen(5000)
