import express from 'express';

const dotenv = require("dotenv");
const app = express();
const cors = require("cors");


const db = require("./config/dbConnect");
const course = require("./Routes/courses.routes");
const lesson = require("./Routes/lessons.routes");
const content = require("./Routes/content.routes")

//dotenv config
dotenv.config();
const PORT = process.env.PORT || 8001;

//Database Connections
db();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Api's endpoints
app.use("/v1/api/course", course);
app.use("/v1/api/lesson", lesson);
app.use("/v1/api/content", content);


app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})

// Server setup
app.listen(PORT, () => {
    console.log('The application is listening ' + 'on port http://localhost:' + PORT);
})
