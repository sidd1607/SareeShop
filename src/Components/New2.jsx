import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Card from "./Card";
import ImgMediaCard2 from "./Card2";
import ImgMediaCard3 from "./Card3";
import ImgMediaCard4 from "./Card4";
import ImgMediaCard5 from "./Card5";
import ImgMediaCard6 from "./Card6";
import ImgMediaCard7 from "./Card7";
import ImgMediaCard8 from "./Card8";
import ImgMediaCard9 from "./Card9";
import ImgMediaCard10 from "./Card10";
import ImgMediaCard11 from "./Card11";

// Define a list of cards with their metadata (tags)
const cardData = [
  { id: 1, component: <Card />, tags: ["paithani", "traditional"] },
  { id: 2, component: <ImgMediaCard2 />, tags: ["silk"] },
  { id: 3, component: <ImgMediaCard3 />, tags: ["zaari"] },
  { id: 4, component: <ImgMediaCard4 />, tags: ["karwat"] },
  { id: 5, component: <ImgMediaCard5 />, tags: ["silk"] },
  { id: 6, component: <ImgMediaCard6 />, tags: ["Banarasi"] },
  { id: 7, component: <ImgMediaCard7 />, tags: ["Chanderi"] },
  { id: 8, component: <ImgMediaCard8 />, tags: ["bandhani"] },
  { id: 9, component: <ImgMediaCard9 />, tags: ["south"] },
  { id: 10, component: <ImgMediaCard10 />, tags: ["south"] },
  { id: 11, component: <ImgMediaCard11 />, tags: ["paithani"] },
];

// Forward the ref to the Box component in New2
const New2 = React.forwardRef((props, ref) => {
  const [searchQuery, setSearchQuery] = React.useState(""); // For search input
  const [filteredCards, setFilteredCards] = React.useState(cardData); // To store the filtered cards

  const navigate = useNavigate(); // Hook to navigate to different pages

  // Handle search input change and filter cards
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter cards based on tags that match the search query
    const filtered = cardData.filter((card) =>
      card.tags.some((tag) => tag.toLowerCase().includes(query))
    );
    setFilteredCards(filtered);
  };

  // Navigate to the categories page
  const OpenCatagory = () => {
    navigate("/categories"); // Navigates to the /categories page
  };

  return (
    <section id="collections-section">
      <Box
        id="collections"
        ref={ref}
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

        {/* Search bar */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <TextField
            label="Search Sarees"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: "50%" }}
            placeholder="Search by tags like 'silk', 'cotton'..."
          />
        </Box>

        {/* Grid of filtered cards */}
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
            {/* Only show the filtered cards */}
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  {card.component}
                </Grid>
              ))
            ) : (
              <img
                style={{
                  width: "100%", // Makes the image take up 100% of the container width
                  maxWidth: "600px", // Sets the maximum width for the image (you can adjust this value as needed)
                  height: "auto", // Ensures that the height adjusts proportionally to maintain the aspect ratio
                  paddingBottom: "20px", // Adjusted padding for better spacing
                  paddingTop: "20px", // Adjusted padding for better spacing
                  objectFit: "contain", // Ensures the entire image is displayed within the container
                }}
                src="https://cdn.dribbble.com/users/1104860/screenshots/10519347/media/aa9e1cc2969d3706ae23b0f47f40d0d8.gif"
                alt="Responsive animation"
              />
            )}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 7,
              paddingRight: 10,
            }}
          >
            <Button
              size="small"
              variant="text"
              color="error"
              onClick={OpenCatagory}
            >
              View More...
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
});

export default New2;
