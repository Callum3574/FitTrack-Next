import { use } from "react";
import { prisma } from "../../prisma/primsa";

//this queries the db to check if the session user is on the database (for Google logins)
export const checkUserExists = async (email: string) => {
  const userSearchResult = await prisma.users.findMany({
    where: {
      user_email: email,
    },
  });

  return !userSearchResult ? false : true;
};
