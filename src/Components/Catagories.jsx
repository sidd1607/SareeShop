import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import the back arrow icon

// Category component placeholders
const Paithani = () => (
  <Box
    sx={{
      padding: 4,
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: 2,
      boxShadow: 2,
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
      Paithani Collection
    </Typography>
    <Typography variant="body1" sx={{ mt: 1 }}>
      Explore our beautiful Paithani collection!
    </Typography>
  </Box>
);
const Bandhani = () => <div>Bandhani Collection</div>;
const Karwatkathi = () => <div>Karwatkathi Collection</div>;
const Nauvari = () => <div>Nauvari Collection</div>;
const Silk = () => <div>Silk Collection</div>;

// Categories array
const categories = [
  { name: "Paithani", component: <Paithani /> },
  { name: "Bandhani", component: <Bandhani /> },
  { name: "Karwatkathi", component: <Karwatkathi /> },
  { name: "Nauvari", component: <Nauvari /> },
  { name: "Silk", component: <Silk /> },
];

const Catagories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to store selected category component
  const [selectedCategoryName, setSelectedCategoryName] = useState(""); // State to store selected category name
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle the "Go Back" button
  const handleGoBack = () => {
    navigate("/"); // Navigate back to the landing page ("/")
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full-page height
      }}
    >
      {/* Navigation & Header */}
      <Box
        sx={{
          backgroundColor: "brown",
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          onClick={handleGoBack}
          sx={{
            borderRadius: "50%",
            border: "none",
            padding: 1,
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "serif",
            fontWeight: "bold",
            color: "white",
            flexGrow: 1,
          }}
        >
          {selectedCategoryName || "Select a Category"}{" "}
          {/* Show selected category name or default text */}
        </Typography>
      </Box>

      {/* Show selected category or buttons */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5", // Lighter background for contrast
          padding: 3,
        }}
      >
        {selectedCategory ? (
          <Box sx={{ padding: 2, textAlign: "center" }}>
            {selectedCategory}
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={() => {
                setSelectedCategory(null); // Reset selection to show category options again
                setSelectedCategoryName(""); // Reset selected category name
              }}
            >
              Back to Categories
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {categories.map((category) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={category.name}
                sx={{ textAlign: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "brown",
                    mt: 2,
                    mb: 2,
                    color: "white", // Button text color
                    width: "100%",
                    borderRadius: 2, // Rounded corners
                    boxShadow: 3, // Slight shadow for depth
                    "&:hover": {
                      backgroundColor: "#5c4b3a", // Darker brown on hover
                      boxShadow: 6, // Darker shadow on hover
                    },
                  }}
                  onClick={() => {
                    setSelectedCategory(category.component);
                    setSelectedCategoryName(category.name); // Set the selected category name
                  }}
                >
                  {category.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Catagories;
