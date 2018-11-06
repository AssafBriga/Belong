import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
var routes = require('./routes')




app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);




app.listen(4000, ()=>console.log('server is running on port 4000'));