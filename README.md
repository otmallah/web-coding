# web-coding-challenge

Welcome to your NestJS project! This README provides instructions on setting up and running your application.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)
- Docker (https://www.docker.com/)

## Setup

1. Clone the repository:

    ```bash
    git clone git@github.com:otmallah/web-coding.git
    cd web-coding
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Database Migration

Ensure that your database is set up and configured. You can use Docker Compose to run a PostgreSQL database for your app.

1. Create a `.env` file based on the `.env.example` file.

2. Run the database migration:

    ```bash
    npx prisma migrate save --name init --experimental
    npx prisma migrate up --experimental
    ```

## Running with Docker Compose

Use Docker Compose to run your NestJS app and the PostgreSQL database in separate containers.

1. Build the Docker image:

    ```bash
    docker-compose build
    ```

2. Start the containers:

    ```bash
    docker-compose up
    ```

3. Access your app at `http://localhost:3000`

4. To stop the containers, press `Ctrl+C`, and run:

    ```bash
    docker-compose down
    ```

## Additional Information

- Your NestJS app should now be running at `http://localhost:3000`. Access the app in your web browser.
- Customize the `.env` file as needed for your application configuration.
- Explore and modify the code based on your project requirements.


- Although I had planned to use a Makefile, time constraints prevented its implementation.

Happy coding!
