const express = require('express');
require('dotenv').config();
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 5001;
const chatRoute = require('./routes/chatRoute');

// socket Chat
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
    console.log('A user connected to the chat namespace');

    socket.on('chat message', (msg) => {
        chatNamespace.emit('chat message', msg);
    });

    socket.on('live code', (code) => {
        chatNamespace.emit('live code', code);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected from the chat namespace');
    });
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://devcom-web.vercel.app"]
}));

app.use(express.json());

// routes
app.get('/', (req, res) => res.send("Welcome to Flinq server"));
app.use('/chat', chatRoute);

// AI Code Generation
app.post('/collaborate', async (req, res) => {
    const { code } = req.body;

    try {
        const response = await axios.post(
            'https://judge0-ce.p.rapidapi.com/submissions',
            { source_code: code },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                },
            }
        );

        const result = response.data;
        res.json(result);
    } catch (error) {
        console.error('Error in code generation:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

connectToDb();

server.listen(PORT, () => {
    console.log(`Server is running @ PORT ${PORT}`);
});
