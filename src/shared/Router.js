import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ArticlePage from "../pages/ArticlePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news/articles/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
