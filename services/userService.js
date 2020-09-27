const User = require("../models/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.authenticateUser = ({ userName, password }) => {
  return User.findOne({
    userName,
  }).then((user) => {
    let hashPassword= bcrypt.compare(password,user.password)
    if (hashPassword) {
      // console.log(user)
      return user.genUserObject();
    } else {
      throw new Error("Invalid Credentials");
    }
  });
};

exports.addUser = async ({ userName, email, password }) => {
  const user = new User();
  user.userName = userName;
  user.email = email;
  await user.generatePasswordHash(password);

  

  return user.save().then((user) => ({
    userName: userName,
    email: user.email,
    id: user._id,
  }));
};

exports.addToUserFriendList = ({userName, friendName }) => {
  console.log(userName,friendName)
    return User.findOneAndUpdate(
      { userName: userName },
      {$push:{ friendsList: friendName }},{new:true}
    )
}

exports.getFriends =({userName})=>{
   return User.findOne(
     {userName: userName}
   )
   .then((user) =>{ 
    return user.genUserObject();
  })
    .catch(err => console.log(err))
}
