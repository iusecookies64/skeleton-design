import { Skeleton } from "@mui/material";
import React from "react";
import { Card, CardContent, Box } from "@mui/material";

export default function DrawerCardSkeleton() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "4",
      }}
    >
      <Skeleton variant="circular" width={200} height={200} animation="wave" />
      <Box sx={{ display: "flex", flexDirection: "column", width: 300 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Skeleton
            height={40}
            width={200}
            animation="wave"
            sx={{ marginTop: 4 }}
          />
          <Skeleton height={25} animation="wave" />
          <Skeleton
            height={40}
            width={200}
            animation="wave"
            sx={{ marginTop: 4 }}
          />
          <Skeleton height={25} animation="wave" />
          <Skeleton
            height={40}
            width={200}
            animation="wave"
            sx={{ marginTop: 4 }}
          />
          <Skeleton height={25} animation="wave" />
          <Skeleton
            height={40}
            width={200}
            animation="wave"
            sx={{ marginTop: 4 }}
          />
          <Skeleton height={25} animation="wave" />
        </CardContent>
      </Box>
    </Card>
  );
}
