import React from "react";
import FormInput from "./components/common/FormInput";

function App() {
  const handleSelectChange = (event) => {
    console.log("Selected value:", event.target.value);
  };

  const selectOptions = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  return (
    <div className="App">
      <FormInput type="select" label="Select Option" onChangeEvent={handleSelectChange} options={selectOptions} />
    </div>
  );
}

export default App;
