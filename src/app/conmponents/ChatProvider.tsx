"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ChatContextType = {
  message: string[];
  setMessage: React.Dispatch<React.SetStateAction<string[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [option, setOption] = useState<string>("Agree");
  const [title, setTitle] = useState<string>("");
  const [mode, setMode] = useState<string>("Normal");
  const [type, setType] = useState<string>("Normal");

  const value = {
    message,
    setMessage,
    isOpen,
    setIsOpen,
    option,
    setOption,
    title,
    setTitle,
    mode,
    setMode,
    type,
    setType,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
