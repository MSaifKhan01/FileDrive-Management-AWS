# Project Name

FileDrive-Management


**Frontend**: [FileDrive-Management App](https://filedrive2.netlify.app/)  
**Backend**: [FileDrive-Management API](https://filedrive-management.onrender.com)



**Note:** The frontend is deployed on AWS EC2, and AWS S3 is utilized as a storage bucket for documents. The EC2 instance's deployment link is not provided due to fear of billing; however, the frontend is accessible through the provided Netlify link: [Frontend Deployed Link](https://filedrive-management.netlify.app/).


## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Backend](#backend)

  - [Dependencies](#dependencies)
  - [Setting Up](#setting-up)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
- [Frontend](#frontend)

  - [Dependencies](#dependencies-frontend)
  - [Setting Up](#setting-up-frontend)
  - [Components](#components)
- [Security Considerations](#security-considerations)

- [Proprietary License](#Proprietary License)

## Introduction

Welcome to File Drive – a cutting-edge file management platform designed for secure and collaborative document control. Seamlessly upload, share, and organize files, enhancing productivity and ensuring efficient team workflows.

## Technologies

- Node.js
- Express.js
- React
- MongoDB
- Amazon S3

## Backend

### Dependencies

List of dependencies used for this backend.

- Express.js
- Multer
- aws-sdk
- Mongoose
- Bcrypt
- Jsonwebtoken
- cors

### Setting Up

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure environment variables in a `.env` file.
4. Run the server using `npm run server`.

### API Endpoints

- **POST /user/register**: Register a new user.
- **POST /user/login**: Log in a user.
- **POST /file/upload**: Upload a file to S3 and save metadata to MongoDB. (Authenticated)
- **GET /file/files**: Retrieve all files ( Admin Access && Authenticated).
- **GET /file/files/:userId**: Retrieve files for a specific user. (Authenticated)
- **DELETE /file/delete/:filename**: Delete a file from S3 and MongoDB. (Authenticated)

### Authentication

- User registration with hashed passwords using bcrypt.
- User login with JWT token generation.

### Authorization

- Role-based access control (admin, user).
- Middleware (`RoleBase`) to check user roles for specific routes.

## Frontend

### Dependencies (frontend)

List of dependencies used for this frontend.

- React
- React Router
- SweetAlert2


### Setting Up (frontend)

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.

### Components

Briefly describe key components and their functionalities.

- **Login**: User login page.
- **Register**: User registration page.
- **FileUpload**: File upload and management page.
- **Navbar**: Navigation bar component.

#### Conditional Rendering

- **Authentication Check**: Utilizes conditional rendering to determine whether a user is authenticated.
- **Dynamic Component Display**: Adjusts component rendering based on user authentication status for a seamless user experience.

## Security Considerations

- Password hashing using bcrypt.
- JWT for authentication.





## Proprietary License

Unauthorized copying, reproduction, or distribution of the Software is strictly prohibited.


