import React from "react"
import styles from './tags.module.css'


const TagList = ({ tags, withLabel=true }) => {
  return (
    <div className={styles.tagList}>
      {
        withLabel &&
        <div className={styles.tagLabel}>
          Tags:
        </div>
      }
      {tags.map((tag, i) => (
        <div key={i} className={styles.tagWrapper}>
          <div className={styles.tag}>
          { tag }
          </div>
        </div>
      ))}
    </div>
  )
}

export default TagList;
