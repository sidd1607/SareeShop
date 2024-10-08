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
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImgMediaCard3({ tags = ["zaari", "traditional"] }) {
  const [dialogOpen, setDialogOpen] = React.useState(false); // Dialog state
  const [snackbarOpen, setSnackbarOpen] = React.useState(false); // Snackbar state

  // Open the dialog
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Open the snackbar when "Order now" is clicked
  const handleOrderNow = () => {
    setDialogOpen(false); // Close dialog
    setSnackbarOpen(true); // Show Snackbar
  };

  // Close the snackbar
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  // Snackbar action (UNDO button and close icon)
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{
            backgroundColor: "brown",
            borderRadius: 2,
          }}
          component="img"
          alt="Zaari saree"
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

      {/* Dialog Box */}
      <React.Fragment>
        <Dialog
          open={dialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialog}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Purchase this product?"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ color: "black" }}
            >
              <b>ProductId:103</b>
              <br />
              Please click on "Order Now" if you want to purchase!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={handleCloseDialog}>
              Check Out
            </Button>
            <Button color="success" onClick={handleOrderNow}>
              Order now
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Order placed successfully!"
        action={action}
      />
    </>
  );
}
