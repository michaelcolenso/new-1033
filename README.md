
# 1033 Program Data Visualization Web Application

## Introduction
This web application visualizes county-level data from the 1033 Program. It's built with Node.js, Express, MongoDB, and Socket.IO on the backend, and Svelte, Leaflet, and D3.js on the frontend.

## Prerequisites
- Node.js (LTS version recommended)
- MongoDB (local or cloud instance)
- Git

## Installation

First, clone the repository to your local machine:

\```sh
git clone [repository_url]
cd [repository_name]
\```

### Backend Setup

Navigate to the backend directory and install dependencies:

\```sh
cd backend
npm install
\```

Create a `.env` file from the example and configure your environment variables:

\```sh
cp .env.example .env
\```

(Optional) Seed the database:

\```sh
node seeders/seed.js
\```

Start the backend server:

\```sh
npm start
\```

### Frontend Setup

In a new terminal, navigate to the frontend directory from the project root and install dependencies:

\```sh
cd ../frontend
npm install
\```

Start the frontend development server:

\```sh
npm run dev
\```

The application will be available at `http://localhost:5000`.

## Testing

To run the backend tests:

\```sh
cd backend
npm test
\```

To run the frontend tests:

\```sh
cd ../frontend
npm test
\```

## Deployment

Build the frontend for production:

\```sh
cd frontend
npm run build
\```

Then follow your deployment strategy to deploy both backend and frontend.

## Contributing

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Support

For any support issues, please open an issue in the repository or contact the project maintainers directly.
