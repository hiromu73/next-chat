import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

type Props = {
  setModel: (model: string) => void;
};
const Mode = (setModel: Props) => {
  return (
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
        onChange={(e) => setModel.setModel(e.target.value)}
      >
        <option value={"Agree"}>Normal</option>
        <option value={"Disagree"}>Disagree</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Mode;
