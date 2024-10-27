"use client"
import { getMyPostsFeed } from '@/actions/post'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { Flex, Spin, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'


const Posts = ({ id = "all"}) => {

    const {ref, inView} = useInView()
    const checkLastViewRef = (index, page) => {
        if(index === page?.data?.length - 1) {
            return true;
        } else return false;
    }
    const {data, isLoading, isError, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching} = useInfiniteQuery({
        queryKey: ["posts", id],
        queryFn: ({pageParam = ""}) => getMyPostsFeed(pageParam),
        getNextPageParam: (lastPage) => {
        return lastPage?.metadata?.lastCursor
        }
    })

    useEffect(() => {

        if(inView && hasNextPage) {
           fetchNextPage();
            
        }

    }, [hasNextPage, inView, fetchNextPage])

    if(isError) {
        return <Typography>Something went wrong</Typography>
    }

    if (isLoading) {
        return (
            <Flex vertical align='center' gap="large">
                <Spin/>
                <Typography>Loading...</Typography>
            </Flex>
        )
    }
    if (isSuccess) {
      return (
        <Flex vertical gap={"1rem"}>
          {data?.pages.map((page) =>
            page?.data?.map((post, index) =>
              checkLastViewRef(index, page) ? (
                <div
                  key={index}
                  style={{ width: "100%", height: "30rem", background: "blue" }}
                  ref={ref}
                >
                  <span>Post</span>
                </div>
              ) : (
                <div key={post?.id}>
                  <span>Post</span>
                </div>
              )
            )
          )}
        </Flex>
        );
    }
    {
      (isLoading || isFetchingNextPage || isFetching) && (
        <Flex vertical align='center' gap="large">
                <Spin/>
                <Typography>Loading...</Typography>
            </Flex>
      )
    }
        
    }


export default Posts