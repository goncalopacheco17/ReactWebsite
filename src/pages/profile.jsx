import { useState } from 'react';

export default function Profile() {
  // Dados de exemplo - Ajustados conforme pedido
  const [user] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    memberSince: "January 2026",
    favoriteCategory: "NBA",
    nationality: "Portugal"
  });

  return (
    <div style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* CARD PRINCIPAL DE PERFIL */}
      <div style={{ 
        background: '#0d0d14', 
        border: '1px solid #1c1c2e', 
        borderRadius: '24px', 
        padding: '40px',
        textAlign: 'center'
      }}>
        
        {/* CÍRCULO DA FOTO */}
        <div style={{ 
          width: '120px', 
          height: '120px', 
          background: 'linear-gradient(135deg, #7c5dfa, #ff007f)', 
          borderRadius: '50%', 
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          boxShadow: '0 0 20px rgba(124, 93, 250, 0.2)'
        }}>
          👤
        </div>

        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px' }}>{user.name}</h1>
        <p style={{ color: '#63637e', margin: '0 0 40px 0', fontSize: '14px' }}>{user.email}</p>

        {/* DADOS DO UTILIZADOR */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '20px', 
          borderTop: '1px solid #1c1c2e', 
          paddingTop: '30px',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#63637e' }}>Member Since:</span>
            <span style={{ fontWeight: '600' }}>{user.memberSince}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#63637e' }}>Favorite Category:</span>
            <span style={{ fontWeight: '600', color: '#7c5dfa' }}>{user.favoriteCategory}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#63637e' }}>Nationality:</span>
            <span style={{ fontWeight: '600' }}>{user.nationality}</span>
          </div>
        </div>
      </div>
    </div>
  );
}