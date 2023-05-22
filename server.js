const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route handler for GET /data
// This will work however I think im not going to use it and go with reading just the 
// db.json instead directly from the public/ folder
server.get('/data', (req, res) => {
  // Read the data from db.json and send it as the response
  const data = router.db.getState();
  res.json(data);
});

const port = 4000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
