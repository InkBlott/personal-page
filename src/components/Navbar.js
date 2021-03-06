import { NavLink } from 'react-router-dom';
import whiteLogo from '../images/ravenlogoWhite.png';
import '../styles/main.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            
            <NavLink exact to='/personal-page'>
                <img src={whiteLogo} alt='raven logo' className='navLogo navbar-brand'></img>
            </NavLink>
            <button className="navbar-toggler navToggle" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <NavLink exact to='/personal-page' className='nav-link' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink exact to='/projects' className='nav-link' activeClassName='active'>
                        Projects
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;