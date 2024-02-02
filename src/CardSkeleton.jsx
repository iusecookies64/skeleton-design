import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
  Skeleton,
} from "@mui/material";

export default function CardSkeleton() {
  return (
    <Card sx={{ display: "flex" }}>
      <Skeleton variant="rectangle" animation="wave" width={151} height={151} />
      <Box sx={{ display: "flex", flexDirection: "column", width: 300 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Skeleton height={40} width={151} animation="wave" />
          <Skeleton height={25} width={200} animation="wave" />
        </CardContent>
        <CardActions>
          <Skeleton
            height={25}
            width={151}
            animation="wave"
            style={{ marginLeft: "10px" }}
          />
        </CardActions>
      </Box>
    </Card>
  );
}
