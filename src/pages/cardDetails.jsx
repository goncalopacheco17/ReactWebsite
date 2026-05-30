import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { cardsData } from '../data/cardsData';

export default function CardDetails({ favorites, onToggleFavorite }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Forçar a página a ir para o topo do ecrã sempre que mudamos de carta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Procura o atleta na tua lista pelo ID
  const card = cardsData.find(c => c.id === parseInt(id));

  if (!card) {
    return (
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '80px', fontFamily: 'system-ui, sans-serif' }}>
        <h2>Card not found in the catalog!</h2>
        <button onClick={() => navigate('/')} style={{ background: '#7c5dfa', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', marginTop: '15px' }}>
          Back to Home
        </button>
      </div>
    );
  }

  const isFavorite = favorites?.some(fav => fav.id === card.id) || false;

  const gridLabelStyle = { color: '#63637e', fontSize: '13px', padding: '14px 0' };
  const gridValueStyle = { color: '#fff', fontSize: '14px', fontWeight: '500', padding: '14px 0', textAlign: 'right' };

  const teamLabel = card.category === "WWE" ? "Brand" : "Club";
  const positionLabel = card.category === "UFC" ? "Division" : card.category === "WWE" ? "Role" : "Position";

  return (
    <div style={{ color: '#fff', fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '10px 0' }}>
      
      {/* Breadcrumb de Navegação */}
      <div style={{ color: '#63637e', fontSize: '13px', marginBottom: '25px', display: 'flex', gap: '8px' }}>
        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span> &gt; 
        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/trading-cards')}>Trading Cards</span> &gt; 
        <span style={{ color: '#7c5dfa', fontWeight: '600' }}>{card.name}</span>
      </div>

      {/* Layout Duas Colunas */}
      <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start' }}>
        
        {/* COLUNA ESQUERDA - Imagem da Carta */}
        <div style={{ flex: '1', maxWidth: '420px', width: '100%' }}>
          <div style={{ 
            background: '#11111f', 
            border: '1px solid #1c1c2e', 
            borderRadius: '24px', 
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '480px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <img src={card.image} alt={card.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px' }} />
          </div>
        </div>

        {/* COLUNA DIREITA - Especificações */}
        <div style={{ flex: '1.5', width: '100%' }}>
          
          <div style={{ background: '#11111e', border: '1px solid #1c1c2e', borderRadius: '16px', padding: '30px', position: 'relative' }}>
            
            {/* Botão Favorito Redondo */}
            <button 
              onClick={() => onToggleFavorite?.(card)}
              style={{
                position: 'absolute', top: '30px', right: '30px',
                background: isFavorite ? 'rgba(124, 93, 250, 0.1)' : '#1c1c2e',
                border: isFavorite ? '1px solid #7c5dfa' : '1px solid #252538',
                borderRadius: '50%', width: '42px', height: '42px', cursor: 'pointer',
                fontSize: '18px', color: isFavorite ? '#7c5dfa' : '#63637e',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
              }}
            >
              {isFavorite ? '💜' : '🤍'}
            </button>

            <h1 style={{ margin: '0 0 5px 0', fontSize: '30px', fontWeight: '700', paddingRight: '50px' }}>{card.name}</h1>
            <div style={{ color: '#7c5dfa', fontSize: '14px', fontWeight: '600', marginBottom: '15px' }}>
              {card.set} • <span style={{ color: '#ffd700' }}>{card.rarity}</span>
            </div>
            
            <div style={{ display: 'inline-block', background: '#1c1c30', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', marginBottom: '25px' }}>
              🎴 {card.category}
            </div>

            {/* Preço */}
            <div style={{ borderTop: '1px solid #1c1c2e', paddingTop: '20px' }}>
              <div style={{ color: '#63637e', fontSize: '12px', fontWeight: 'bold' }}>MARKET VALUE</div>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#ffd700', marginTop: '5px' }}>€{card.price.toLocaleString('pt-PT')}.00</div>
            </div>

            {/* Grelha de Atributos */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px', borderTop: '1px solid #1c1c2e', marginTop: '25px', paddingTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #1c1c2e' }}>
                <span style={gridLabelStyle}>{teamLabel}</span>
                <span style={gridValueStyle}>{card.club}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #1c1c2e' }}>
                <span style={gridLabelStyle}>Card Number</span>
                <span style={gridValueStyle}>#{card.id}/100</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #1c1c2e' }}>
                <span style={gridLabelStyle}>Nationality</span>
                <span style={gridValueStyle}>{card.nationality}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #1c1c2e' }}>
                <span style={gridLabelStyle}>Card Type</span>
                <span style={{ ...gridValueStyle, color: '#7c5dfa' }}>{card.cardType}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #1c1c2e' }}>
                <span style={gridLabelStyle}>{positionLabel}</span>
                <span style={gridValueStyle}>{card.position}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #1c1c2e' }}>
                <span style={gridLabelStyle}>Released</span>
                <span style={gridValueStyle}>{card.released}</span>
              </div>
            </div>

          </div>

          {/* Secção About */}
          <div style={{ background: '#11111e', border: '1px solid #1c1c2e', borderRadius: '16px', padding: '25px', marginTop: '25px' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '700' }}>About This Card</h3>
            <p style={{ margin: 0, color: '#8888a3', fontSize: '14px', lineHeight: '1.6' }}>
              {card.description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}