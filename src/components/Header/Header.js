import React from 'react';
// import {uuidv4 as uuid} from 'uuidv4';


const Header = () => {
    const menu = [ 'How it Works','Download','About Us'];
    const menuItems = menu.map( (item,i) => {
        return (
            <li className="nav__item"><a href={`#` + item} key={i} className="nav__link">{item}</a></li>
        )
    });
    
    return (
    <header>
        <nav class="nav">
            <a class="nav__title--link" href="./index.html">
                <h3 class="nav__title">Grub is Blind</h3>
                <h4 class="nav__title--sub">"Connecting you with your neighborhood foodies"</h4>
            </a>
            <ul class="nav__list">
                {menuItems}   
            </ul>
        </nav>
    </header>
    );
}

export default Header;