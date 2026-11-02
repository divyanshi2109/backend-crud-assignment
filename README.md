# Backend CRUD Assignment

A REST API built using Node.js, Express.js, and MongoDB for managing products.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Features
- Create a product
- Retrieve all products
- Retrieve a product by ID
- Update a product
- Delete a product

## Project Structure

```text
backend-crud-assignment/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.routes.js
│   ├── app.js
│   └── index.js
├── postman/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/divyanshi2109/backend-crud-assignment.git
   ```

2. Open the project folder:

   ```bash
   cd backend-crud-assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file using `.env.example` as a guide. Add your own MongoDB connection string.

5. Start the development server:

   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/products` | Create a product |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

The API runs on `http://localhost:5000` if port 5000 is configured.

## Testing

Use Postman to send requests to the API and verify the responses.

## Author

Divyanshi Verma