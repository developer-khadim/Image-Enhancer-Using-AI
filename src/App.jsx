import React from "react"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-6xl">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App
