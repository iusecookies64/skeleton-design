import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";

export default function CustomCard({ data, showDetails }) {
  return (
    <Card sx={{ display: "flex" }} className="custom-card">
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data.avatar}
        alt="avatar"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 300,
          width: "100dvw",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data.profile.firstName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.jobTitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={showDetails}>Learn More</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
