import React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import Product from "./component/Product";
import Hero from "./component/Hero";
import Blog from "./component/Blog";
import Home from "./component/Home";
import Lifestyle from "./component/Lifestyle";
import Footer from "./component/Footer"



function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
