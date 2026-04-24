import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <div>
<div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  
  </BrowserRouter>
</div>


    </div>
  );
}

export default App;
