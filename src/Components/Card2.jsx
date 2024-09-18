import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImgMediaCard2() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{
            backgroundColor: "brown",
            borderRadius: 2,
          }}
          component="img"
          alt="green iguana"
          height="280"
          image="https://www.palamsilk.com/cdn/shop/products/DSC_8711.jpg?v=1668592223"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "brown", fontWeight: "bold" }}
          >
            Silk
          </Typography>
          <Typography variant="body2" sx={{ color: "brown" }}>
            <b> ProductId:102 </b>Silk is a luxurious, smooth fabric known for
            its natural sheen and elegance, often used in high-quality sarees.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={handleClickOpen}
          >
            Order
          </Button>
        </CardActions>
      </Card>
      {/*dialogbox starts from here */}
      <React.Fragment>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Purchase this product? "}</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ color: "black" }}
            >
              <b>Product Id:102</b>
              <br />
              Please click on "Order Now" if want to Purchase!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={handleClose}>
              Check Out
            </Button>
            <Button color="success" onClick={handleClose}>
              Order now
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}
