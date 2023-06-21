const express = require('express');
const cors = require('cors');
const route = require('./src/routes/rotas');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(route);





app.listen(port, () => console.log("Server listening on port:", port))