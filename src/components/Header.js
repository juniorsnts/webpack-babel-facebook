import React from 'react';

function Header() {
  return (
    <div className="header">
      <span id="text-face">facebook</span>
      <div className="profile-button">
        <span id="text-profile">Meu Perfil</span>
        <ion-icon name="contact"></ion-icon>
      </div>
    </div>
  )
}

export default Header;