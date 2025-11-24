import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function AppHeader() {
  return (
    <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "#1f1f1f" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff" }}>
            Trending Repos 
          </Typography>
        </Box>
        {/* Added description 
        <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ ml: 2 }}>
          Most Starred Repos (Last 10 Days)
        </Typography>
        */}
      </Toolbar>
    </AppBar>
  );
}
