import express from 'express';
const dotenv = require("dotenv");
const db = require("./config/dbConnect");
const app = express();
const PORT = process.env.PORT||8001;
dotenv.config();

db()
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})

// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})
