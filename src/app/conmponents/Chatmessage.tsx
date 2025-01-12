import { Box } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Chat = { id: "string"; sender: "ai" | "user"; message: "string" };
type ChatList = Chat[];

const Chatmessage = () => {
  return (
    <Box sx={{ flex: 1, p: 2, width: "100%", maxWidth: "100%", height: "100%", alignSelf: "flex-start" }}>
      {/* {data.map((chat, index) => (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {chat.message}
       </ReactMarkdown>
      ))} */}
    </Box>
  );
};

export default Chatmessage;
