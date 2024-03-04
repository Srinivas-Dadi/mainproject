import express from 'express';
import authrouter from './routers/auth_routes.js';

const app = express();
app.use(express.json()); // Use only express.json() for parsing JSON bodies

const PORT = 80;

app.use('/api', authrouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});