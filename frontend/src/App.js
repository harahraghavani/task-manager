import './App.css';
import CustomButton from "./components/common/CustomButton"

function App() {
  const handleConsole = () => {
    console.log("Hello World");
  }
  const handleSignup = () => {
    console.log("Hello Harsh");
  }
  return (
    <div className="App">
      <CustomButton submitEvent={handleConsole} />
      <CustomButton btnText={"Signup"} />
    </div>
  );
}

export default App;
