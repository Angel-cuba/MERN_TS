import express from 'express';
import keys from './keytoserver/key';
const app = express();

app.set('port', keys.PORT);

export default app;
