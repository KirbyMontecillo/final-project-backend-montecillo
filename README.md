# Full-Stack Authentication System - Node.js API

This is the backend API for the Full-Stack Authentication System, developed with Node.js, Express, and MySQL. It provides services for user registration, JWT-based authentication, role-based access control (RBAC), and email verification.

## Live API URL
[ INSERT YOUR RENDER URL HERE ]

---

## Features
- JWT Authentication: Secure login utilizing JSON Web Tokens.
- Refresh Tokens: Persistent sessions handled through secure HTTP-only cookies.
- Email Verification: Automated verification emails via SMTP.
- Role-Based Access Control: Specialized access for Admin and User roles.
- Database Synchronization: Automatic table creation via Sequelize ORM.
- API Documentation: Swagger UI available at the /api-docs route.

---

## Technology Stack
- Runtime: Node.js
- Framework: Express.js
- Database: MySQL
- ORM: Sequelize
- Documentation: Swagger / OpenAPI 3.0
- Security: Bcrypt.js, Express-JWT, Joi Validation

---

## Local Setup

1. Install Dependencies:
   ```bash
   npm install
   ```

2. Configure Environment:
   Create a .env file in the root directory with the following variables:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=final_project_db
   JWT_SECRET=your_secret_key
   CORS_ORIGIN=http://localhost:4200
   ```

3. Database Setup:
   - Ensure your MySQL server is running.
   - Create the database: CREATE DATABASE final_project_db;

4. Run the Server:
   ```bash
   npm start
   ```
   The server will be accessible at http://localhost:4000.

---

## API Documentation
Once the server is initialized, documentation can be viewed at:
http://localhost:4000/api-docs

---

## Security and Audit Information
- Environment Variables: Sensitive data is managed through .env files and is not committed to version control.
- CORS Policy: Access is restricted to the specific frontend origin.
- Password Security: Hashing is performed using Bcrypt.
