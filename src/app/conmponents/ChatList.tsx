import React from "react";
import { Box, Paper, Typography } from "@mui/material";
type ChatMessageProps = {
  message: string;
  user: boolean;
};
export const ChatList = ({ message, user }: ChatMessageProps) => {
  return (
    <Box sx={{ display: "flex", p: 2, width: "100%", justifyContent: user ? "flex-end" : "flex-start", borderRadius: "30px", mb: 1 }}>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          maxWidth: "70%",
          borderRadius: "20px",
          bgcolor: (theme) => theme.palette.secondary.main,
        }}
      >
        <Typography variant="subtitle2">{message}</Typography>
      </Paper>
    </Box>
  );
};
