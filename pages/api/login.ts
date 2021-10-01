import connectToDb from "../../utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

interface ResponseType {
  message: string;
  token: string;
}

interface RequestDataType {
  username: string;
  password: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): Promise<void> => {
  if (req.method !== "POST")
    res.status(400).json({ message: "Method not allowed", token: null });

  const { db } = await connectToDb();

  const { username, password }: RequestDataType = req.body;

  const user = await db.collection("users").findOne({ username: username });

  if (!user)
    res
      .status(400)
      .json({ message: "User or password incorrect", token: null });

  const TOKEN = await jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  const comparePasswords = await compare(password, user.password);
  comparePasswords
    ? res.status(200).json({ message: "Passwords match", token: TOKEN })
    : res
        .status(400)
        .json({ message: "User or password incorrect", token: null });
};
