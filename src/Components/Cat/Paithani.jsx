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
import { Box } from "@mui/material";

// Transition for dialog box
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Updated component with tags
export default function Paithani({ tags = ["paithani", "traditional"] }) {
  // Tags as props
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

  // Snackbar action (close button)
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
    <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{
              backgroundColor: "brown",
              borderRadius: 2,
            }}
            component="img"
            alt="Paithani sarees"
            height="260"
            image="https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ="
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "brown", fontWeight: "bold" }}
            >
              Paithani
            </Typography>
            <Typography variant="body2" sx={{ color: "brown" }}>
              <b>ProductId:101 </b>Paithani sarees are traditional Maharashtrian
              sarees, distinguished by their rich silk fabric and stunning
              handwoven peacock or floral motifs in vibrant colors.
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
            maxWidth="sm"
          >
            <DialogTitle>{"Purchase this product?"}</DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{ color: "black" }}
              >
                <b>ProductId:101</b>
                <br />
                Please click on "Order Now" if you want to purchase.
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
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          message="Order placed successfully!"
          action={action}
        />
      </>
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{
              backgroundColor: "brown",
              borderRadius: 2,
            }}
            component="img"
            alt="Silk saree"
            height="280"
            image="https://www.jyothisareemandir.com/cdn/shop/files/GPS67_3.jpg?v=1713515090&width=1946"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "brown", fontWeight: "bold" }}
            >
              Paithani
            </Typography>
            <Typography variant="body2" sx={{ color: "brown" }}>
              <b>ProductId:111 </b>Paithani sarees are luxurious, smooth fabric
              known for its natural sheen and elegance, often used in
              high-quality sarees.
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
            maxWidth="sm"
          >
            <DialogTitle>{"Purchase this product?"}</DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{ color: "black" }}
              >
                <b>ProductId:111</b>
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
    </Box>
  );
}
