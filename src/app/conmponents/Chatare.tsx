// "use client"
import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Textfield from "./Textfield";
import Chatmessage from "./Chatmessage";
import ChatForm from "./ChatForm";

const Chatare = () => {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");
  // 仮：初期画面とChat画面の表示をSession?で判定するか検討
  const test_1 = true;
  return test_1 ? (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ width: "70%", height: "80%", display: "flex", flexDirection: "column" }}>
        <Chatmessage />
      </Box>
      <Box sx={{ width: "60%", display: "flex", flexDirection: "column", position: "absolute", bottom: 10 }}>
        <Textfield />
        <p style={{ fontSize: 10, textAlign: "center" }}>AIは必ず負けを認めるとは限りません。諦めずに戦いましょう。</p>
      </Box>
    </Box>
  ) : (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ width: "60%", height: "90%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography variant="h4" sx={{ textAlign: "center", gap: "10px" }}>
            AIと戦ってみませんか？
          </Typography>
          <Textfield />
        </Box>
      </Box>
      <Box sx={{ width: "60%", display: "flex", flexDirection: "column", position: "absolute", bottom: 10 }}>
        <p style={{ fontSize: 10, textAlign: "center" }}>AIは必ず負けを認めるとは限りません。諦めずに戦いましょう。</p>
      </Box>
    </Box>
  );
};

export default Chatare;
