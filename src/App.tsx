import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./index.css";

const NavLink = ({ to, children, isLogin = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const linkClass = isLogin 
    ? 'login-link' 
    : 'text-gray-600';

  return (
    <Link 
      to={to} 
      className={`nav-link ${linkClass} ${isActive ? 'current-page' : ''}`}
    >
      {children}
    </Link>
  );
};

export default function App() {
  return (
    <Router>
      <nav className="bg-white border-b border-gray-500 py-4">
        <div className="nav-container flex justify-between items-center">
          <div className="nav-left flex">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">Sobre nosotros</NavLink>
          </div>
          <div className="nav-right flex">
            <NavLink to="/login" isLogin>Login</NavLink>
            <NavLink to="/register">Registro</NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}