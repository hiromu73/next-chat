import { Box } from "@mui/material";
import React from "react";
import { ChatList } from "./ChatList";

type ChatMessageProps = {
  message: string[];
};

// messageはlistなのでターン数にできる
const Chatmessage = ({ message }: ChatMessageProps) => {
  console.log("chatmessage");
  console.log(message);
  return (
    <Box sx={{ width: "100%", alignSelf: "flex-start" }}>
      {message.map((msg, index) => (
        <ChatList key={index} message={msg} user={index % 2 === 0} />
      ))}
      <Box sx={{ height: "15%" }}></Box>
    </Box>
  );
};

export default Chatmessage;
