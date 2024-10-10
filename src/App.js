import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex flex-1">
          <Sidebar /> {/* Sidebar selalu terlihat */}
          <Main />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/* link install : https://tailwindcss.com/docs/guides/create-react-app */
