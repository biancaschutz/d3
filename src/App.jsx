const base = import.meta.env.BASE_URL;
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
