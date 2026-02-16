import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
// import { SpeedInsights } from "@vercel/speed-insights"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    {/* <SpeedInsights/> */}
    </>
  )
}

export default App
