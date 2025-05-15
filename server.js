const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS with specific origin if needed (if front-end is on a different port)
app.use(cors({
  origin: 'http://localhost:3000' // Update if needed, depending on your front-end server URL
}));

app.use(express.json());

// Replace with your MongoDB connection string (ensure to replace 'your_database_name' with actual db name)
const mongoURI = 'mongodb+srv://Darshan:Darshan%402601@cluster0.bixrkyy.mongodb.net/registration';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if MongoDB connection fails
  });

// Registration schema
const registrationSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  phone: String,
  college: String,
  city: String,
  event: String,
  createdAt: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const reg = new Registration(req.body);
    await reg.save();
    res.status(201).json({ message: 'Registration saved!' });
  } catch (err) {
    console.error('Error saving registration:', err);
    res.status(400).json({ error: 'Failed to save registration.' });
  }
});

// (Optional) Get all registrations
app.get('/registrations', async (req, res) => {
  try {
    const regs = await Registration.find().sort({ createdAt: -1 });
    res.json(regs);
  } catch (err) {
    console.error('Error fetching registrations:', err);
    res.status(500).json({ error: 'Failed to fetch registrations.' });
  }
});

// Delete registration by ID
app.delete('/registrations/:id', async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.json({ message: 'Registration deleted!' });
  } catch (err) {
    console.error('Error deleting registration:', err);
    res.status(500).json({ error: 'Failed to delete registration.' });
  }
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname));

// Home route (optional, serves index.html by default)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

