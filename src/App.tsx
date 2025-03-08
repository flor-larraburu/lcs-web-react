import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Wines from "./pages/wines";
import Footer from "./components/footer";
import "./styles/layout.scss"; // Importamos los estilos de layout

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/wines" element={<Wines />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;