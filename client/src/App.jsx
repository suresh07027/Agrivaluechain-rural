import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import TechnicalPage from "./pages/TechnicalPage";
import AudiencePage from "./pages/AudiencePage";
import "./styles/style.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      {!pathname.startsWith("/option1") && pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/option1/:audienceId" element={<AudiencePage />} />
        <Route path="/option1" element={<TechnicalPage />} />
        <Route path="/:optionId" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}