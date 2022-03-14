import React from "react";
import { Container } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SearchCountry } from "./components/SearchCountry";
import { DisplayCountry } from "./components/DisplayCountry";
import { DisplayWeather } from "./components/Displayweather";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SearchCountry />} />
        <Route path="/:name" element={<DisplayCountry />} />
        <Route path="/:name/weather" element={<DisplayWeather />} />
      </Routes>
    </Container>
  );
}

export default App;
