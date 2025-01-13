import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

type Props = {
  setModel?: (model: string) => void;
  setType?: (type: string) => void;
  mode: boolean;
};
const Mode = ({ setModel, setType, mode }: Props) => {
  return mode ? (
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
        onChange={(e) => setModel!(e.target.value)}
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

export default Mode;
