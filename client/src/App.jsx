import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import CompanyProfile from "./pages/CompanyProfile";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/company-profile" element={<CompanyProfile />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;