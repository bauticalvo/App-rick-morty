var http = require('http');
var data = require('./utils/data.js')

http.createServer((req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        var Path = req.url.shift('/').pop();
    
        const character = data.find(objeto => objeto.id === Number(Path))
        
        if(character){
            return res
            .writeHead(200, {'Content-Type': 'application/json'})            
            .end(JSON.stringify(character))
        } else {
           return res
            .writeHead(404, {'Content-Type': 'application/json'})
            .end(JSON.stringify({message: 'Character not found'}))
        }
    }
    return res
            .writeHead(404, {'Content-Type': 'application/json'})
            .end(JSON.stringify({message: 'Wrong url'}))
}).listen(3001, '127.0.0.1')