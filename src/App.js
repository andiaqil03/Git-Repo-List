import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchRepos } from "./api/github";
import { getDateTenDaysAgo } from "./utils/getDate";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const createdDate = getDateTenDaysAgo();

  const loadRepos = async () => {
    const newRepos = await fetchRepos(createdDate, page);

    if (newRepos.length === 0) {
      setHasMore(false);
      return;
    }

    setRepos([...repos, ...newRepos]);
    setPage(page + 1);
  };

  useEffect(() => {
    loadRepos(); // load page 1 on mount
  }, []);

  return (
    <div className="container">
      <h1>Most Starred GitHub Repos (Last 10 Days)</h1>

      <InfiniteScroll
        dataLength={repos.length}
        next={loadRepos}
        hasMore={hasMore}
        loader={<h4>Loading more...</h4>}
      >
        {repos.map(repo => (
          <div className="repo-card" key={repo.id}>
            <img src={repo.owner.avatar_url} alt="Avatar" className="avatar"/>
            <div className="info">
              <h3>{repo.full_name}</h3>
              <p>{repo.description || "No description"}</p>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
