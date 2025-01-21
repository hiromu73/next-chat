import { Box } from "@mui/material";
import React from "react";
import { ChatList } from "./ChatList";

type ChatMessageProps = {
  message: string[];
};

const Chatmessage = ({ message }: ChatMessageProps) => {
  console.log("chatmessage");
  console.log(message);
  return (
    <Box sx={{ flex: 1, p: 1, width: "100%", maxWidth: "100%", height: "100%", alignSelf: "flex-start", overflow: "auto" }}>
      {message.map((msg, index) => (
        <ChatList key={index} message={msg} user={index % 2 === 0} />
      ))}
    </Box>
  );
};

export default Chatmessage;
