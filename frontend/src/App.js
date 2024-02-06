import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import AuthPage from "./views/authentication/AuthPage";
import Dashboard from "./views/dashboard/Dashboard";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage isSignup={false} />} />
          <Route path="/signup" element={<AuthPage isSignup={true} />} />
          {/* <Route path="/login" element={<div>Login</div>} />
          <Route path="/signup" element={<div>signup</div>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
