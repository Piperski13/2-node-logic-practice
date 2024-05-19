const fs = require('fs');
const server = require('http').createServer();

//Solution 1

// server.on('request',(req,res)=>{
//  fs.readFile('./test-file.txt','utf-8',(err,data)=>{
//   if(err) console.log(err);
//     res.end(data);
//  });
// });

//Solution 2

// server.on('request',(req,res)=>{
//   const readable = fs.createReadStream('test-file.txt');
//   readable.on('data',chunk=>{
//     res.write(chunk);
//   });
//   readable.on('end',()=>{
//     res.end();
//   });
//   readable.on('error',err=>{
//     console.log(err);
//     res.statusCode = (500);
//     res.end('File not found');
//   })
// });

//Solution 3 

server.on('request',(req,res)=>{
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
});

server.listen(8000,'127.0.0.1',(err)=>{
  if(err) console.log(err);
  console.log('Port 8000 waiting for a request...');
})