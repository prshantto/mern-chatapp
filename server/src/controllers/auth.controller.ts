import { Request, Response } from "express";
import User from "../models/auth.model";

export const checkAuth = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};

interface newUser {
  fullName: string;
  email: string;
  password: string;
}

export const register = async (req: Request, res: Response) => {
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

export const login = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};

export const logout = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};

export const updateProfile = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};
