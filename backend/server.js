const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema and model
const DataSchema = new mongoose.Schema({
  // ... schema definition ...
});
const DataModel = mongoose.model('Data', DataSchema);

// Serve static files (Svelte app)
app.use(express.static('public'));

// Endpoint to get initial data
app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find({});
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('Client connected');

  // You can also listen for client events and respond to them
  socket.on('someClientEvent', (data) => {
    // Handle event
  });

  // Don't forget to handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
