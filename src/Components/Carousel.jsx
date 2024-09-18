import React from "react";
import Slider from "react-slick";
import { Box, Card, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import Slick styles

export default function SmallCarousel() {
  const settings = {
    dots: false, // Dots for pagination
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 slides at once
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Auto slide every 3 seconds
    arrows: true, // Show navigation arrows

    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For small mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For very small mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", paddingTop: 4 }}>
      <Slider {...settings}>
        {/* Slide 1 */}
        <Card sx={{ maxWidth: 280, pr: 2 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://media.istockphoto.com/id/1187354904/photo/shinny-indian-bridal-weeding-dress.jpg?s=612x612&w=0&k=20&c=Opb8t3Tv5oSud9FklcMFk4DbbohtoEsGNCxfnYiQwhE="
            alt="Picture 1"
          />
        </Card>

        {/* Slide 2 */}
        <Card sx={{ maxWidth: 280 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://media.istockphoto.com/id/1192229073/photo/little-wedding-shop-on-a-night-market-in-jaipur.jpg?s=612x612&w=0&k=20&c=Px2_sN4_CuMQR6rtjhvZpj0-Gy3kW1FytH5c0dZFWRI="
            alt="Picture 2"
          />
        </Card>

        {/* Slide 3 */}
        <Card sx={{ maxWidth: 280 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://media.istockphoto.com/id/1331734513/photo/view-of-indian-woman-fashion-and-tradtional-wear-sarees-in-shop-display.jpg?s=612x612&w=0&k=20&c=PxIU-OUQUZ-h7bBibATmXk_9HLK72w8j4a9wyAvppfk="
            alt="Picture 3"
          />
        </Card>

        {/* Slide 4 */}
        <Card sx={{ maxWidth: 280 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasQBB8nqKOtwQtSjeGu__pGMl_bsha4uE3g&s"
            alt="Picture 4"
          />
        </Card>

        {/* Slide 5 */}
        <Card sx={{ maxWidth: 280 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://thumbs.dreamstime.com/b/vadodara-india-october-indian-women-seen-shopping-traditional-indian-saris-saree-shop-concept-indian-economy-316017298.jpg"
            alt="Picture 5"
          />
        </Card>
      </Slider>
    </Box>
  );
}
