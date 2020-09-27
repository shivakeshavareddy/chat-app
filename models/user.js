const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  friendsList:{
    default:[],
    type: [String],
    required:false
  }
});

UserSchema.methods.genUserObject = function (){
  return {
    userName: this.userName,
    email: this.email,
    friendsList:this.friendsList
  };
};
UserSchema.methods.generatePasswordHash = function(password){
  const salt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(password, salt)
}
module.exports = mongoose.model("User", UserSchema);
