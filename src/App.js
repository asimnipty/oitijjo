import React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import Product from "./component/Product";
import Hero from "./component/Hero";
import Blog from "./component/Blog";
import Home from "./component/Home";
import Lifestyle from "./component/Lifestyle";
import Footer from "./component/Footer"
import ProCard from "./component/ProCard";



function App() {
  return (
    <div >
      <Header />
      <Hero />
      <ProCard />

      
    </div>
  );
}

export default App;
