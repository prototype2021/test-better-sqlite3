const db = require('better-sqlite3')('foobar.sqlite.db');
db.pragma('journal_mode = WAL');

const stmt = db.prepare(`
  SELECT * FROM dict 
  WHERE word LIKE :prefix || '%'
`);

const words = stmt.all({prefix: 'te'});

console.log(words);