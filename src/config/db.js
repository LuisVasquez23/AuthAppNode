import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = await open({
    filename: './authApp.sqlite',
    driver: sqlite3.Database
});

export default db;
