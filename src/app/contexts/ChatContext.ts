import { createContext } from "react";

export type ChatInfo = {
  title: string;
  option: string;
  message: string
};

export const ChatContext = createContext<ChatInfo>({ title: "", option: "Agree" ,message: "" });
