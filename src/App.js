import { Layout } from "./Component/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { About } from "./Component/Header/About.jsx";
import { Home } from "./Component/Home/Home";
import { History } from "./Component/Header/History.jsx";
import { Portfolio } from "./Component/Header/Portfolio.jsx";
import { Contact } from "./Component/Header/Contact.jsx";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>



        
      </Routes>
    </>
  );
}

export default App;
