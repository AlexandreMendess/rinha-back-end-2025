const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

let dbConnection;

export function handleDbConnection() {
  dbConnection = mysql.createConnection(dbConfig);

  dbConnection.connect(function(err) {
    if (err) {
      console.error('Error connecting to database:', err);
      // Wait 2 seconds before trying to reconnect
      setTimeout(handleDbConnection, 2000);
      return;
    }
    console.log('Successfully connected to the database!');
  });

  dbConnection.on('error', function(err) {
    console.error('Database connection error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDbConnection(); // Reconnect
    } else {
      throw err;
    }
  });
}