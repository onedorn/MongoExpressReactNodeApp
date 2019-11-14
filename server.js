const express = require('express');
const connectDB = require('./config/db');


// Connect DB
connectDB();

// Init Middleware
const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({msg: 'Welcome to the Lebe.dev interview'}));

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));