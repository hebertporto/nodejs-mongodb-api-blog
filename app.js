import bodyParser from 'body-parser';
import express from 'express';



const app = express();
app.config();

app.set('port', 3000);

app.use(bodyParser.json());


export default app;
