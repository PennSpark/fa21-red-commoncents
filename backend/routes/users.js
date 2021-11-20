const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const school = req.body.school;
    const major = req.body.major;
    const gradYear = req.body.gradYear;
    
    if (!username || !password || !firstName || !lastName || !gender || !school || !major || !gradYear) {
      return res.json({error: "Please enter all the fields"})
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)){
      return res.json({error: "Enter a valid email."})
    }
    User.findOne({username: username})
    .then((existUser) =>{
      if (existUser) {
        return res.json({error: "Username already taken"})
      }
      const newUser = new User({username, password, firstName, lastName, gender, school, major, gradYear});
  
      newUser.save()
        .then(() =>  res.json({message: "Successfully signed up!"}))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => console.log(err));
  });
  
router.route('/signin').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      return res.json({error: "Please enter all the fields"})
    }
  
    User.findOne({username: username})
    .then((existUser) =>{
      if (!existUser) {
        return res.json({error: "Username does not exist"})
      }
      if (existUser.password == password) {
        const token = jwt.sign({_id:existUser._id}, JWT_SECRET)
        const {_id, username} = existUser
        res.json({token, user: {_id, username},message: "Successfully signed in!"})
      } else {
        return res.json({error: "Username and password do not match"})
      }
      
    })
    .catch(err => console.log(err));
});

router.route('/changeCoins').post((req, res) => {
  User.findById(req.body.id)
      .then(user => {
        user.coins += req.body.coins
        user.save()
          .then(() => res.json({message: `You earned ${req.body.coins} coins!`}))
          .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coins').get((req, res) => {
  User.findById(req.body.id)
    .then(user => res.json(user.coins))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;