import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Footer from "./components/footer/footer";
// import Main from "./components/main/main";
import HomePage from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/home" element = {<HomePage/>}/>

    </Routes>
    </BrowserRouter>


   {/* <HomePage /> */}
   {/* <Main />
   <Footer/> */}
  </React.StrictMode>
);


