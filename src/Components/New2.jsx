import * as React from "react";
import { Box, Typography, Grid } from "@mui/material"; // Combined imports for Grid and Box
import Card from "./Card";
import ImgMediaCard2 from "./Card2";
import ImgMediaCard3 from "./Card3";
import ImgMediaCard4 from "./Card4";
import ImgMediaCard5 from "./Card5";
import ImgMediaCard6 from "./Card6";
import ImgMediaCard7 from "./Card7";
import ImgMediaCard8 from "./Card8";
import ImgMediaCard9 from "./Card9";

// Forward the ref to the Box component in New2
const New2 = React.forwardRef((props, ref) => {
  return (
    <Box
      ref={ref} // Attach the forwarded ref here
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          fontWeight: 500,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          color: "brown",
        }}
      >
        <Typography
          variant="h2"
          fontSize={44}
          fontStyle={"italic"}
          sx={{
            py: 3,
            fontWeight: "bold",
          }}
        >
          Collections
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          ml: {
            lg: 10,
          },
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Row 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard2 />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard3 />
          </Grid>
          {/* Row 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard4 />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard5 />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard6 />
          </Grid>
          {/* Row 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard7 />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard8 />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard9 />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});

export default New2;
