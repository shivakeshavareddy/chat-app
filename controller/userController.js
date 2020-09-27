const userService = require("../services/userService");
const user = require("../models/user");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

//config dotenv
dotenv.config()

exports.login = (req, res) => {
  userService
    .authenticateUser(req.body)
    .then((user) =>{ 
      //creating jwt token
      const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET)
      // res.header('auth-token', token)
      res.set('auth-token', token)
      return res.json(user)})
    .catch((err) => {
      console.log(err)
      res.status(401).json(err)}
      );
};

exports.register = (req, res) => {

  userService
    .addUser(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

exports.addFriend = (req,res)=>{
  userService.addToUserFriendList(req.body)
  .then(user => res.json(user))
  .catch(err => res.status(500).json(err))
}

exports.getFriends = (req,res) =>{
  console.log(req.body)
  userService.getFriends(req.body)
  .then((user)=> {
    console.log(user)
    res.json(user.friendsList)})
  .catch((err)=> res.status(500).json(err))

}
