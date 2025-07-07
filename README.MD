# WebApp Express – Backend API

This repository contains the backend API for the full stack blog/movie application built with Node.js, Express, and MySQL.

The API is consumed by the frontend React application hosted in a separate repository:

**Frontend repository:** [webapp-react](https://github.com/willymariino/webapp-react)


## Project Overview

The backend exposes a RESTful API that provides movie data and related reviews. It connects to a MySQL database, handles database operations (read & write), and serves as the data layer for the frontend client.

## Getting Started 

For full setup and environment configuration instructions, refer to the **"How to Run Locally"** section in the frontend repository’s README:

[webapp-react README](https://github.com/willymariino/webapp-react#how-to-run-locally)

In brief:

- Clone this repository
- Install dependencies with `npm install`
- Import the provided SQL file `database/movies_db.sql` into your local MySQL instance
- Copy the `.env.example` file into a new `.env` file and update credentials
- Run the development server with `npm run dev`

---

## Project Structure

```
webapp-express/
├── controllers/
├── database/
│   └── movies_db.sql
├── middlewares/
├── routers/
├── movies_cover/
├── .env.example
├── app.js
├── package.json
```

---

## API Endpoints

| Method | Endpoint           | Description                       |
|--------|--------------------|-----------------------------------|
| GET    | /movies            | Fetch all movies with avg ratings |
| GET    | /movies/:id        | Fetch movie details and reviews   |
| POST   | /movies/:id        | Add a review for a movie          |

All POST requests expect a JSON payload. 
CORS is enabled to allow requests from the React frontend.

---

## Environment Variables

All environment variables must be defined in a `.env` file. A sample is provided as `.env.example`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=movie_db
PORT=3000
```
Make sure to restart the server after modifying enviroment variables
