var express = require('express')

var app = express()

app.use(express.static('./public'))

app.get('/', function(req, res){
    res.sendFile('/index.html', {root: './public'})
})

app.get('/tree', function(req, res){
    res.sendFile('/tree.html', {root: './public'})
})

app.get('/trashcan', function(req, res){
    res.sendFile('/trashcan.html', {root: './public'})
})

app.get('/fence', function(req, res){
    res.sendFile('/fence.html', {root: './public'})
})

app.get('/window', function(req, res){
    res.sendFile('/window.html', {root: './public'})
})

app.get('/main.css', function(req, res){
    res.sendFile('/main.css', {root: './public'})
})

app.get('/main.js', function(req, res){
    res.sendFile('/main.js', {root: './public'})
})







app.listen(8000)