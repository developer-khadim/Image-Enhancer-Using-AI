import React from "react"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 flex flex-col items-center py-12 px-4 transition-all duration-300 pattern-dots pattern-blue-100 pattern-bg-white pattern-opacity-10 pattern-size-2 select-none ">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 border border-white/20  ">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App
