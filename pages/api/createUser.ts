import connectToDb from "../../utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

interface ResponseType {
  message: string;
}

interface RequestDataType {
  name: string;
  lastName: string;
  username: string;
  password: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): Promise<void> => {
  if (req.method !== "POST")
    res.status(400).json({ message: "Method not allowed" });

  const { db } = await connectToDb();

  const { name, lastName, username, password }: RequestDataType = req.body;

  const userExists = await db
    .collection("users")
    .findOne({ username: username });

  if (userExists) {
    res.status(400).json({ message: "Username already exists" });
    return;
  }

  const dbResponse = await db.collection("users").insertOne({
    name: name,
    lastName: lastName,
    username: username,
    password: await hash(password, 10),
  });

  if (dbResponse) console.log("User created successfully");

  res.status(200).json({ message: "User created successfully" });
};
