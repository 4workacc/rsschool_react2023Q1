import { Route, Routes } from "react-router-dom";
import React from "react";
import AboutUs from "./Pages/AboutUs";
import FormPage from "./Pages/FormPage/FormPage";
import NotFound404 from "./Pages/NotFound404";
import MainPage from "./Pages/MainPage";
import Layout from "./Pages/Layout";

function App() { 
  return (    
     <div>
       <Routes>
        <Route path="/" element={<Layout />}>      
          <Route id="Main Page" index element={<MainPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      </div>    
  )
}

export default App


