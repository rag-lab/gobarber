import express from 'express';
import routes from './routes';

import './database'; // pega o arquivo index.js automaticamente

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // para receber req no formato json
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
