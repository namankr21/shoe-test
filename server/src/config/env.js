export const env = {
  port: Number(process.env.PORT || 4000),
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173',
  databasePath: process.env.DATABASE_PATH || 'server/data/store.sqlite'
};
