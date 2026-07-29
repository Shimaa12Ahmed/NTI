import http from 'node:http';
import { URL } from 'node:url';
const port=3000
let users=
[{
    id:1,
    firstName:"Shimaa",
    lastName:"Ahmed",
    role:"admin",
}]

const server=http.createServer((req,res)=>{
    let{method,url}=req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname=parsedUrl.pathname;
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
if (req.method === 'GET' && pathname === '/users') {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(users));
  } 
else if(req.method==='POST'&&pathname==='/users') {
    let body='';
    req.on('data',chunk=>{
    body += chunk.toString();
    })
   req.on('end', () => {
      try {
        const newUser = JSON.parse(body);
        newUser.id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
        users.push(newUser);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newUser));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }
  else if(method==="PUT"&& pathname.startsWith('/users/')) {
    const id = parseInt(pathname.split('/')[2]);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
  const updatedUser = JSON.parse(body);
        const index = users.findIndex(user => user.id === id);

        if (index === -1) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'User not found' }));
        } else {
          users[index] = { ...users[index], ...updatedUser };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(users[index]));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }
  else if(method==="PATCH"&& pathname.startsWith('/users/')) {
    const id = parseInt(pathname.split('/')[2]);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
  const updatedUser = JSON.parse(body);
        const index = users.findIndex(user => user.id === id);

        if (index === -1) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'User not found' }));
        } else {
          users[index] = { ...users[index], ...updatedUser };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(users[index]));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }
  else if (method === 'DELETE' && pathname.startsWith('/users/')) {
    const id = parseInt(pathname.split('/')[2]);
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'User not found' }));
    } else {
      todos = todos.filter(user => user.id !== id);
      res.writeHead(204);
      res.end();
    }
  }
 
 
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});