import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Weather from "./Pages/Weather"
import Ressult from "./Pages/Ressult"


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/result" element={<Ressult/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
