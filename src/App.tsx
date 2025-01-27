import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Categorias from './pages/categorias/Categorias';
import CadastrarCategoria from './pages/categorias/CadastrarCategoria';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/cadastrarcategoria" element={<CadastrarCategoria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
