import React from 'react';
import express from 'express';
import path from 'path';

import {ROOT_NODE_ID} from './hydrationConstants';
import App from './App';
import { renderTemplate } from './template';

export function runServer(port: number) {
  return new Promise((resolve, rej) => {
    const app = express();

    app.use(express.static(path.resolve(__dirname, '../dist')));

    app.get('/', (req, res) => {
      const output = renderTemplate('My App', ROOT_NODE_ID, '/client.js', <App />);
      res.writeHead( 200, { 'Content-Type': 'text/html' } );
      res.end(output);
    });

    app.listen(port, resolve);
  });
}
