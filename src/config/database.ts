let DB: {
  [x: string]: any;
  development?: {
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    DATABASE_SYNCHRONIZE: boolean;
  };
  production?: {
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    DATABASE_SYNCHRONIZE: boolean;
  };
};
export default DB = {
  development: {
    DATABASE_HOST: 'localhost',
    DATABASE_PORT: 3306,
    DATABASE_USERNAME: 'book-me',
    DATABASE_PASSWORD: 'book-me',
    DATABASE_NAME: 'book-me',
    DATABASE_SYNCHRONIZE: true,
  },
  production: {
    DATABASE_HOST: 'localhost',
    DATABASE_PORT: 3306,
    DATABASE_USERNAME: 'book-me',
    DATABASE_PASSWORD: 'book-me',
    DATABASE_NAME: 'book-me',
    DATABASE_SYNCHRONIZE: true,
  },
};
