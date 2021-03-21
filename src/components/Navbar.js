import { NavLink } from 'react-router-dom';
import whiteLogo from '../images/ravenlogoWhite.png';
import '../styles/main.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            
            <NavLink exact to='/'>
                <img src={whiteLogo} alt='raven logo' className='navLogo navbar-brand'></img>
            </NavLink>
            <button className="navbar-toggler navToggle" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <NavLink exact to='/cv' className='nav-link' activeClassName='active'>
                        CV
                    </NavLink>
                    <NavLink exact to='/projects' className='nav-link' activeClassName='active'>
                        Projects
                    </NavLink>
                    <NavLink exact to='/about-me' className='nav-link' activeClassName='active'>
                        About
                    </NavLink>
                    <NavLink exact to='/contacts' className='nav-link' activeClassName='active'>
                        Contacts
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;