import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import "./styles/style.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/:optionId" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}