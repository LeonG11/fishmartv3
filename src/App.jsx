import "./App.css";
import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import FishFish from "./Components/FishFish";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fishfish" element={<FishFish />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
