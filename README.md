# Backend CRUD API

A simple REST API built using Node.js, Express.js, and MongoDB to perform CRUD (Create, Read, Update, and Delete) operations on products.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- Git and GitHub

## Features

- Create a new product
- Retrieve all products
- Retrieve a product by ID
- Update product details
- Delete a product
- Store product data in MongoDB
- Automatically maintain creation and update timestamps

## Project Structure

```text
backend-crud-assignment/
├── src/
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.routes.js
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
```

Replace `your_mongodb_connection_string` with your own MongoDB Atlas connection string. Never share or upload your actual `.env` file.

### 5. Start the server

For development:

```bash
npm run dev
```

The server runs on port `5000` after successfully connecting to MongoDB.

## API Endpoints

Base URL: `http://localhost:5000/api/products`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/products` | Create a product |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## Sample Product

```json
{
  "name": "Laptop",
  "price": 50000,
  "description": "My first product"
}
```

Send this JSON in the request body when creating a product using Postman. Use **Body → raw → JSON**.

## Testing

All CRUD operations were tested using Postman.

## Author

Divyanshi Verma
