const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//this method will hash the password before saving the user model
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  // console.log(user.password);
  next();
});

//this method generates an auth token for the user
UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, username: user.username, email: user.email },
    "hiremepliz"
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

module.exports = model("User", UserSchema);
