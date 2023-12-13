import React from "react";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
<Route path="/About" element={<About/>} />
<Route path="/Contact" element={<Contact/>} /> 

<Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App;
