import express from 'express';
import handler from './handlers';

const app = express();

app.use(handler);
app.use('/index', handler);

app.listen(3000, () => console.log('Listening 3000'));