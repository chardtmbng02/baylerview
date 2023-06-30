const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors middleware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000', 'https://baylerview-server.vercel.app' ],
    credentials: true,
  })
);

//routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Bay-Ler View API',
  });
});

const roomsRouter = require('./routes/rooms');
app.use('/api/rooms', roomsRouter);

const newslettersRouter = require('./routes/newsletters');
app.use('/api/newsletters', newslettersRouter);

const contactsRouter = require('./routes/contacts');
app.use('/api/contacts', contactsRouter);

app.listen(port, () => console.log(`Server listening in port ${port}`));
