let http = require('http')
let express = require('express')

let app = express()

app.use(express.static(__dirname + '/public'))
app.use('/lab2', express.static(__dirname + '/lab2'))

let server = http.createServer(app)

server.listen(80)

console.log("Servidor rodando...")
