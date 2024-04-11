# WebRTC Video Call with OpenLayers Map (Backend)

This Node.js Express server, using Mongoose for MongoDB integration and Websockets for real-time communication, facilitates the WebRTC functionality in the frontend application.

## Disclaimer

This is a fully working prototype and lacks some functionality. This project is just to illustrate the working of a couple different topics within web development!

## Features

- Manages user connections using Websockets.
- Stores WebRTC SDP (Session Description Protocol) data and ICE candidates (Interactive Connectivity Establishment) in a MongoDB database using Mongoose.
- Acts as a mediator, relaying SDP and ICE candidate information between clients to establish WebRTC connections.

## Prerequisites

- Node.js and npm (or yarn) installed on your system.
- A MongoDB database instance running.
- A MongoDB connection string.

## Installation

1. **Clone this repository:**

   ```bash
   git clone git@github.com:VinnieMaen/WebRTCBackend.git
   ```

2. **Navigate to your project repository**
   ```bash
   cd <path-to-repo>
   ```
3. **Install the required dependencies**
   ```bash
   npm install
   ```

## Configuration
1. **Create a .env file in the project root directory (ignore this file in Git).**
2. **Add your MongoDB connection URI and Server Port to the .env file:**

```
MONGODB_URI=mongodb:<your-connection-uri>
PORT="80" // Or any other port as you like
```
Replace <your-database-name> with the actual connection URI of your MongoDB database.


## Running the app

1. **Start the webapp**
   ```bash
   npm run dev
   ```
   
   This will launch the application in development mode, usually accessible at http://localhost:80/ in your web browser. Depends on the port given in the .env file in the configuration step.

## License
This project is licensed under the MIT License (https://opensource.org/license/mit).
