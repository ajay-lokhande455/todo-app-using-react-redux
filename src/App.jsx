import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/component/Header";
import HomePage from "../src/pages/HomePage";
import TodoInput from "../src/component/TodoInput";
import TodoList from "../src/component/TodoList";
import Footer from "./component/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true); 

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", 
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode); 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Pass the darkMode state and toggleTheme function to Header */}
        <Header toggleTheme={toggleTheme} isDarkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-todo" element={<TodoInput />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </Router>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
