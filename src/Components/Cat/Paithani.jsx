import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Paithani = () => {
  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%", // Take full height of parent
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Paithani Collection
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
        Paithani sarees are a traditional Maharashtrian attire known for their
        rich colors, intricate designs, and gold zari work. They are typically
        woven from silk and cotton, making them a popular choice for weddings
        and festive occasions.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {/* Example of displaying Paithani saree images */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://example.com/path-to-paithani-image1.jpg" // Replace with actual image URL
              alt="Paithani Saree 1"
            />
            <CardContent>
              <Typography variant="h6">Elegant Paithani</Typography>
              <Typography variant="body2" color="text.secondary">
                A beautifully crafted Paithani saree with intricate designs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://example.com/path-to-paithani-image2.jpg" // Replace with actual image URL
              alt="Paithani Saree 2"
            />
            <CardContent>
              <Typography variant="h6">Traditional Paithani</Typography>
              <Typography variant="body2" color="text.secondary">
                A classic design that represents the essence of Maharashtrian
                culture.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Paithani;
