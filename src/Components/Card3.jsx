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

export default function ImgMediaCard3() {
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
          image="https://img1.exportersindia.com/product_images/bc-full/2020/8/7660512/indian-silk-sarees-1598111376-5562117.jpeg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "brown", fontWeight: "bold" }}
          >
            Zaari
          </Typography>
          <Typography variant="body2" sx={{ color: "brown" }}>
            <b>ProductId:103 </b>Zari refers to the intricate gold or silver
            threadwork used to embellish sarees, adding a regal touch.
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
              <b>ProductId:103 </b>
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
