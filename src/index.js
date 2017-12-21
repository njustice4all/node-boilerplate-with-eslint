import express from 'express';

import middlewares from '../config/middlewares';
import constants from '../config/constants';

const app = express();

/**
 * use middlewares
 */
middlewares(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`server is running on port ${constants.PORT}`);
});
