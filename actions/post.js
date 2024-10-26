"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { uploadFile } from "./uploadFile";


export const createPost = async (post) => {
    const { postText, media } = post;
    try {
      let cld_id;
      let assetUrl;
      const user = await currentUser();
      if (media) {
        const res = await uploadFile(media, `/posts/${user?.id}`);
        const { public_id, secure_url } = res;
        cld_id = public_id;
        assetUrl = secure_url;
      }
      const newPost = await db.post.create({
        data: {
          postText,
          media: assetUrl,
          cld_id,
          author: {
            connect: {
              id: user?.id,
            },
          },
        },
      });
  
      const trends = checkPostForTrends(postText);
      if (trends.length > 0) {
        createTrends(trends, newPost.id);
      }
  
      return {
        data: newPost,
      };
    } catch (e) {
      console.log(e?.message);
      throw Error("Failed to create post");
    }
  };