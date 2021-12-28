const express = require('express');
const routerApi = require('./routes');
const cors = require('cors')

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.listen(port, () => {
  console.log("My port: " + port);
});

routerApi(app);
