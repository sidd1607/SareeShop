import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          backgroundColor: "brown",
          borderRadius: 2,
        }}
        component="img"
        alt="green iguana"
        height="280"
        image="https://www.rajsilkvilla.com/cdn/shop/files/WhatsAppImage2024-01-17at22.12.39_1.jpg?v=1705590280&width=1946"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Silk
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <b>Silk </b>is a luxurious, smooth fabric known for its natural sheen
          and elegance, often used in high-quality sarees.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="error">
          Order
        </Button>
        <Button size="small" color="success">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
