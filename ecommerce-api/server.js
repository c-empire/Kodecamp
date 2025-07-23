const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error(err));
