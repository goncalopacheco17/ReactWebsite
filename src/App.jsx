import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// 1. IMPORTAÇÕES DAS PÁGINAS E ESTILOS
import Home from './pages/home';
import TradingCards from './pages/tradingCards';
import Favorites from './pages/favorites';
import Profile from './pages/profile';
import CardDetails from './pages/cardDetails';
import './index.css'; 

// 2. ADICIONA AQUI DE VOLTA O IMPORT DA TUA NAVBAR (Ajusta o caminho se for necessário)
import Navbar from './components/navbar'; 


// COMPONENTE FOOTER INTEGRADO (Com larguras corrigidas!)

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    color: '#8888a3',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s ease',
    width: 'fit-content', // <-- Garante que o link só ocupa o espaço exato do texto!
    display: 'block'
  };

  return (
    <footer style={{
      background: '#06060d',
      borderTop: '1px solid #1c1c2e',
      padding: '40px 20px',
      fontFamily: 'system-ui, sans-serif',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 'auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '30px',
        maxWidth: '1240px',
        margin: '0 auto',
        paddingBottom: '30px'
      }}>
        {/* Coluna Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #ff007f, #7c5dfa)',
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              🎴
            </div>
            <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px' }}>
              Card<span style={{ color: '#7c5dfa' }}>Track</span>
            </span>
          </div>
          <p style={{ color: '#63637e', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
            Track card values, discover rare collectibles, and follow the market in real time.
          </p>
        </div>

    
        {/* Coluna Categorias POPULAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: '#fff', fontSize: '14px', fontWeight: '700', margin: 0 }}>NAVIGATION</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}>Home</a>
            <a href="/trading-cards?category=All" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}>Catalog</a>
            <a href="/favorites" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#7c5dfa'} onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}>Favorites</a>
            <a href="/profile" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#7c5dfa'} onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}>Profile</a>
          </div>
        </div>
      </div>

      <div style={{ height: '1px', background: '#1c1c2e', maxWidth: '1240px', margin: '0 auto' }} />

      <div style={{ maxWidth: '1240px', margin: '0 auto', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', color: '#63637e', fontSize: '12px' }}>
        <span>&copy; {currentYear} CardTrack. All rights reserved.</span>
        <span>Built for Collectors </span>
      </div>
    </footer>
  );
}

// =========================================================================
// COMPONENTE PRINCIPAL
// =========================================================================
export default function App() {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (card) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === card.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== card.id);
      } else {
        return [...prev, card];
      }
    });
  };

  return (
    <Router>
      <div style={{ 
        background: '#09090e', 
        minHeight: '100vh', 
        color: '#fff',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* 3. COLOCAMOS A NAVBAR AQUI */}
        <Navbar />
        
        {/* Espaço de segurança para afastar o conteúdo do footer */}
        <div style={{ flex: '1 0 auto', paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trading-cards" element={<TradingCards favorites={favorites} onToggleFavorite={handleToggleFavorite} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} onToggleFavorite={handleToggleFavorite} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/card/:id" element={<CardDetails favorites={favorites} onToggleFavorite={handleToggleFavorite} />} />
          </Routes>
        </div>

        
        <Footer />
        
      </div>
    </Router>
  );
}