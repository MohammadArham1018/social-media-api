const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 


app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes);


mongoose.connect(process.env.MONGO_URI).then(() => console.log(" MongoDB connected"))
  .catch(err => console.log(" MongoDB connection error:", err));


app.get("/", (req, res) => {
    res.send("Welcome to the Social Media API");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});
