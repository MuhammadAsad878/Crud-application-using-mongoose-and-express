# CRUD Application Setup

This application performs CRUD operations using **Express.js** as the backend server and **MongoDB** as the database.

## Prerequisites

### 1. Install MongoDB
- Download and install the **MongoDB Community Server** from the [official website](https://www.mongodb.com/try/download/community).
- Follow the installation instructions for your operating system.

### 2. Install Node.js
- Download and install **Node.js** from the [official Node.js website](https://nodejs.org/).
- This will also install **npm (Node Package Manager)**, which is required for managing dependencies.

### 3. Install Dependencies
- Open your terminal and navigate to the project directory.
- Run the following command to install all necessary dependencies:
  
  ```bash
  npm install
  ```

## Running the Application

### 1. Start the MongoDB Server
Ensure that your MongoDB server is running. You can start it using the following command:

```bash
mongod
```

### 2. Start the Express Server
In a separate terminal window (while keeping the MongoDB server running), navigate to your project directory and run:

```bash
npm start
```

This will start the **Express server**.

### 3. Access the Application
- Open your web browser and navigate to:
  
  ```http://localhost:3000/students

  ```
  
  (or the specified port in your configuration) to access the application index route.

## Additional Notes
- Ensure that you have the necessary permissions to run the MongoDB server and that it is configured correctly.
- If you encounter any issues during installation, refer to the official documentation for **[MongoDB](https://www.mongodb.com/docs/)** and **[Node.js](https://nodejs.org/en/docs/)** for troubleshooting.

---

Happy coding! 🚀

