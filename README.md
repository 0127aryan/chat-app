

# Real-Time Chat Application

Welcome to the Real-Time Chat Application repository! This project demonstrates a full-stack chat application built using the MERN stack (MongoDB, Express, React, Node.js) and WebSocket technology for real-time communication.

## Features

- **Real-Time Messaging**: Instant message delivery using Socket.io.
- **User Authentication**: Secure login and registration with JWT.
- **Chat Rooms**: Create and join different chat rooms.
- **Message Persistence**: Store chat history in MongoDB.
- **Responsive Design**: User-friendly interface optimized for various devices.

## Technologies Used

- **Frontend**: React, Socket.io-client
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/0127aryan/chat-app.git
    cd chat-app
    ```

2. **Install dependencies:**

    **Backend:**

    ```bash
    cd backend
    npm install
    ```

    **Frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add your environment variables (e.g., database URI, JWT secret).

4. **Run the application:**

    **Backend:**

    ```bash
    cd backend
    npm start
    ```

    **Frontend:**

    ```bash
    cd ../frontend
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Sign Up / Log In**: Register or log in to start chatting.
2. **Create / Join Chat Rooms**: Select or create a chat room to start communicating.
3. **Send Messages**: Type and send messages in real time.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please reach out to [your-email@example.com](mailto:your-email@example.com).

---

Feel free to adjust the sections according to your project’s specifics and requirements!
