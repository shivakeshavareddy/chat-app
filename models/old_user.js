const mongoose = require("mongoose");
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
});

UserSchema.methods.genUserObject = () => {
  return {
    userName: this.userName,
    password: this.password,
    email: this.email
  };
};
module.exports = mongoose.model("User", UserSchema);
