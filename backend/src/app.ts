import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import keys from './keytoserver/key';
import videoRouter from './routers/videos.routes';

const app = express();

app.set('port', keys.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(videoRouter);

export default app;
