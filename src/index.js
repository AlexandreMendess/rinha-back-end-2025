const express = require('express');
const mysql = require('mysql2');
const { handleDbConnection } = require('./database/database');

const app = express();
const port = 3000;

// Start the connection
handleDbConnection();

app.get('/', (req, res) => {
  res.send('Node.js app is running!');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});