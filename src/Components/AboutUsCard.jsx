import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import fo from "../imges/fo.jpg";

export default function AboutUs({ scrollToCollection }) {
  return (
    <section id="about-us-section">
      <Box
        id="about-us"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Founder Image */}
        <Box
          component="img"
          src={fo} // Use the imported image
          alt="Founder"
          sx={{
            width: { xs: "80%", md: "40%" },
            borderRadius: "8px",
            marginBottom: { xs: 2, md: 0 },
            marginRight: { md: 4 },
          }}
        />

        {/* About Us Text */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Us
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to <b>Our Saree Collection</b>, where tradition meets modern
            elegance. For over 30 years, we have been dedicated to bringing you
            the finest, handpicked sarees crafted by artisans from across India.
          </Typography>

          <Typography variant="body1" paragraph>
            Our founder, <b>Chetan Sharma</b>, has a passion for preserving the
            art of saree-making, blending traditional techniques with
            contemporary designs.
          </Typography>

          <Typography variant="body1" paragraph>
            Join us in celebrating the art of saree weaving and experience
            luxury like never before.
          </Typography>

          {/* Button triggers scroll */}
          <Button
            variant="text"
            color="error"
            onClick={scrollToCollection} // Trigger scroll to collection
          >
            Explore Our Collection
          </Button>
        </Box>
      </Box>
    </section>
  );
}
