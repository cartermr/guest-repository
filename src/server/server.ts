import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '.env') });

import express, { Express } from 'express';

const server: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

server.use(express.json());
server.use(express.static(path.join(__dirname, 'client')));

server.listen(PORT, () => {
  console.log(`Guest Registry Server is running on port ${PORT}`);
});