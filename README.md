# AuthAppNode - Authentication and Authorization API

## Overview

This project is a RESTful API built with Node.js and Express, focused on authentication, authorization, and student management. It provides secure access to endpoints using JWT (JSON Web Tokens) and includes functionalities for managing student data.

## Features

- **Authentication**: Secure user authentication using JWT.
- **Authorization**: Role-based access control to protect resources.
- **Student Management**: CRUD operations for handling student data.
- **SQLite**: Lightweight database for storing user and student information.
- **Swagger**: Integrated Swagger UI for API documentation.
- **Nodemon**: Automatically restarts the server when code changes are detected.

## Setup and Running

1. **Clone the repository**:
    ```bash
    git clone https://github.com/LuisVasquez23/AuthAppNode.git
    cd AuthAppNode
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Initialize the database**:
    ```bash
    npm run init
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

5. **Explore the API**:
    The API can be tested using tools like Postman or through the built-in Swagger UI available at `http://localhost:3000/api-docs`.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
