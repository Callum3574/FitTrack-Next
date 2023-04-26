import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/primsa";
import { Runs, WalksAndRuns } from "../../../../Types";
type Data = {
  walks: WalksAndRuns[];
  runs: WalksAndRuns[];
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { email } = req.query;
  const walks = await prisma.walk.findMany({
    where: {
      user_email: email[0],
    },
  });

  const runs = await prisma.run.findMany({
    where: {
      user_email: email[0],
    },
  });
  console.log(runs);

  const data: Data = {
    walks,
    runs,
  };

  res.status(200).json(data);
};

export default handler;
