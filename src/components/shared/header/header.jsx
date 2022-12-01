import { useEffect, useState } from 'react';
import './header.css';

function Header()
{
    let cart = localStorage.getItem('cart');
      let cartItems = JSON.parse(cart);

    return(
  <nav className="navbar navbar-expand-md navbar-light">
  <a className="navbar-brand" href="/">Try&Cart</a>
  <button className="navbar-toggler" type="button" data-bg-toggle="collapse" data-bg-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/cart">
        Cart <span className="badge text-bg-primary">{cartItems.length}</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Login</a>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Header;