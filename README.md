# Jira Clone Backend

This is the backend server for the Jira clone project, built using Node.js and Express. The server is designed to be separated from the frontend, allowing for a clean architecture and easier maintenance.

## Project Structure

```
backend
├── server.js          # Entry point of the backend server
├── package.json       # npm configuration file
├── .env               # Environment variables
├── prisma             # Directory for Prisma schema
│   └── schema.prisma  # Database schema definition
├── lib                # Directory for library files
│   └── prisma.js      # Prisma client setup
├── data               # Directory for static JSON files
├── actions            # Directory for backend logic moved from frontend
└── README.md          # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the `backend` directory and set the following variables:
   ```
   PORT=5000
   DATABASE_URL=your_database_url_here
   ```

4. **Run the server**:
   ```
   npm start
   ```

## Usage

The server listens on the port specified in the `.env` file. You can access the root endpoint to check if the server is running:

```
GET /
```

Response:
```json
{
  "message": "Backend is running",
  "timestamp": "current date and time"
}
```

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in this project.