import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            {/* <Route path="/users/:id" exact element={<Users />} />
          <Route path="/add-user" exact element={<Add />} />
          <Route path="/edit-user/:id" exact element={<Edit />} /> */}
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
