import "./styles.css";

import { Route, Routes } from "react-router";

import About from "./routes/About";
import Certificate from "./routes/Certificates";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Product from "./routes/Products";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/certificates" element={<Certificate/>}/>
      </Routes>
    </div>
  );
}
