# Express Starter Template

A TypeScript Express.js starter with MongoDB, security middleware, rate limiting, structured logging, and a clean project layout — ready to clone and extend.

## Features

- Express + TypeScript
- MongoDB via Mongoose
- Helmet, CORS, and Mongo-backed rate limiting
- Winston logging (file + console in development)
- Centralized error handling and consistent API responses
- Health and self-check endpoints

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) running locally or a remote connection string
- npm

### Recommended VS Code extensions

- ESLint
- Prettier
- Error Lens (optional)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/UTKARSHSHARMA718/Express-Starter-Template.git
cd Express-Starter-Template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

| Variable      | Description                                      | Example                                      |
| ------------- | ------------------------------------------------ | -------------------------------------------- |
| `PORT`        | Port the server listens on                       | `8080`                                       |
| `ORIGIN_URL`  | Allowed CORS origin                              | `http://localhost:3000`                      |
| `ENV_STATE`   | App environment (`development` or `production`)  | `development`                                |
| `MONGODB_URL` | MongoDB connection string                        | `mongodb://127.0.0.1:27017/express-starter`  |

### 4. Run the app

**Development** (with nodemon):

```bash
npm run dev
```

**Production build:**

```bash
npm run dist
npm run prod
```

The server starts on the port set in `.env` (default `8080`).

## API Endpoints

Base path: `/api/v1`

| Method | Endpoint   | Description                          | Rate limited |
| ------ | ---------- | ------------------------------------ | ------------ |
| `GET`  | `/self`    | Simple success check                 | Yes          |
| `GET`  | `/health`  | Application and system health info   | No           |

Example:

```bash
curl http://localhost:8080/api/v1/health
```

## Project Structure

```text
src/
├── config/          # App configuration (e.g. rate limiter)
├── constant/        # Shared constants and enums
├── controllers/     # Route handlers
├── middleware/      # Express middleware
├── routers/         # Route definitions
├── services/        # External services (e.g. database)
├── types/           # TypeScript types
├── utils/           # Helpers (logger, errors, responses)
├── app.ts           # Express app setup
└── server.ts        # Server entry point
```

## Scripts

| Script       | Description                          |
| ------------ | ------------------------------------ |
| `npm run dev`  | Start in development with nodemon  |
| `npm run dist` | Compile TypeScript to `dist/`      |
| `npm run prod` | Run the compiled production build  |

## License

ISC

## Author

- [Utkarsh Sharma](https://github.com/UTKARSHSHARMA718)
