import { Request, Response } from "express";

export const authController = (req: Request, res: Response) => {
  res.send("yo! server is running using typescript...");
};
