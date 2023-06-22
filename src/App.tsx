import React, { useState } from "react";
import "./App.css";
import Content from "./Content";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  const [page, setPage] = useState(localStorage.getItem("page") || "dashboard");

  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider>
          <Content page={page} setPage={setPage} />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
