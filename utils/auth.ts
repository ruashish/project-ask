import { auth, redirectToSignIn } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserByClerkID = async () => {
  const { userId } = await auth();
  if (!userId) redirectToSignIn();
  else {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    return user;
  }
};
