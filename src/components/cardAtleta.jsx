import { useNavigate } from 'react-router-dom';

export default function CardAtleta({ card, onToggleFavorite, isFavorite }) {
  const navigate = useNavigate();

  if (!card) return null;

  return (
    <div 
      onClick={() => navigate(`/card/${card.id}`)}
      style={{
        background: '#11111e',
        border: '1px solid #1c1c2e',
        borderRadius: '16px',
        width: '195px', // <-- Diminuído de 220px para 195px para caberem 4 na mesma fila!
        padding: '14px',
        cursor: 'pointer',
        position: 'relative',
        transition: 'transform 0.2s, border-color 0.2s',
        fontFamily: 'system-ui, sans-serif',
        boxSizing: 'border-box'
      }}
      onMouseOver={(e) => e.currentTarget.style.borderColor = '#7c5dfa'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1c1c2e'}
    >
      {/* Botão de Favorito */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(card);
        }}
        style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', zIndex: 10
        }}
      >
        {isFavorite ? '💜' : '🤍'}
      </button>

      {/* Foto do Atleta */}
      <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', background: '#1c1c2e', borderRadius: '10px', overflow: 'hidden' }}>
        <img src={card.image} alt={card.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>

      {/* Informações Rápidas */}
      <h4 style={{ color: '#fff', fontSize: '13px', margin: '0 0 4px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {card.name}
      </h4>
      <p style={{ color: '#63637e', fontSize: '11px', margin: '0 0 12px 0' }}>
        {card.category}
      </p>
      
      <div style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '15px' }}>
        €{card.price.toLocaleString('pt-PT')}.00
      </div>
    </div>
  );
}