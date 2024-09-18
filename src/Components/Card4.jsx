import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ImgMediaCard4() {
  const isSold = true; // Set to true for showing the sold status

  const eventHandler = () => {
    console.log("oft");
  };

  return (
    <Box sx={{ position: "relative", width: 345 }}>
      <Card
        sx={{
          maxWidth: 345,
          filter: isSold ? "grayscale(100%)" : "none", // Apply grayscale if sold
          pointerEvents: isSold ? "none" : "auto", // Disable interaction if sold
          position: "relative",
        }}
      >
        <CardMedia
          sx={{
            backgroundColor: "brown",
            borderRadius: 2,
          }}
          component="img"
          alt="green iguana"
          height="280"
          image="https://assets.ajio.com/medias/sys_master/root/20240709/xUd7/668c6f1f6f60443f31adbc1a/-473Wx593H-461730986-purple-MODEL.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "brown", fontWeight: "bold" }}
          >
            Karwat Kathi
          </Typography>
          <Typography variant="body2" sx={{ color: "brown" }}>
            <b>ProductId:104 </b>Karwat Kathi is a luxurious, smooth fabric
            known for its natural sheen and elegance, often used in high-quality
            sarees.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={eventHandler}
          >
            Order
          </Button>
        </CardActions>
      </Card>

      {/* Sold label */}
      {isSold && (
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            fontSize: 22,
            backgroundColor: "rgba(255,0,0,0.8)", // Optional background for visibility
            padding: "10px 20px",
            borderRadius: "16px",
          }}
        >
          Out of Stock
        </Typography>
      )}
    </Box>
  );
}
