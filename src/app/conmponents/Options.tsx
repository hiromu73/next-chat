import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import React from "react";
import { useChatContext } from "./ChatProvider";

type Props = {
  setOptions?: (options: string) => void;
  setIsOpen?: (isOpen: boolean) => void;
  setMode?: (model: string) => void;
  setType?: (model: string) => void;
  mode?: boolean;
};
const Options = ({ setOptions, mode }: Props) => {
const { setMode, setType } = useChatContext();

  return setOptions ? (
    // 以下disabled判定が必要
    <FormControl fullWidth disabled={false}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ color: "#fff" }}>
        <p>Agree or Disagree ?</p>
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "option",
          id: "uncontrolled-native",
        }}
        onChange={(e) => setOptions!(e.target.value)}
      >
        <option value={"賛成"}>Agree</option>
        <option value={"反対"}>Disagree</option>
      </NativeSelect>
    </FormControl>
  ) : mode ? (
    <FormControl fullWidth disabled={false} sx={{ mt: 2 }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ color: "#fff" }}>
        <p>Mode</p>
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "option",
          id: "uncontrolled-native",
        }}
        onChange={(e) => setMode!(e.target.value)}
      >
        <option value={"Normal"}>Normal</option>
        <option value={"Easy"}>Easy</option>
        <option value={"Hard"}>Hard</option>
      </NativeSelect>
    </FormControl>
  ) : (
    <FormControl fullWidth disabled={false} sx={{ mt: 2 }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ color: "#fff" }}>
        <p>Type</p>
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "option",
          id: "uncontrolled-native",
        }}
        onChange={(e) => setType!(e.target.value)}
      >
        <option value={"Normal"}>普通</option>
        <option value={"Uncle"}>おじさん風</option>
        <option value={"Gal"}>ギャル風</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Options;
