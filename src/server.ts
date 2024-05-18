// Importing module
import { ProcessEnvOptions } from 'child_process';
import express from 'express';
const db = require("./config/dbConnect");
const app = express();
const PORT = process.env.PORT || 8001;

// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})
db()
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})
