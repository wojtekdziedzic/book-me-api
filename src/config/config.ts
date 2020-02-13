import DB from './database';
import * as path from 'path';

// const {
//   PROCESS_PORT,
//   NODE_ENV,
// } = process.env;

export default {
  PROCESS_PORT: process.env.PROCESS_PORT || 3030,
  ENTITIES_FOLDER_PATH: '/src/**/*.entity{.ts,.js}',
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB: DB[process.env.NODE_ENV] || DB.development,
};
