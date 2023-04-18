const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const User = require('./models/User.js');
const CompanyModel = require('./models/Company.js');
const MentorModel = require('./models/Mentor.js')
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

app.post('/company-register', async (req, res) => {
  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const companyDoc = await CompanyModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json(companyDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post('/company-login', limiter, async (req, res) => {
  const { email, password } = req.body;
  const companyDoc = await CompanyModel.findOne({ email: { $eq: email } });

  if (companyDoc) {
    const passOk = bcrypt.compareSync(password, companyDoc.password);

    if (passOk) {
      jwt.sign(
        {
          email: companyDoc.email,
          id: companyDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(companyDoc);
        }
      );
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } else {
    res.status(404).json({ message: 'Company not found' });
  }
});

app.post('/mentor-register', async (req, res) => {
  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const mentorDoc = await MentorModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json(mentorDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post('/mentor-login', limiter, async (req, res) => {
  const { email, password } = req.body;
  const mentorDoc = await MentorModel.findOne({ email: { $eq: email } });

  if (mentorDoc) {
    const passOk = bcrypt.compareSync(password, mentorDoc.password);

    if (passOk) {
      jwt.sign(
        {
          email: mentorDoc.email,
          id: mentorDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(mentorDoc);
        }
      );
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } else {
    res.status(404).json({ message: 'Mentor not found' });
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

app.get('/api/profile', limiter, (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        console.error('Error verifying JWT:', err);
        return res.status(500).json({ error: 'Error verifying JWT.' });
      }
      
      try {
        const user = await User.findById(userData.id);
        
        if (!user) {
          return res.status(404).json({ error: 'User not found.' });
        }
        
        const { name, email, _id } = user;
        res.json({ name, email, _id });
      } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Error fetching user.' });
      }
    });
  } else {
    res.json(null);
  }
});

app.get('/api/mentor/:id', limiter, async (req, res) => {
  const mentorId = req.params.id;
  try {
    const mentor = await MentorModel.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found.' });
    }
    res.json(mentor);
  } catch (error) {
    console.error('Error fetching mentor:', error);
    res.status(500).json({ error: 'Error fetching mentor.' });
  }
});

app.get('/api/mentor/:mentorId/mentees', limiter, async (req, res) => {
  const mentorId = req.params.mentorId;
  try {
    const mentor = await MentorModel.findById(mentorId).populate('mentees');
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found.' });
    }
    res.json(mentor.mentees);
  } catch (error) {
    console.error('Error fetching mentees:', error);
    res.status(500).json({ error: 'Error fetching mentees.' });
  }
});

app.get('/api/mentees', limiter, async (req, res) => {
  try {
    const mentees = await UserModel.find();
    res.json(mentees);
  } catch (error) {
    console.error('Error fetching mentees:', error);
    res.status(500).json({ error: 'Error fetching mentees.' });
  }
});


app.get('/api/mentors', limiter, async (req, res) => {
  try {
    const mentors = await MentorModel.find();
    res.json(mentors);
  } catch (error) {
    console.error('Error fetching mentors:', error);
    res.status(500).json({ error: 'Error fetching mentors.' });
  }
});

app.get('/api/mentee/:id', limiter, async (req, res) => {
  const menteeId = req.params.id;
  try {
    const mentee = await UserModel.findById(menteeId);
    if (!mentee) {
      return res.status(404).json({ error: 'Mentee not found.' });
    }
    res.json(mentee);
  } catch (error) {
    console.error('Error fetching mentee:', error);
    res.status(500).json({ error: 'Error fetching mentee.' });
  }
});


app.post('/api/connect/:mentorId', async (req, res) => {
  const { menteeId } = req.body;
  const { mentorId } = req.params;

  try {
    const mentor = await MentorModel.findById(mentorId);
    const mentee = await User.findById(menteeId);

    if (!mentor || !mentee) {
      return res.status(404).json({ error: 'Mentor or mentee not found.' });
    }

    // Add mentee to mentor's mentees list if not already added
    if (!mentor.mentees.includes(menteeId)) {
      mentor.mentees.push(menteeId);
      await mentor.save();
    }

    // Add mentor to mentee's mentors list if not already added
    if (!mentee.mentors.includes(mentorId)) {
      mentee.mentors.push(mentorId);
      await mentee.save();
    }

    res.json({ message: 'Connected successfully.' });
  } catch (error) {
    console.error('Error connecting mentor and mentee:', error);
    res.status(500).json({ error: 'Error connecting mentor and mentee.' });
  }
});



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

app.post('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  const updatedUserData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true });
    res.json(updatedUser);
  } catch (error) {
    console.error(error); // Add this line to log the error
    res.status(500).json({ message: 'Server error' });
  }
});

// display mentees on mentee browsing
app.get('/api/mentee', limiter, async (req, res) => {
  try {
    const mentees = await User.find();
    res.json(mentees);
  } catch (error) {
    console.error('Error fetching mentee:', error);
    res.status(500).json({ error: 'Error fetching mentee.' });
  }
});










// Other imports and code

app.listen(3001);

