var http = require('http');
import controller from './controllers/getCharById'

http.createServer((req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        const id= req.url.split('/').pop();
        
        controller(res, id)
    } else {
         return res
            .writeHead(404, {'Content-Type': 'application/json'})
            .end(JSON.stringify({message: 'Wrong url'}))
    }
   
}).listen(3001, '127.0.0.1')