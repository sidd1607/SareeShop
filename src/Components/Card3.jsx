import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard3() {
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
        image="https://img1.exportersindia.com/product_images/bc-full/2020/8/7660512/indian-silk-sarees-1598111376-5562117.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Zaari
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <b>Zari</b> refers to the intricate gold or silver threadwork used to
          embellish sarees, adding a regal touch.
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
