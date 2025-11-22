import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { WritingList } from "./components/WritingList";
import { WritingPostPage } from "./components/WritingPostPage";
import { DesignSystem } from "./components/DesignSystem";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";
import { posts } from "./data/posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<WritingList posts={posts} />} />
        <Route path="/writing/:postId" element={<WritingPostPage />} />
        <Route path="/design" element={<DesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
