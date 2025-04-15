import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminSignIn from "./pages/AdminSignIn";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}
