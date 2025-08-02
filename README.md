# Simple CRUD App

A RESTful API built with Node.js, Express.js, and MongoDB for managing products. This application provides full CRUD (Create, Read, Update, Delete) operations for product management.

## 🚀 Features

- **Create** new products
- **Read** all products or get a specific product by ID
- **Update** existing products
- **Delete** products
- MongoDB integration with Mongoose ODM
- RESTful API endpoints
- JSON request/response handling
- Error handling and validation

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **ODM**: Mongoose
- **Development**: Nodemon for auto-restart

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- MongoDB Atlas account or local MongoDB installation

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd simple-crud-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Update the MongoDB connection string in `index.js` with your own database credentials
   - Or create a `.env` file and use environment variables for better security

4. **Start the application**
   
   For development (with auto-restart):
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm run serve
   ```

The server will start on `http://localhost:3000`

## 📚 API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a specific product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product by ID |
| DELETE | `/api/products/:id` | Delete a product by ID |

### Product Schema

```json
{
  "name": "String (required)",
  "quantity": "Number (required, default: 0)",
  "price": "Number (required, default: 0)",
  "image": "String (optional)",
  "createdAt": "Date (auto-generated)",
  "updatedAt": "Date (auto-generated)"
}
```

## 🔍 API Usage Examples

### 1. Get All Products
```bash
GET /api/products
```

### 2. Get Product by ID
```bash
GET /api/products/60d5ecb74b24c72d8c8b4567
```

### 3. Create a New Product
```bash
POST /api/products
Content-Type: application/json

{
  "name": "iPhone 14",
  "quantity": 10,
  "price": 999.99,
  "image": "https://example.com/iphone14.jpg"
}
```

### 4. Update a Product
```bash
PUT /api/products/60d5ecb74b24c72d8c8b4567
Content-Type: application/json

{
  "name": "iPhone 14 Pro",
  "quantity": 5,
  "price": 1099.99
}
```

### 5. Delete a Product
```bash
DELETE /api/products/60d5ecb74b24c72d8c8b4567
```

## 📁 Project Structure

```
simple-crud-app/
├── controllers/
│   └── product.controller.js    # Product business logic
├── models/
│   └── product.model.js         # Product schema definition
├── routes/
│   └── product.route.js         # Product routes
├── node_modules/                # Dependencies
├── .env                         # Environment variables
├── .gitignore                   # Git ignore file
├── index.js                     # Main application file
├── package.json                 # Project configuration
├── package-lock.json            # Dependency lock file
└── README.md                    # Project documentation
```

## 🔒 Environment Variables

For security purposes, consider using environment variables for sensitive data:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
PORT=3000
```

Then update `index.js` to use:
```javascript
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "your-fallback-connection-string";
```

## 🧪 Testing the API

You can test the API using tools like:

- **Postman**: Import the endpoints and test each operation
- **cURL**: Use command-line requests
- **Thunder Client**: VS Code extension for API testing
- **Insomnia**: REST client for testing APIs

### Example cURL Commands

```bash
# Get all products
curl -X GET http://localhost:3000/api/products

# Create a product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","quantity":5,"price":29.99}'

# Update a product
curl -X PUT http://localhost:3000/api/products/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Product","quantity":10,"price":39.99}'

# Delete a product
curl -X DELETE http://localhost:3000/api/products/PRODUCT_ID
```

## 🚨 Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid request data
- **404 Not Found**: Product not found
- **500 Internal Server Error**: Server-side errors

Error responses follow this format:
```json
{
  "message": "Error description"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🔮 Future Enhancements

- [ ] Add authentication and authorization
- [ ] Implement data validation middleware
- [ ] Add unit and integration tests
- [ ] Implement pagination for product listing
- [ ] Add search and filtering capabilities
- [ ] Include API documentation with Swagger
- [ ] Add logging middleware
- [ ] Implement rate limiting
- [ ] Add image upload functionality
- [ ] Create a frontend interface

## 📞 Support

If you have any questions or need help with setup, please create an issue in the repository.

---

**Happy Coding! 🎉**