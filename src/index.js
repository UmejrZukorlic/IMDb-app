import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./components/context";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TitlePage from "./components/TitlePage";
import { NotFoundTitle } from "./components/NotFoundPage/index.jsx";
import MoviePage from "./components/MoviePage";
import TVsPage from "./components/TVsPage";
import SearchPage from "./components/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/titlePage" element={<TitlePage />} />
          <Route path="*" element={<NotFoundTitle />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/tvs" element={<TVsPage />} />
          <Route path="/searched" element={<SearchPage />} />
        </Routes>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
