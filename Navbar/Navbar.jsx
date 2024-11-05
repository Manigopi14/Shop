import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import Cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../../assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("Shop")
    const {getTotalcartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className='nav'>
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}> <Link style={{textDecoration:"none"}} to={'/'}>Shop</Link> {menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}> <Link style={{textDecoration:"none"}} to={'/mens'}>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{textDecoration:"none"}} to={'/womens'}>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{textDecoration:"none"}} to={'/kids'}>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-cart">
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/cart'}><img src={Cart_icon} alt="cart" /></Link>
                <div className="nav-cart-count">{getTotalcartItems()}</div>
            </div>

        </div>
        
    )
}

export default Navbar
