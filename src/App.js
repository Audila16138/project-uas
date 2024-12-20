import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PesanWO from "./pages/PesanWO";
import WOKu from "./pages/WOKu";
import Ulasan from "./pages/Ulasan";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pesan-wo" element={<PesanWO />} />
            <Route path="/wo-ku" element={<WOKu />} />
            <Route path="/ulasan" element={<Ulasan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
