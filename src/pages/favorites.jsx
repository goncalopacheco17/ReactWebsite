import CardAtleta from '../components/cardAtleta';

export default function Favorites({ favorites, onToggleFavorite }) {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '10px' }}>
      <h2 style={{ color: '#fff', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        My Favorites ❤️
      </h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', marginTop: '20px', justifyContent: 'center' }}>
        {favorites.map(card => (
          <CardAtleta 
            key={card.id} 
            card={card} 
            onToggleFavorite={onToggleFavorite}
            isFavorite={true} 
          />
        ))}
        
        {favorites.length === 0 && (
          <p style={{ color: '#aaa', marginTop: '20px' }}>Ainda não adicionaste nenhuma carta aos favoritos.</p>
        )}
      </div>
    </div>
  );
}