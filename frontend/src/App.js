import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDisclosure } from "@chakra-ui/react";
import "./App.css";
import { useRef } from "react";
import Auth from "./views/authentication/Auth"
import PrivateRoute from "./router/PrivateRoute";
import Task from "./views/task/Task";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth isSignup={false} />} />
          <Route path="/signup" element={<Auth isSignup={true} />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Task />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
