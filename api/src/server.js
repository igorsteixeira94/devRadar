import http from 'http';
import app from './app';
import { setupWebsocket } from './websocket';

const server = http.Server(app);

setupWebsocket(server);

server.listen(process.env.PORT || 3333, process.env.HOST, () => {
  console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
});
