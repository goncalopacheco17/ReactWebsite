import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ['Soccer', 'UFC', 'NBA', 'NFL', 'WWE', 'F1'];

  const linkStyle = {
    color: '#8888a3',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  return (
    <nav style={{
      background: '#06060d',
      borderBottom: '1px solid #1c1c2e',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'system-ui, sans-serif',
      position: 'relative',
      zIndex: 100
    }}>
      
      {/* LOGO */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{
          background: 'linear-gradient(135deg, #ff007f, #7c5dfa)',
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          🎴
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px', lineHeight: '1' }}>
            Card<span style={{ color: '#7c5dfa' }}>Track</span>
          </span>
          <span style={{ color: '#63637e', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.5px', marginTop: '2px' }}>
            TRACK PRICES. BUILD VALUE.
          </span>
        </div>
      </Link>

      {/* LINKS DE NAVEGAÇÃO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        
        <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}>
          🏠 HOME
        </Link>

        {/* CONTAINER DO DROPDOWN (COM HOVER CORES E ZONA SEGURA) */}
        <div 
          style={{ position: 'relative', padding: '10px 0', margin: '-10px 0' }} // Cria um espaço invisível à volta do botão
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button 
            onClick={() => navigate('/trading-cards?category=All')}
            style={{
              ...linkStyle,
              background: 'none',
              border: 'none',
              padding: 0,
              fontFamily: 'inherit',
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}
          >
            🃏 TRADING CARDS <span style={{ fontSize: '10px' }}>▼</span>
          </button>

          {/* MENU PENDENTE */}
          {isDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              background: '#11111e',
              border: '1px solid #1c1c2e',
              borderRadius: '12px',
              padding: '8px 0',
              minWidth: '160px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              marginTop: '5px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 110
            }}>
              {/* PONTE INVISÍVEL: Preenche o espaço de 5px entre o botão e o menu */}
              <div style={{ position: 'absolute', top: '-15px', left: 0, right: 0, height: '15px', background: 'transparent' }} />

              <Link 
                to="/trading-cards?category=All"
                onClick={() => setIsDropdownOpen(false)}
                style={{ color: '#fff', padding: '10px 16px', textDecoration: 'none', fontSize: '13px', fontWeight: '500', transition: 'background 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.background = '#1c1c2e'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                All Cards
              </Link>
              
              <div style={{ height: '1px', background: '#1c1c2e', margin: '4px 0' }} />

              {categories.map(cat => (
                <Link
                  key={cat}
                  to={`/trading-cards?category=${cat}`}
                  onClick={() => setIsDropdownOpen(false)}
                  style={{ color: '#8888a3', padding: '10px 16px', textDecoration: 'none', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = '#1c1c2e'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8888a3'; }}
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/favorites" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}>
          💜 FAVORITES
        </Link>

        <Link to="/profile" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#8888a3'}>
          👤 PROFILE
        </Link>

      </div>
    </nav>
  );
}