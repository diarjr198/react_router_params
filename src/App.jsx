import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id/:slug" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
