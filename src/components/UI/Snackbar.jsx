import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const Snackbar = ({ handleClose }) => {
  const { severity, message, open } = useSelector((state) => state.snackbar);

  return (
    <div>
      <MuiSnackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};
