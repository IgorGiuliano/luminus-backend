import express          from 'express';
import { router }       from './routes';
import { errorHandler } from './middleware/errorHandler';
import cors from 'cors';
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen((process.env.PORT || 80), () => {
    console.log("Server running on port "+(process.env.PORT || 80));
})