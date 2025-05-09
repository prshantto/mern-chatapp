import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";

export const checkAuth = (req, res) => {
  res.send("server running...");
};

export const register = async (req, res) => {
  const { fullName, email, password, profilePic } = req.body;

  try {
    //input sanitation and validation
    if (!fullName || !email || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }

    //search if user exist?
    const user = await User.findOne({ email });
    if (user) {
      res.status(501).json({
        message: "User already exist",
      });
    }

    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      profilePic,
    });

    if (newUser) {
      //generate jwt creation
      // generateToken(newUser._id, res);
      await newUser.save();
      res
        .status(201)
        .json({ message: "User registered successfully", newUser });
    } else {
      res.status(401).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    return res.status(501).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email }).select(password);
  if (!user) {
    res.status(501).json({ message: "User doesn't exist" });
  }
  //compare password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  //send response
  res.status(201).json({ messgage: "User loggedin Successfully", user });
};

export const logout = (req, res) => {};

export const updateProfile = (req, res) => {}; //if error than throw error
w;
