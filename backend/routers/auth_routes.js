import express from 'express';
import { login } from '../controllers/auth_controllers.js'; // Use destructuring

const authrouter = express.Router();

authrouter.post('/login', login); // Remove unnecessary middleware

export default authrouter;

// Commented code remains the same
