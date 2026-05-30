import { useLocation, useNavigate } from 'react-router-dom';
import { cardsData } from '../data/cardsData';
import CardAtleta from '../components/cardAtleta';

export default function TradingCards({ favorites, onToggleFavorite }) {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. A URL manda em tudo! Lemos a categoria diretamente da barra de endereço
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category') || 'All';

  // 2. Quando clicamos num botão da barra lateral, mudamos a URL
  const handleCategoryChange = (categoryName) => {
    navigate(`/trading-cards?category=${categoryName}`);
  };

  // 3. Filtramos os cartões com base no que está escrito na URL
  const filteredCards = selectedCategory === 'All'
    ? cardsData
    : cardsData.filter(card => card.category === selectedCategory);

  const categories = ['All', 'Soccer', 'UFC', 'NBA', 'NFL', 'WWE','F1'];

  const getIcon = (cat) => {
    switch(cat) {
      case 'All': return '🃏';
      case 'Soccer': return '⚽';
      case 'UFC': return '🥊';
      case 'NBA': return '🏀';
      case 'NFL': return '🏈';
      case 'WWE': return '🤼';
      case 'F1': return '🏎️';
      default: return '🎴';
    }
  };

  return (
    <div style={{ color: '#fff', fontFamily: 'system-ui, sans-serif', maxWidth: '1240px', margin: '0 auto', padding: '30px 20px' }}>
      
      <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '30px', letterSpacing: '-0.5px' }}>
        Trading Cards Catalog
      </h2>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'flex-start', 
        gap: '30px',
        width: '100%'
      }}>
        
        {/* ================= 1. GRELHA DE CARTÕES (LADO ESQUERDO) ================= */}
        <main style={{ 
          flex: '1', 
          width: 'calc(100% - 290px)'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row',
            gap: '15px', 
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'stretch'
          }}>
            {filteredCards.length > 0 ? (
              filteredCards.map(card => {
                const isFavorite = favorites?.some(fav => fav.id === card.id) || false;
                return (
                  <CardAtleta 
                    key={card.id} 
                    card={card} 
                    onToggleFavorite={onToggleFavorite} 
                    isFavorite={isFavorite} 
                  />
                );
              })
            ) : (
              <div style={{ color: '#63637e', fontSize: '14px', padding: '40px 10px' }}>
                No cards found for this category.
              </div>
            )}
          </div>
        </main>

        {/* ================= 2. BARRA LATERAL DE FILTROS (LADO DIREITO) ================= */}
        <aside style={{ 
          width: '260px', 
          minWidth: '260px', 
          background: '#11111e', 
          border: '1px solid #1c1c2e', 
          borderRadius: '16px', 
          padding: '24px',
          boxSizing: 'border-box'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '13px', fontWeight: '700', color: '#63637e', letterSpacing: '1px' }}>
            CATEGORIES
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {categories.map(cat => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)} // <-- Chama a função que atualiza a URL
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: isSelected ? 'rgba(124, 93, 250, 0.15)' : 'transparent',
                    color: isSelected ? '#7c5dfa' : '#fff',
                    border: isSelected ? '1px solid #7c5dfa' : '1px solid transparent',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14px',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    if(!isSelected) e.currentTarget.style.color = '#7c5dfa';
                  }}
                  onMouseLeave={(e) => {
                    if(!isSelected) e.currentTarget.style.color = '#fff';
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{getIcon(cat)}</span>
                  {cat}
                </button>
              );
            })}
          </div>
        </aside>

      </div>
    </div>
  );
}