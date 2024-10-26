import React from 'react'
import css from "@/styles/homeView.module.css"

const HomeView = () => {
  return (
    <div className={css.wrapper}>
    <div className={css.postsArea}>
      {/* post generator on top */}
    </div>

      <div className={css.right}>
        <span>Trending section</span>
        <span>Follow suggestions</span>
      </div>
    </div>
  )
}
export default HomeView