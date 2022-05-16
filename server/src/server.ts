import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const App = express();

App.get('/users', (req, res) => res.send('Hellow World'));

App.listen(5000, () => {
  console.log('Server is Running');
});
