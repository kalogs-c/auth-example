import connectToDb from "../../utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

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
    .findOne({ login: req.body.login });

  if (userExists) {
    res.status(400).json({ message: "Usuario com esse login já existe" });
    return;
  }

  const dbResponse = await db.collection("users").insertOne({
    name: name,
    lastName: lastName,
    username: username,
    password: password,
  });

  if (dbResponse) console.log("feito");

  res.status(200);
};
