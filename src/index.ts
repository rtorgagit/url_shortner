import express, { Request, Response } from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';

const api = express();

api.use(express.json());

const database = new MongoConnection();
database.connect();

api.get('/test', (req: Request, res: Response) => {
  res.status(200).send({ message: 'OK' });
});

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);


api.listen(3000, () => {
  console.log('Server listining port 3000');
})