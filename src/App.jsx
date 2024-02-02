import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import CustomCard from "./CustomCard";
import { faker } from "@faker-js/faker";
import CardSkeleton from "./CardSkeleton";
import CustomDrawer from "./Drawer";

const temp = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [drawer, setDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState(null);
  const [showDrawerData, setShowDrawerData] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const spacing = useMemo(() => {
    if (width >= 700) return 12;
    else if (width <= 700 && width >= 400) return 4;
    else if (width <= 400) return 1;
  }, [width]);

  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          item.avatar = faker.image.avatar();
        });
        setData(data);
        setTimeout(() => setLoading(false), 1000);
      });
  }, []);

  useEffect(() => {
    function fn() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  function showDetails(item) {
    setDrawer(true);
    setDrawerData(item);
    setTimeout(() => setShowDrawerData(true), 500);
  }

  console.log(spacing);

  return (
    <>
      <div className="user-container">
        <Typography
          color={"white"}
          variant="h4"
          gutterBottom
          style={{ marginBottom: "40px", marginTop: "20px" }}
          align="center"
        >
          Users List
        </Typography>
        <div className="cards-container">
          <Grid container spacing={spacing} justifyContent={"center"}>
            {!loading ? (
              <>
                {data.map((item, indx) => (
                  <Grid key={indx} item>
                    <CustomCard
                      data={item}
                      showDetails={() => showDetails(item)}
                    />
                  </Grid>
                ))}
              </>
            ) : (
              <>
                {temp.map((val) => (
                  <Grid key={val} item>
                    <CardSkeleton />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </div>
      </div>
      {!loading && (
        <CustomDrawer
          open={drawer}
          setOpen={setDrawer}
          data={drawerData}
          showData={showDrawerData}
          setShowData={setShowDrawerData}
        />
      )}
    </>
  );
}

export default App;
