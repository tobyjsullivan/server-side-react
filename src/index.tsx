import {runServer} from './server';

const port = 3000;

runServer(port)
  .then(() => {
    console.log(`Listening on port ${port}`);
  });
