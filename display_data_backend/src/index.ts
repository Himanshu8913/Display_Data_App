import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler';
import bookRoutes from './routes/bookRoutes';
import cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.use('/api/v1/books', bookRoutes)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});