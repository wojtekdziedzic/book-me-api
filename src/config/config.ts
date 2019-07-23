import DB from './database';
import * as path from 'path';

const PARENT_FOLDER = path.resolve(__dirname, '..');
const {
  PROCESS_PORT,
  NODE_ENV,
} = process.env;

export default {
  PROCESS_PORT: PROCESS_PORT || 3030,
  ENTITIES_FOLDER: PARENT_FOLDER + '/**/*.entity{.ts,.js}',
  DB: DB[NODE_ENV],
  NODE_ENV: NODE_ENV || 'development',
};
