import React from "react";
import FormInput from "./components/common/FormInput";
import FormSelect from "./components/common/FormSelect";
import { useForm } from "react-hook-form"
import CustomButton from "./components/common/CustomButton";
import Form from "@mui/material";

function App() {
  const { control, handleSubmit } = useForm()
  console.log(control)
  const handleSelectChange = (event) => {
    console.log("Selected value:", event.target.value);
  };

  const handleConsoleLog = () => {
    console.log("Submit event from")
  }

  const selectOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  return (
    <div className="App">
      <Form>
        <FormSelect control={control} options={selectOptions} label={"Options"} error={false} onChangeEvent={handleSelectChange} name="options" helperText="this is an error" />
        <CustomButton btnText="Submit" submitEvent={handleConsoleLog} />
      </Form>
    </div>
  );
}

export default App;
