import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './api/routes/authRoutes.js';
import userRoutes from './api/routes/userRoutes.js';
import swaggerSpec from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
app.use(express.json());

// middlewares 
app.disable('x-powered-by');


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const port = process.env.TOKEN_SERVER_PORT || 3000;

// SWAGGER CONFIGURATION
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Authorization Server running on port http://localhost:${port}/`);
});
