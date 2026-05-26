export default function Profile({ favoritesCount }) {
  return (
    <div style={{ color: '#fff', fontFamily: 'sans-serif', maxWidth: '500px', margin: '40px auto', padding: '20px', background: '#1a1a1a', borderRadius: '12px', border: '1px solid #333' }}>
      <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginTop: 0 }}>My Profile</h2>
      
      <div style={{ margin: '20px 0' }}>
        <p><strong>Nome:</strong> Colecionador Pro</p>
        <p><strong>Email:</strong> admin@cardhub.com</p>
        <p><strong>Membro desde:</strong> 2026</p>
      </div>

      <div style={{ background: '#222', padding: '15px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ff4757' }}>
        <h3 style={{ margin: 0, color: '#ff4757' }}>{favoritesCount}</h3>
        <p style={{ margin: '5px 0 0 0', color: '#aaa', fontSize: '14px' }}>Cartas nos teus Favoritos</p>
      </div>
    </div>
  );
}