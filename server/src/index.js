import { createApp } from './app.js';
import { env } from './config/env.js';
import { initializeDatabase } from './db/schema.js';

initializeDatabase();

const app = createApp();

app.listen(env.port, () => {
  console.log(`API server running on http://127.0.0.1:${env.port}`);
});
