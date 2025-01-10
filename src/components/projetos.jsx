import React from "react";
import styles from "./projetos.module.css"
import Repo from "./repo";

const Projetos = () => {
  const [fetchOk, setFetchOk] = React.useState(null)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function getRepos() {
      const url = "https://api.github.com/users/LuanTSP/repos"
      const response = await fetch(url)
      if (response.ok) {
        const resData = await response.json()
        setData(resData)
        setFetchOk(true)
        return
      }
      setFetchOk(false)
      console.log(data)
    }
    getRepos()
  }, [])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.projetos}>
        {fetchOk ? (
          data.map((repo) => 
            <Repo
              key={repo.id}
              name={repo.name} 
              description={repo.description} 
              html_url={repo.html_url} 
            />
          )
        ) : (
          <li>Something went wrong</li>
        )}
      </ul>
    </div>
  )
}

export default Projetos