import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'
//import {ReactComponent as Logo} from '../../logo/images.svg' //getting logo file



//functional component (as there is no data/state that is to be changed)

const Header = () => (
    <div className = "header" >
        {/*<Link className="logo-container" to="/">
            <Logo className="logo"/>
//</Link>*/}
        <div className="options">
            <button className="option" to="/">Trending </button> &nbsp;
            <button className="option" to="/">Archive </button> &nbsp;
            <button className="option" to="/">Contact </button>  
             
        </div>
    </div>
    
)

export default Header;

