import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { useEffect } from "react";

type FloatingDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const FloatingDialog = ({ open, setOpen }: FloatingDialogProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper
        elevation={6}
        sx={{
          position: "fixed",
          bottom: "120px",
          right: "20px",
          width: 300,
          zIndex: 1300, // Dialogと同じくらいの優先度
          padding: 2,
          borderRadius: 2,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" sx={{ mb: 2 }}>
          負けを認めますか？
        </Typography>
        <Button variant="contained" onClick={handleClose}>
          OK
        </Button>
      </Paper>
    </>
  );
};

export default FloatingDialog;
