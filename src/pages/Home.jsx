// src/pages/Home.jsx
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@mui/material";
import { fetchRepos } from "../api/github";
import { getDateTenDaysAgo } from "../utils/getDate";
import RepoCard from "../components/RepoCard.jsx";
import AppHeader from "../components/AppHeader.jsx";
import LoadingSkeleton from "../components/LoadingSkeleton.jsx";
import "../App.css";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRepos = async () => {
    try {
      const date = getDateTenDaysAgo();
      const items = await fetchRepos(date, page);

      if (!items || items.length === 0) {
        setHasMore(false);
        return;
      }

      setRepos((prev) => [...prev, ...items]);
      setPage((prev) => prev + 1);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load data. Please try again.");
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRepos(); // load first page on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ pb: 4 }}>
      <AppHeader />

      <Box sx={{ mx: "auto", mt: 3, maxWidth: 800, px: 2 }}>
        {error && (
          <Box sx={{ backgroundColor: "#ffebee", color: "#d32f2f", p: 2, borderRadius: 1, mb: 2, textAlign: "center" }}>
            {error}
          </Box>
        )}

        <InfiniteScroll
          dataLength={repos.length}
          next={loadRepos}
          hasMore={hasMore}
          loader={<LoadingSkeleton />}
        >
          {isLoading && [...Array(5)].map((_, i) => <LoadingSkeleton key={i} />)}
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export default Home;
