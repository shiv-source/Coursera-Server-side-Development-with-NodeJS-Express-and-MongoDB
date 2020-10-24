const express = require("express"),
http = require("http");
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());




const dishRouter = require('./routes/dishRouter');

app.use('/dishes', dishRouter);

//routes handler for promotions
const promoRouter = require("./routes/promoRouter");
app.use("/", promoRouter);

//routes handler for leaders
const leaderRouter = require("./routes/leaderRouter");
app.use("/", leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
