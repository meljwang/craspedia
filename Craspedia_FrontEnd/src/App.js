import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Collections from './pages/Collections.tsx';
import About from './pages/About.tsx';
import Product from './pages/Product.tsx';
import Cart from './pages/Cart.tsx';
import Orders from './pages/Orders.tsx';
import Navbar from './components/Navbar.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
