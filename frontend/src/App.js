import './App.css';
import CustomButton from "./components/common/CustomButton"
import FormInput from './components/common/FormInput';

function App() {
  return (
    <div className="App">
      <FormInput label='harsh raghavani' placeholder='Enter Password' type='password' helperText='please enter password' />
    </div>
  );
}

export default App;
