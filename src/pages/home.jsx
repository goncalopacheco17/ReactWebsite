import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardsData } from '../data/cardsData';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const popularCards = cardsData.slice(0, 4);
  const featuredCardImage = cardsData[0]?.image || "";

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanedQuery = searchQuery.trim().toLowerCase();
    
    if (cleanedQuery !== '') {
      const foundCard = cardsData.find(card => card.name.toLowerCase().includes(cleanedQuery));
      
      if (foundCard) {
        navigate(`/card/${foundCard.id}`);
      } else {
        alert("Atleta não encontrado! Tenta outro nome (ex: Messi, Curry...).");
      }
    }
  };

  const blockStyle = {
    flex: 1,
    background: '#11111e',
    border: '1px solid #1c1c2e',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={{ color: '#fff', fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
      
      {/* SECÇÃO HERO */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '60px 0',
        background: 'radial-gradient(circle at 80% 50%, rgba(124, 93, 250, 0.1), transparent 50%)' 
      }}>
        <div style={{ maxWidth: '550px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.1', margin: '0 0 20px 0', letterSpacing: '-1px' }}>
            TRACK CARD PRICES.<br />
            MAKE <span style={{ color: '#7c5dfa' }}>SMARTER</span> MOVES.
          </h1>
          <p style={{ color: '#8888a3', fontSize: '16px', lineHeight: '1.5', margin: '0 0 35px 0' }}>
            Real-time prices, market trends and insights for the cards you collect and trade.
          </p>

          {/* Barra de Pesquisa */}
          <form onSubmit={handleSearch} style={{ display: 'flex', background: '#11111f', border: '1px solid #252538', borderRadius: '30px', padding: '6px 6px 6px 18px', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#63637e' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search for a card..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: 'none', border: 'none', color: '#fff', width: '100%', fontSize: '15px', outline: 'none' }}
            />
            <button type="submit" style={{ background: '#7c5dfa', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
              SEARCH
            </button>
          </form>
        </div>

        {/* LADO DIREITO */}
        <div 
          onClick={() => cardsData[0] && navigate(`/card/${cardsData[0].id}`)}
          style={{ position: 'relative', width: '400px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
        >
          <div style={{ width: '190px', height: '270px', background: '#131322', borderRadius: '16px', border: '1px solid #25253d', transform: 'rotate(-12deg) translateX(20px) translateY(10px)', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', position: 'absolute' }}></div>
          <div style={{ width: '190px', height: '270px', background: '#11111f', borderRadius: '16px', border: '1px solid #7c5dfa', transform: 'rotate(6deg) translateX(25px)', position: 'absolute', boxShadow: '0 20px 50px rgba(124,93,250,0.25)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>
            {featuredCardImage && <img src={featuredCardImage} alt="Featured" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }} />}
          </div>
        </div>
      </div>

      {/* SECÇÃO DOS 4 BLOCOS DE NAVEGAÇÃO */}
      <div style={{ display: 'flex', gap: '20px', margin: '40px 0' }}>
        <div onClick={() => navigate('/trading-cards')} style={blockStyle}>
          <div style={{ background: '#1c1c30', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🎴</div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Browse Cards</h4>
            <span style={{ color: '#7c5dfa', fontSize: '12px', fontWeight: 'bold' }}>View All Cards →</span>
          </div>
        </div>
        <div style={blockStyle}>
          <div style={{ background: '#1c1c30', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📊</div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Reliable Prices</h4>
            
          </div>
        </div>
        <div onClick={() => navigate('/favorites')} style={blockStyle}>
          <div style={{ background: '#1c1c30', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>💜</div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Your Favorites</h4>
            <span style={{ color: '#7c5dfa', fontSize: '12px', fontWeight: 'bold' }}>View Favorites →</span>
          </div>
        </div>
        <div onClick={() => navigate('/profile')} style={blockStyle}>
          <div style={{ background: '#1c1c30', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👤</div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Your Profile</h4>
            <span style={{ color: '#7c5dfa', fontSize: '12px', fontWeight: 'bold' }}>Go to Profile →</span>
          </div>
        </div>
      </div>

      {/* SECÇÃO POPULAR CARDS COM GRID 4 COLUNAS */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>🔥 POPULAR CARDS</h3>
          <span onClick={() => navigate('/trading-cards')} style={{ color: '#7c5dfa', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>VIEW ALL →</span>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px' 
        }}>
          {popularCards.map(card => (
            <div 
              key={card.id} 
              onClick={() => navigate(`/card/${card.id}`)}
              style={{ 
                background: '#11111e', 
                border: '1px solid #1c1c2e', 
                borderRadius: '12px', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px', 
                cursor: 'pointer',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ width: '60px', height: '80px', background: '#1c1c2e', borderRadius: '6px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={card.image} alt={card.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h5 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{card.name}</h5>
                <p style={{ margin: '0 0 4px 0', color: '#63637e', fontSize: '12px' }}>{card.category}</p>
                <span style={{ fontWeight: '800', fontSize: '15px' }}>€{card.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}