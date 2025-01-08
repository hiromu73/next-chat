import React, { useActionState, useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, IconButton, Input, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { actionMessage, State } from "../api/chat/actions";
import { on } from "events";

export const inisialState: State = {
  result: null,
  message: null,
};

const Textfield = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [state, dispatch] = useActionState(actionMessage, inisialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const adjustHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const trimmedValue = text.replace(/\r?\n/g, "").trim(); // 改行と前後の空白を除去
    setIsButtonDisabled(trimmedValue === "");
  }, [text]);

  console.log("state");
  console.log(state);

  const handleSubmit = async () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      dispatch(formData);
      formRef.current.reset();
      setText("");
    }
  };

  const textformstyle: object = {
    flexGrow: 1,
    "& .MuiOutlinedInput-root": {
      height: "auto",
      "& fieldset": {
        border: "none", // 通常時の枠線を消す
      },
      "&:hover fieldset": {
        border: "none", // ホバー時の枠線を消す
      },
      "&.Mui-focused fieldset": {
        border: "none", // フォーカス時の枠線を消す
      },
    },
    // TextFieldの高さ調整
    "& .MuiInputBase-root": {
      alignItems: "center", // 中央寄せ
      padding: "8px 14px",
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
      textAlign: "left", // 入力テキストは左寄せ
    },
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      style={{
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", overflow: "hidden", minHeight: "56px", borderRadius: "40px", width: "100%", bgcolor: (theme) => theme.palette.secondary.main, transition: "height 0.2s ease" }}>
        <TextField sx={textformstyle} value={text} name="userMessage" placeholder="質問を入力して下さい" multiline fullWidth onChange={adjustHeight} inputRef={textareaRef} />
        <Box sx={{ display: "flex", mr: 1, mb: 1, flexShrink: 0 }}>
          <IconButton
            onClick={() => {
              console.log("RAGの添付");
            }}
          >
            <AddPhotoAlternateIcon />
          </IconButton>
          {state.message}
          <IconButton disabled={isButtonDisabled} type="submit">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </form>
  );
};

export default Textfield;
