// app.ts

import express from 'express';
import routes from './routes/authRoutes';
import dotenv from 'dotenv';
dotenv.config();
import dbconnection from './config/dbConfig'


const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Database connection
dbconnection();

// Mount the routes at a specific path
app.use('/api/users', routes);

// Start the server
const port : number = process.env.PORT as unknown as number ||3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
