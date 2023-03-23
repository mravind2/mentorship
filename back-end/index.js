const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const multer = require('multer');



const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


const bcryptSalt = bcrypt.genSaltSync(10); 
const jwtSecret = process.env.JWT_SECRET;


app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8000',
}));

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', async (req,res) => {
    const {name, email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    try {
        const userDoc = await User.create({
          name,
          email,
          password:bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
      } catch (e) {
        res.status(422).json(e);
      }
});

app.post('/login', limiter, async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email: { $eq: email } });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(userDoc);
        }
      );
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/profile', limiter, (req, res) => {
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name, email, _id} = await User.findById(userData.id);
      res.json({name, email, _id});
    });
  } else {
    res.json(null);
  }
})

app.post('/api/logout', (req,res) => {
  res.cookie('token', '').json(true);
});


const photosMiddleware = multer({dest:'uploads/'});
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const {path, originalname} = req.files[i];
    const parts = originalname.split('.');
    const ext = parts [parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync (path, newPath);
    uploadedFiles.push(newPath.replace('uploads/',''));
  }
  res.json(uploadedFiles);
});


app.listen(3001);
