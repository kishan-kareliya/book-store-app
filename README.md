# Book Store App

This is a basic Book Store application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to perform CRUD operations: create, read, update, and delete books.

## Features

- Add new books
- Edit existing books
- View all books in a table
- Delete books

## Tech Stack

- **Frontend:** React.js, Tailwindcss
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/kishan-kareliya/book-store-app.git
    cd book-store-app
    ```

2. Install dependencies for both the backend and frontend:

    ```bash
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```

3. Set up your MongoDB database:

    - Ensure MongoDB is running.
    - add your MongoDB connection string `config.js` file in the `backend` directory:


    ```plaintext
    mongoDbUrl = your_mongodb_connection_string
    ```

4. Start the backend server:

    ```bash
    cd backend
    npm run dev
    ```

5. Start the frontend development server:

    ```bash
    cd ../frontend
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:5555/`.

## Project Structure

```plaintext
book-store-app/
├── backend/
│   ├── config.js
|   ├── index.js
│   ├── models/
│   ├── routes/
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md
