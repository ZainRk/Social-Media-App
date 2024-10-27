import React from 'react'
import css from "@/styles/homeView.module.css"
import PostGenerator from '@/components/PostGenerator'
import Posts from '@/components/Posts'

const HomeView = () => {
  return (
    <div className={css.wrapper}>
    <div className={css.postsArea}>
      {/* post generator on top */}
      <PostGenerator/>
      <Posts/>
    </div>

      <div className={css.right}>
        <span>Trending section</span>
        <span>Follow suggestions</span>
      </div>
    </div>
  )
}
export default HomeView