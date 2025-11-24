import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, CardContent, Typography, Avatar, Box, Skeleton } from "@mui/material";
import { fetchRepos } from "./api/github";
import { getDateTenDaysAgo } from "./utils/getDate";
import "./App.css";

const LoadingSkeleton = () => (
  <Card sx={{ display: "flex", p: 2, mb: 2 }}>
    <Skeleton variant="circular" width={60} height={60} />
    <CardContent sx={{ width: "100%" }}>
      <Skeleton height={25} width="60%" />
      <Skeleton height={20} width="80%" />
      <Skeleton height={20} width="40%" sx={{ mt: 1 }} />
    </CardContent>
  </Card>
);

function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const createdDate = getDateTenDaysAgo();

  const loadRepos = async () => {
    const newRepos = await fetchRepos(createdDate, page);

    if (newRepos.length === 0) {
      setHasMore(false);
      return;
    }

    setRepos([...repos, ...newRepos]);
    setPage(page + 1);
    setIsLoading(false);
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
        {isLoading && [...Array(5)].map((_, i) => <LoadingSkeleton key={i} />)}
        {repos.map(repo => (
          <Card key={repo.id} sx={{ display: "flex", p: 2, mb: 2 }}>
            <Avatar
              src={repo.owner.avatar_url}
              sx={{ width: 60, height: 60, mr: 2 }}
            />
            <CardContent>
              <Typography variant="h6">{repo.full_name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {repo.description || "No description available"}
              </Typography>
              <Typography sx={{ mt: 1 }}>⭐ {repo.stargazers_count}</Typography>
            </CardContent>
          </Card>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
