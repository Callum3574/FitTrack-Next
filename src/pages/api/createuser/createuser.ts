import type { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../../../prisma/primsa";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
