# Backend CRUD API

A REST API built using Node.js, Express.js, and MongoDB to manage products and posts, with user registration, login, and JWT-based authentication.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Express
- JSON Web Token (JWT)
- bcrypt
- Postman
- Git and GitHub

## Features

### Product Management
- Create a new product
- Retrieve all products
- Retrieve a product by ID
- Update product details
- Delete a product
- Store product data in MongoDB

### User Authentication
- Register a new user
- Login with email and password
- Secure password hashing using bcrypt
- JWT-based authentication
- Protect routes using authentication middleware

### Post Management
- Create a new post (authentication required)
- Retrieve all posts
- Retrieve a post by ID
- Update your own posts
- Delete your own posts
- Display post author details

## Project Structure

```text
backend-crud-assignment/
├── src/
│   ├── controllers/
│   │   ├── product.controller.js
│   │   ├── user.controller.js
│   │   └── post.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── product.model.js
│   │   ├── user.model.js
│   │   └── post.model.js
│   ├── routes/
│   │   ├── product.routes.js
│   │   ├── user.routes.js
│   │   └── post.routes.js
│   ├── app.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/divyanshi2109/backend-crud-assignment.git
```

### 2. Open the project folder

```bash
cd backend-crud-assignment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your own MongoDB Atlas connection string and a secure JWT secret.

**Important:** Never upload or share your actual `.env` file.

### 5. Start the server

For development:

```bash
npm run dev
```

The server runs on port `5000` after successfully connecting to MongoDB.

## API Endpoints

Base URL: `http://localhost:5000`

### Products

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/products` | Create a product |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### User Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login an existing user |

### Posts

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/posts` | Create a post (authentication required) |
| GET | `/api/posts` | Retrieve all posts |
| GET | `/api/posts/:id` | Retrieve a post by ID |
| PUT | `/api/posts/:id` | Update your own post (authentication required) |
| DELETE | `/api/posts/:id` | Delete your own post (authentication required) |

## Authentication

Protected routes require a JWT token.

After successfully logging in, copy the token from the response and add it to the Authorization section in Postman.

Use:

```text
Bearer YOUR_JWT_TOKEN
```

## Sample Product

```json
{
  "name": "Laptop",
  "price": 50000,
  "description": "My first product"
}
```

## Sample Post

```json
{
  "title": "My First Post",
  "content": "This is my first post using the Backend CRUD API."
}
```

## Testing

The API endpoints were tested using Postman, including:

- Product CRUD operations
- User registration and login
- Password validation
- JWT authentication
- Protected post creation
- Post retrieval, updating, and deletion
- Authorization checks for post ownership

## Author

Divyanshi Verma
