import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import React from "react";

type Props = {
  setOptions: (options: string) => void;
};
const Options = (setOptions: Props) => {
  return (
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
        onChange={(e) => setOptions.setOptions(e.target.value)}
      >
        <option value={"Agree"}>Agree</option>
        <option value={"Disagree"}>Disagree</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Options;
