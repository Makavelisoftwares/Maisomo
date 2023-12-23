import { Prisma } from "@/lib/db";
import { ServerSession } from "@/utils/ServerSession";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  const { email } = await ServerSession();
  const User = await Prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const Id = User?.id;

  if (!Id) {
    console.log("Unauthorized");
  }

  return {
    userId: Id,
  };
};

export const ourFileRouter = {
  chapterVideo: f({ video: { maxFileSize: "1024MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log(file.url, metadata);
    }),

    
};
