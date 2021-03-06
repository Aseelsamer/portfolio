'use strict';

//make a variable called express to use express library
const express = require('express');


//all methods of express 
const server = express();

//access any files inside the public
server.use(express.static('./public'));

const PORT = process.env.PORT || 3000;

server.get('/test',(request,response)=>{
    console.log('test route');
    response.send('your test route is working');
})

server.get('/',(request,response)=>{
    response.send('this is the homepage');
})


server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})



