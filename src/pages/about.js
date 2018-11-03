import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
	<div>
  <Layout>
    <h1>CSS Modules(Gatsby)</h1>
    <p>My first ever gatsby funny site</p>
    <User
      username="Cat Doe"
      avatar="https://cdn.slidesharecdn.com/ss_thumbnails/youtubefunnycatvideos-150829142000-lva1-app6891-thumbnail-4.jpg?cb=1440858034"
      excerpt="The quick white cat shocks the owner and jump over the lazy dog."
    />

    <User
      username="Dog Smith"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjiqEad2j40IHfq-TepuzYyYSvPVNsr7nsQZdK_8FSGEbwnNCMg"
      excerpt="The quick white dog scares the cat and jumps over the lazy cat"
    />

  </Layout>
  </div>
)