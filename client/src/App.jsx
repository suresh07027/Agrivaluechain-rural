import { useLayoutEffect } from "react";
import { Routes, Route, useLocation, useNavigate, useNavigationType } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import TechnicalPage from "./pages/TechnicalPage";
import AudiencePage from "./pages/AudiencePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import "./styles/style.css";
import "./styles/polish.css";
import "./styles/premium.css";
import EcoPackagingPage from "./pages/EcoPackaging";
import DisplayCabinetsPage from "./pages/DisplayCabinetsPage";
import FinancePage from "./pages/FinancePage";

function ScrollToTop() {
  const { pathname, hash, state, key } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      });
      return;
    }

    if (state?.restoreScrollY != null) {
      requestAnimationFrame(() => {
        scrollToPosition(state.restoreScrollY);
      });
      return;
    }

    if (navigationType === "POP") return;

    scrollToPosition(0);
  }, [pathname, hash, state, key, navigationType]);

  return null;
}

function scrollToPosition(top) {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo({ top, left: 0, behavior: "auto" });
  root.style.scrollBehavior = previousBehavior;
}

function PageBackButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasPreviousEntry = window.history.state?.idx > 0;
  const { returnTo, returnScrollY } = location.state || {};
  const canGoBack = Boolean(returnTo || hasPreviousEntry || location.pathname !== "/");

  const handleBack = () => {
    if (returnTo) {
      navigate(returnTo, {
        replace: true,
        state: { restoreScrollY: returnScrollY },
      });
    } else if (hasPreviousEntry) {
      navigate(-1);
    } else if (location.pathname.startsWith("/projects/")) {
      navigate("/technical-support", { replace: true });
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
        <Route path="/technical-support/:audienceId" element={<AudiencePage />} />
        <Route path="/technical-support" element={<TechnicalPage />} />
        <Route path="/option1/:audienceId" element={<AudiencePage />} />
        <Route path="/option1" element={<TechnicalPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/eco-packaging" element={<EcoPackagingPage />} />
        <Route path="/display-cabinets" element={<DisplayCabinetsPage />} />
        <Route path="/financial-institutions/:sectionId" element={<FinancePage />} />
        <Route path="/:optionId" element={<ServicePage />} />

      </Routes>
      <Footer />
    </>
  );
}