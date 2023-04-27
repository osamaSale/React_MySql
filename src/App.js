import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./components/Users";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Users />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
