"use client";
import React, { useActionState, useEffect, useRef, useState, useTransition } from "react";
import TextField from "@mui/material/TextField";
import { Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { actionMessage, State } from "../api/chat/send/route";
import { useChatContext } from "./ChatProvider";

export const inisialState: State = {
  result: null,
  message: null,
  role: null,
};

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
};

const Textfield = ({ setMessages }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPending, startTransition] = useTransition();
  const { title, setTitle, option } = useChatContext();
  const actionMessageWithOptions = async (state: State, formData: FormData) => {
    if (title == "") {
      return actionMessage(state, formData, option);
    } else {
      return actionMessage(state, formData);
    }
  };
  const [state, dispatch] = useActionState(actionMessageWithOptions, inisialState);

  const textformstyle: object = {
    p: 1,
    flexGrow: 1,
    "& .MuiOutlinedInput-root": {
      height: "auto",
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
    // TextFieldの高さ調整
    "& .MuiInputBase-root": {
      alignItems: "center", // 中央寄せ
      padding: "1px 14px",
    },
    // テキストエリアの高さ調整
    "& .MuiInputBase-input": {
      padding: "0",
      "&::placeholder": {
        textAlign: "left", // placeholderを中央寄せ
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // 完全な中央寄せ
        width: "100%",
      },
    },
    // テキストが入力されたときのスタイル
    "& .MuiInputBase-input:not(:placeholder-shown)": {
      textAlign: "left",
    },
  };

  const adjustHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const trimmedValue = input.replace(/\r?\n/g, "").trim();
    setIsButtonDisabled(trimmedValue === "");
  }, [input]);

  const handleSubmit = async (formData: FormData) => {
    // getの名前はinputのname
    const userMessage = formData.get("userMessage") as string;

    startTransition(async () => {
      try {
        setMessages((prev: string[]) => [...prev, userMessage]);
        const result = await actionMessageWithOptions(state, formData);
        if (result.message) {
          setMessages((prev: string[]) => [...prev, result.message!]);
        }
        if (formRef.current) {
          formRef.current.reset();
        }
        setInput("");
        if (title == "") {
          setTitle(userMessage);
        }
      } catch (e) {
        console.error("送信エラー:", e);
      }
    });
  };

  return (
    <form ref={formRef} action={handleSubmit} style={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", overflow: "hidden", minHeight: "56px", borderRadius: "40px", width: "100%", bgcolor: (theme) => theme.palette.secondary.main, transition: "height 0.2s ease" }}>
        <TextField sx={textformstyle} value={input} name="userMessage" placeholder="AIの規制について...の様に議題を入力して下さい。" multiline fullWidth onChange={adjustHeight} inputRef={textareaRef} />
        <Box sx={{ display: "flex", mr: 1, mb: 1, flexShrink: 0 }}>
          <IconButton
            onClick={() => {
              console.log("RAGの添付");
            }}
          >
            <AddPhotoAlternateIcon />
          </IconButton>
          <IconButton disabled={isButtonDisabled || isPending} type="submit">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </form>
  );
};

export default Textfield;
