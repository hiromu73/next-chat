import { Box, Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { ChatList } from "./ChatList";

type ChatMessageProps = {
  message: string[];
};

const Chatmessage = ({ message }: ChatMessageProps) => {
  // const [messages, setMessages] = useState<string[]>([]);
  console.log("chatmessage");
  console.log(message);

  const [input, setInput] = useState<string>("");

  return (
    <Box sx={{ flex: 1, p: 2, width: "100%", maxWidth: "100%", height: "100%", alignSelf: "flex-start", overflowY: "scroll" }}>
      {message.map((msg, index) => (
        <ChatList key={index} message={msg} />
      ))}
    </Box>
  );
};

export default Chatmessage;
