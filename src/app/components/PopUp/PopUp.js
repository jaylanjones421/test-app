import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  boxShadow: 24,
  p: 4,
};
export default function PopUp({ open, handleClose, data, success }) {
  const message = success
    ? `You have Successfully updated ${data.name}'s details!`
    : `Whoops! Something went wrong.`;

  const note = success
    ? "Per the mock api, nothing is actually saved to the database but the request was valid."
    : "Testing the fail case, huh?";
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" variant="h6" component="h2">
          {message}
        </Typography>
        <Typography id="modal-modal-note" variant="caption" component="p">
          {note}
        </Typography>
        <div className=" flex items-center justify-center">
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Box>
    </Modal>
  );
}
