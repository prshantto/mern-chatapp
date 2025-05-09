import { Request, Response } from "express";
import User from "../models/auth.model";

export const checkAuth = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};

export const register = async (req: Request, res: Response) => {
  interface newUser {
    fullName: string;
    email: string;
    password: string;
  }
  const { fullName, email, password }: newUser = req.body;
  try {
    if (!fullName || !email || !password) {
      res.status(501).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      res
        .status(501)
        .json({ message: "Password must consist of 6 characters " });
    }
    // create user

    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      res.status(501).json({ message: "Email already exist" });
    }

    const newUser = await User.create({
      fullName,
      email,
      password, // todo: use bcrypt tp hash password
    });

    if (newUser) {
      //   await newUser.save();
      //generate jwt

      res
        .status(201)
        .json({ message: "User registered sucessfully", User: newUser });
    }
  } catch (error) {
    console.log(
      `some error occured at register route, error: ${(error as Error).message}`
    );
    res.status(501).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  interface user {
    email: string;
    password: string;
  }
  const { email, password }: user = req.body;

  try {
    if (!email || !password) {
      res.status(501).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      res
        .status(501)
        .json({ message: "Password must consist of 6 characters " });
    }

    // find user and compare password

    const user = await User.findOne({ email }).select("+password");
    //comapre password using bcrypt
    if (user?.password != password) {
      res.status(501).json({ message: "Invalid Credentials" });
    }

    res.status(201).json({ message: "User loggedin sucessfully", User: user });
  } catch (error) {
    console.log(
      `some error occured at login route, error: ${(error as Error).message}`
    );
    res.status(501).json({ message: "Internal server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};

export const updateProfile = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};
