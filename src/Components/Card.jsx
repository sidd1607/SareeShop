import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          backgroundColor: "brown",
          borderRadius: 2,
        }}
        component="img"
        alt="green iguana"
        height="260"
        image="https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Paithani
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <b>Paithani</b> sarees are traditional Maharashtrian sarees,
          distinguished by their rich silk fabric and stunning handwoven peacock
          or floral motifs in vibrant colors.
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
