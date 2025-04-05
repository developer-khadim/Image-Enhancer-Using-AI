import React from "react"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 px-4 " >
        <Header/>
        <Home/>
        <Footer/>
     </div>
    </>
  )
}

export default App
