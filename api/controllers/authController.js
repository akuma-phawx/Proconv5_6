const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

//Registering User functionality
module.exports.register = async (req, res) => {
  try {
    // console.log(req.body); DEBUG Purposes

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }); //Creating new user based on our model

    let data = await user.save(); // Saving the user

    const token = await user.generateAuthToken(); // here it is calling the method that we created in the model

    res.status(201).json({ data, token });
  } catch (e) {
    res.status(401).json({ message: "Credentials in use" });
  }
};

//Login
module.exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await User.findOne({ username });

    //If we didnt find a user
    if (!user) {
      return res
        .status(401)
        .json({ error: "Login failed! Check authentication credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      console.log("wrongpaswerowrowerwe");
      return res
        .status(401)
        .json({ error: "Login failed! Check authentication credentials" });
    }

    //Generating new token for the user
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (e) {
    console.log(e);
  }
};
