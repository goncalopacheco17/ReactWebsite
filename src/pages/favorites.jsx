import { useNavigate } from 'react-router-dom';

export default function Favorites({ favorites, onToggleFavorite }) {
  const navigate = useNavigate();

  const totalCount = favorites.length;
  const totalValue = favorites.reduce((sum, card) => sum + (parseFloat(card.price) || 0), 0);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1240px', margin: '0 auto', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 10px 0' }}>Favorites</h1>
        <p style={{ color: '#63637e', fontSize: '15px' }}>
          Tens <strong>{totalCount}</strong> {totalCount === 1 ? 'carta' : 'cartas'} guardadas 
          | Valor total: <strong style={{ color: '#7c5dfa' }}>€{totalValue.toFixed(2)}</strong>
        </p>
      </div>

      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', border: '1px dashed #1c1c2e', borderRadius: '16px', color: '#63637e' }}>
          Ainda não adicionaste nenhuma carta aos favoritos.
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 300px))', 
          gap: '20px',
          justifyContent: 'center'
        }}>
          {favorites.map(card => (
            <div 
              key={card.id} 
              onClick={() => navigate(`/card/${card.id}`)} // Navega ao clicar em qualquer parte da carta
              style={{ 
                background: '#11111e', 
                border: '1px solid #1c1c2e', 
                borderRadius: '12px', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {/* Imagem e Texto */}
              <div style={{ width: '60px', height: '80px', background: '#1c1c2e', borderRadius: '6px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={card.image} alt={card.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h5 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{card.name}</h5>
                <p style={{ margin: '0 0 4px 0', color: '#63637e', fontSize: '12px' }}>{card.category}</p>
                <span style={{ fontWeight: '800', fontSize: '15px' }}>€{card.price}</span>
              </div>

              {/* CORAÇÃO PARA REMOVER - Posicionado no canto inferior direito */}
              <button 
                onClick={(e) => {
                  e.stopPropagation(); 
                  onToggleFavorite(card);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '16px', // Coração ligeiramente mais pequeno
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '10px',
                  bottom: '10px', // Movido para baixo
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}