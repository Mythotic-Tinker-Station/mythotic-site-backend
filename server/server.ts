import express, { json } from 'express';
import cors from 'cors';
import apiRouter from './routes';

const app = express();
app.use(json());
app.use(cors());
app.use(apiRouter);

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));