"use client"
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

const Posts = () => {
const {data, isLoading, isError} = useInfiniteQuery({
    queryKey: "posts",
    queryFn: () => getMyFeedPosts()
})

  return (
    <div>Posts</div>
  )
}

export default Posts