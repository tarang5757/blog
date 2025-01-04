import pkg from "pg";

const { Client } = pkg;

// Create a new client instance
const db = new Client({
  host: "localhost", // PostgreSQL server host
  port: 5432, // PostgreSQL default port
  user: "postgres", // PostgreSQL username (the user you're using to authenticate)
  password: "5555", // PostgreSQL user password
  database: "blog-db", // Name of the database you're connecting to
});

// Connect to the PostgreSQL database
db.connect()
  .then(() => console.log("Connected to blog-db on PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

// Export the db connection for use in other parts of your app
export default db;
