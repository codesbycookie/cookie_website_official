const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());


const MONGODB_URI = 'mongodb://localhost:27017/CookieDB';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  timing: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);


app.post('/api/appointment', async (req, res) => {
  try {
    const { name, phone, email, date, timing } = req.body;

    // Basic validation
    if (!name || !phone || !email || !date || !timing) {
      return res.status(400).json({ error: 'All fields are required' });
    }


    const newAppointment = new Appointment({ name, phone, email, date, timing });
    await newAppointment.save();

    res.status(200).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
