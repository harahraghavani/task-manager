import React from "react";
import FormInput from "./components/common/FormInput";
import FormSelect from "./components/common/FormSelect";
import { useForm } from "react-hook-form";
import CustomButton from "./components/common/CustomButton";

function App() {
  const { control, handleSubmit } = useForm();

  const handleSelectChange = (event) => { };

  const handleConsoleLog = (data) => {
    if (data) {
      console.log(data);
    }
  };

  const selectOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  return (
    <div className="App">
      <form onSubmit={handleSubmit(handleConsoleLog)}>
        <FormInput
          control={control}
          name={"name"}
          label={"Name"}
          required={true}
          rules={{ required: "Name is required" }}
        />
        <FormSelect
          control={control}
          options={selectOptions}
          label={"Options"}
          error={false}
          onChangeEvent={handleSelectChange}
          name="options"
          helperText="this is an error"
          required={true}
          rules={{ required: "Options is required" }}
        />
        <CustomButton btnText="Submit" submitEvent={handleConsoleLog} />
      </form>
    </div>
  );
}

export default App;
