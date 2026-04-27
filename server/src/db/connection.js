import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { env } from '../config/env.js';

mkdirSync(dirname(env.databasePath), { recursive: true });

export const db = new DatabaseSync(env.databasePath);
