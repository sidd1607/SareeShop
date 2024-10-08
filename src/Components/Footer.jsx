import * as React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: "#162e4a",
        color: "white",
        py: 4,
        px: 2,
      }}
    >
      {/* Footer content container */}
      <Grid container spacing={3} justifyContent="center">
        {/* About Us Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            <FmdGoodIcon /> {"  "}
            Visit us
          </Typography>
          <Typography variant="body2">
            C-23, Colaba, Near BKC Building Mk Gandhi Sq,
            <br /> Behind AutoExpo, Mumbai-10032 <br />
            +91 9876543296 <br />
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column">
            <ScrollLink
              to="home-section"
              smooth={true}
              duration={800}
              offset={-70}
              style={{
                color: "inherit",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="collections-section"
              smooth={true}
              duration={800}
              offset={-70}
              style={{
                color: "inherit",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              Collections
            </ScrollLink>
            <ScrollLink
              to="about-us-section"
              smooth={true}
              duration={800}
              offset={-70}
              style={{
                color: "inherit",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={800}
              offset={-70}
              style={{
                color: "inherit",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              Contact Us
            </ScrollLink>
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: info@sareestore.com</Typography>
          <Typography variant="body2">Phone: +91 12345 67890</Typography>

          {/* Social Media Icons */}
          <Box mt={2}>
            <IconButton href="https://www.facebook.com/" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/accounts/login/?hl=en"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://x.com/i/flow/login" color="inherit">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer bottom text */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Saree Store. All rights reserved.
          <br />
          <br />
          <i>developed by siddhesh Naik</i>
        </Typography>
      </Box>
    </Box>
  );
}
