import React from "react";
import HomeView from "@/sections/HomeView";

export const metadata = () => {
  return {
    title: `Connectify`,
    description: `Connect, explore, and feel the freedom of limitless possibilities.`,
  };
};

const HomePage = async () => {
  // const queryClient = new QueryClient();
  // const user = await currentUser()
  // // get posts
  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["posts", "all"],
  //   queryFn: ({ pageParam = "" }) => getMyPostsFeed(pageParam),
  //   getNextPageParam: (lastPage) => {
  //     return lastPage?.metaData.lastCursor;
  //   },
  //   enabled: !!user,
  // });

  return <HomeView />;
};

export default HomePage;