import React from "react";
import { Routes, Route } from "react-router-dom";
import A from "../pages/A";
import B from "../pages/B";
import C from "../pages/C";

function Main() {
  return (
    <main className="flex-1 p-4 ml-64">
      {" "}
      {/* Memberikan margin left untuk konten utama */}
      <Routes>
        <Route path="/menu-a" element={<A />} />
        <Route path="/menu-b" element={<B />} />
        <Route path="/menu-c" element={<C />} />
      </Routes>
    </main>
  );
}

export default Main;
