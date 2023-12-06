import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Event from "./Components/Event";
import Form from "./Components/Common Pages/Formpage";
import Adminpg from "./Components/Adminpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/form" element={<Form />} />
          <Route path="/admin" element={<Adminpg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
