import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../../context';
import './header.css';

function Header(props)
{
    const {cartItems} = useContext(AppContext);

    return(
  <nav className="navbar navbar-expand-md navbar-light">
  <Link className="navbar-brand" to={"/"}>Try&Cart</Link>
  <button className="navbar-toggler" type="button" data-bg-toggle="collapse" data-bg-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to={"/cart"}>
        Cart <span className="badge text-bg-primary">{cartItems.length}</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/register"}>Login</Link>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Header;