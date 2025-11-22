import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { WorkList } from "./components/WorkList";
import { WorkPostPage } from "./components/WorkPostPage";
import { DesignSystem } from "./components/DesignSystem";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";
import { posts } from "./data/posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkList posts={posts} />} />
        <Route path="/work/:postId" element={<WorkPostPage />} />
        <Route path="/design" element={<DesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
