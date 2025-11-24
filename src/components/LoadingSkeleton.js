import { Card, CardContent, Skeleton } from "@mui/material";

export default function LoadingSkeleton() {
  return (
    <Card sx={{ display: "flex", p: 2, mb: 2, borderRadius: 3 }}>
      <Skeleton variant="circular" width={64} height={64} sx={{ mr: 2 }} />

      <CardContent sx={{ width: "100%", paddingY: 0 }}>
        <Skeleton height={25} width="60%" />
        <Skeleton height={16} width="80%" sx={{ mt: 1 }} />
        <Skeleton height={20} width="40%" sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  );
}
