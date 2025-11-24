import { Card, CardContent, Typography, Avatar } from "@mui/material";

export default function RepoCard({ repo }) {
  return (
    <Card
      sx={{
        display: "flex",
        p: 2,
        mb: 2,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
        }
      }}
    >
      <Avatar
        src={repo.owner.avatar_url}
        sx={{ width: 64, height: 64, mr: 2 }}
      />

      <CardContent sx={{ paddingY: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {repo.full_name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {repo.description || "No description available"}
        </Typography>

        <Typography sx={{ mt: 2 }}>⭐ {repo.stargazers_count}</Typography>
      </CardContent>
    </Card>
  );
}
