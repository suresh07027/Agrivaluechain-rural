import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, useNavigationType } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import TechnicalPage from "./pages/TechnicalPage";
import AudiencePage from "./pages/AudiencePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import "./styles/style.css";

function ScrollToTop() {
  const { pathname, hash, state } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      });
      return;
    }

    if (state?.restoreScrollY != null) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: state.restoreScrollY, left: 0, behavior: "auto" });
      });
      return;
    }

    if (navigationType === "POP") return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, state, navigationType]);

  return null;
}

function PageBackButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasPreviousEntry = window.history.state?.idx > 0;
  const { returnTo, returnScrollY } = location.state || {};
  const canGoBack = Boolean(returnTo || hasPreviousEntry || location.pathname !== "/");

  const handleBack = () => {
    if (hasPreviousEntry) {
      navigate(-1);
    } else if (returnTo) {
      navigate(returnTo, {
        replace: true,
        state: { restoreScrollY: returnScrollY },
      });
    } else if (location.pathname.startsWith("/projects/")) {
      navigate("/option1", { replace: true });
    } else if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  };

  return (
    <button
      type="button"
      className="page-back-button"
      onClick={handleBack}
      disabled={!canGoBack}
      aria-label="Go back to the previous page"
      title="Go back"
    >
      &larr;
    </button>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header>
        <PageBackButton />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/option1/:audienceId" element={<AudiencePage />} />
        <Route path="/option1" element={<TechnicalPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/:optionId" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}
