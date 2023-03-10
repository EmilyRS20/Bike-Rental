import React from 'react';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Register from '../pages/Register';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import BikeListing from "../pages/BikeListing";
import BikeDetails from "../pages/BikeDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";


const Routers = () => {
    return (
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/bikes" element={<BikeListing />} />
          <Route path="/bikes/:slug" element={<BikeDetails />} />

          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
    };
export default Routers;
