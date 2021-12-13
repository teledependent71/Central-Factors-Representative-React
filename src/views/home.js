import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Central Factors Representative</title>
        <meta property="og:title" content="Central Factors Representative" />
      </Helmet>
    </div>
  )
}

export default Home
