import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '.env') });

import express, { Express } from 'express';
import guestRegistryDB from './database/database';
import guestRoutes from './routes/guestRoutes';

guestRegistryDB.initializeDatabase();

const server: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

server.use(express.json());
server.use(express.static(path.join(__dirname, 'client')));

server.use('/api', guestRoutes);

server.listen(PORT, () => {
  console.log(`Guest Registry Server is running on port ${PORT}`);
});