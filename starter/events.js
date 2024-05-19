const EventEmmiter = require("events");
const http = require("http");
const url = require('url');
class Sales extends EventEmmiter {
  constructor(){
    super();
  }
};

const myEmmiter = new Sales;

myEmmiter.on('newSale',()=>{
  console.log('There was a new sale!');
});
myEmmiter.on('newSale',()=>{
  console.log('Customer name: Jack');
});
myEmmiter.on('newSale',stock =>{
  console.log(`There are now ${stock} items left in stock.`);
});
myEmmiter.emit('newSale',9);
////////////////////////////////////////////////////////////////////////
//SERVER

const server = http.createServer();
server.on('request',(req,res)=>{
  console.log(req.url);
  res.end('Server was requested');
});

server.on('request',(req,res)=>{
  console.log('Server second request');
});

server.listen(8000,'127.0.0.1',(err)=>{
  console.log('Server on port 8000 ready for a request...');
});