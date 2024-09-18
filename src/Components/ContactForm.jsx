import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Container,
} from "@mui/material";
import backgroundImage from "../imges/bg1.jpg"; // Replace with your image path

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    productId: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send data to server)
    console.log("Form Data:", formData);
    setOpen(true); // Open popup
    setFormData({ name: "", mobile: "", productId: "" }); // Clear form
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "600",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",

        p: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          p: 4,
          borderRadius: 2,
          mt: 20,
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }} textAlign="center">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Product ID"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
            sx={{
              mb: 2,
            }}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Submit
          </Button>
        </form>
      </Container>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h6" align="center">
            Thanks for connecting!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;
