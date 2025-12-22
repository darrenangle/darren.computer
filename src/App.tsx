import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { DesignSystem } from "./components/DesignSystem";
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";

function AppContent() {
  const location = useLocation();
  const isAbout = location.pathname === "/about";

  return (
    <>
      <div className={location.pathname === "/" ? "" : "container"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<DesignSystem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {isAbout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
