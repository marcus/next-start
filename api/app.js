import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from '../models';
//const db = {};
//import middleware from './middleware';
import config from '../conf/default';
import session from 'express-session';
import next from 'next';
import user from './user';

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dir: '.', dev, quiet: false })
const handle = nextApp.getRequestHandler()

nextApp.prepare()
  .then(() => {
    let app = express();
    app.server = http.createServer(app);

    app.use(cors({
      exposedHeaders: config.corsHeaders
    }));

    app.use(bodyParser.json({
      limit : config.bodyLimit
    }));

    // internal middleware
    //app.use(middleware({ config, db  }));

    // api router
    user(app, config, db); //This is the extra line

    app.get('*', (req, res) => handle(req, res))

    app.server.listen(process.env.PORT || config.port);

    console.log(`Started on port ${app.server.address().port}`);
  })
  .catch(err => {
    console.log(err.stack);
  });

export default nextApp;
