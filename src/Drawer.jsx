import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerCardSkeleton from "./DrawerCardSkeleton";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  backgroundColor: theme.palette.grey,
}));

const drawerWidth = 300;

export default function CustomDrawer({
  open,
  setOpen,
  showData,
  data,
  setShowData,
}) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        backgroundColor: "black",
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton
          onClick={() => {
            setOpen(false);
            setTimeout(() => setShowData(false), 500);
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {showData ? (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "4",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 200, borderRadius: "50%" }}
            image={data.avatar}
            alt="avatar"
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: 300 }}>
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
              <Typography variant="h6" sx={{ marginTop: 4 }}>
                Bio
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                {data.Bio}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: 4 }}>
                Full Name
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                {data.profile.firstName} {data.profile.lastName}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: 4 }}>
                UserName
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                {data.profile.username}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: 4 }}>
                Email
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                {data.profile.email}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      ) : (
        <DrawerCardSkeleton />
      )}
      <Divider />
    </Drawer>
  );
}
