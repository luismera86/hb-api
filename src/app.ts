import 'dotenv/config';

import connectDB from './config/mongoDB';
import cors from 'cors';
import express from 'express';
import { routes } from './routes/index.routes';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', routes);

connectDB();

app.listen(PORT, () => {
  console.log(`Connection in port ${PORT}`);
});
