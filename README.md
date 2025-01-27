# Blog Application

This repository contains a full-stack blog application, featuring a frontend client and a backend API.

## Project Structure

- **api/**: Contains the backend API built with Node.js and Express, utilizing PostgreSQL for data storage.
- **client/**: Contains the frontend application built with JavaScript, SCSS, and HTML.

## Features

- **Frontend**:
  - Responsive user interface for creating, editing, and viewing blog posts.
  - Dynamic styling using SCSS.

- **Backend**:
  - API endpoints to handle CRUD operations for blog posts.
  - Integration with PostgreSQL database.

## Prerequisites
- Node.js and npm installed on your system.
- PostgreSQL installed and running.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/tarang5757/blog.git
   cd blog
  ```

## Setup Backend

```bash
cd api
npm install
```

# Configure the Database Connection
- Ensure PostgreSQL is running on your local machine.
 - Create a database named blog-db (or update the configuration to match your database name).
 - Update the db.js file with your PostgreSQL credentials:

```Python
import pkg from 'pg';
const { Client } = pkg;

const db = new Client({
  host: 'localhost',
  port: 5432,
  user: 'your_username',
  password: 'your_password',
  database: 'blog-db',
});

db.connect()
  .then(() => console.log('Connected to blog-db on PostgreSQL'))
  .catch((err) => console.error('Connection error', err.stack));

export default db;
```

Note: Replace 'your_username' and 'your_password' with your actual PostgreSQL username and password.

# Start the Backend Server
```bash
npm start
```

# Setup Frontend
```bash
cd ../client
npm install
```

```Bash
npm start
```

# Usage
Access the Application
Navigate to http://localhost:3001 in your browser to interact with the frontend.

#API Endpoints
The backend API provides the following endpoints:

- GET /posts: Retrieve all blog posts.
- GET /posts/:id: Retrieve a specific blog post by ID.
- POST /posts: Create a new blog post.
- PUT /posts/:id: Update an existing blog post by ID.
- DELETE /posts/:id: Delete a blog post by ID.






