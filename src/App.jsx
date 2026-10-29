const base = import.meta.env.BASE_URL;
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectB from "./pages/ProjectB";
import Project1 from "./pages/Project1";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moduleb" element={<ProjectB />} />
          <Route path="/module1" element={<Project1 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
