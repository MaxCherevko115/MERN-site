import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactsPage/>}/>
      <Route path="/contact/:id" element={<ContactPage/>}/>
    </Routes>
  )
}

export default App;