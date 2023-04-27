import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/primsa";
import { FetchedWorkouts } from "../../../../Types";

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<FetchedWorkouts>
) => {
  const { email }: { email?: string | undefined } = req.query;
  const userWorkouts = await prisma.userWorkouts.findMany({
    where: {
      user_email: email[0],
    },
  });
  console.log(userWorkouts);
  res.status(200).json({ userWorkouts });
};

export default handler;
