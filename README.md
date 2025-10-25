# Social Media API

This is a simple social media backend API built using Node.js, Express, and MongoDB. It includes user authentication, post creation, liking, commenting, and follow/unfollow features.

## Features

* User registration and login with JWT authentication
* Create a new post with caption and image
* Like or unlike a post
* Comment on a post
* Follow or unfollow other users

## Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JSON Web Token (JWT)
* dotenv

## Installation

1. Install dependencies
    npm install

2. Create a `.env` file and add the following environment variables

   - PORT=5000
   - MONGO_URI=mongodb+srv://arhamtab18:GkFPNN4YqLA02Q9k@cluster0.ymx6bvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   - JWT_SECRET=thisissecretkeyforjwt


3. Start the server
    - nodemon server.js
    - Server will run on: `http://     localhost:5000`


## API Endpoints

### Auth

- POST /api/auth/signup - Register new user
- POST /api/auth/login - Login and get JWT token

### Posts

- POST /api/posts - Create a new post (token required)
- GET /api/posts - Get all posts
- PUT /api/posts/like/:id - Like or Unlike a post (token required)
- POST /api/posts/comment/:id - Comment on a post (token required)

### Users

- PUT /api/users/follow/:id - Follow a user (token required)
- PUT /api/users/unfollow/:id - Unfollow a user (token required)

## How to Test

Use Postman to test all routes. You need to pass the JWT token in the headers for protected routes.

Header example:
    Authorization: Bearer your_token_here