import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, Navigate } from "react-router-dom";
// import {useEffect, useState} from 'react'

// function App() {
//   const [text, setText] = useState('')

//   useEffect(() => {
//     fetch('')
//     .then((reponse) => reponse.json())
//     .then((data) => {
//     setText(data.data)
//   })
// }, [])

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nkosphendule-myschool-react" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
