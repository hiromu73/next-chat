import React from "react";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessageProps = {
  message: string;
  user: boolean;
};
export const ChatList = ({ message, user }: ChatMessageProps) => {
  // const type = key / 2 === 0 ? "justify-start" : "justify-end";
  return user ? <Box sx={{ display: "flex", p: 2, width: "100%", justifyContent: "flex-end" }}>{message}</Box> : <Box sx={{ flex: 1, p: 2, width: "100%", justifyContent: "flex-start" }}>{message}</Box>;
};
