import Head from 'next/head'
import styles from '../styles/Home.module.css';

function Home( {data} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Random User API
        </h1>
        <div>Users: {data.results.map(user => {
          return <div key={user.email}>{user.name.title}. {user.name.first} {user.name.last}</div>
        })}</div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://randomuser.me/api/?results=10')
  const json = await res.json()
  return { data: json }
}

export default Home