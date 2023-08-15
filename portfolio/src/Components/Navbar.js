import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <header>
      <nav className="navbar">
          <Link to='/'>
            <h1>Ammar Vora</h1>
          </Link>
          <div className="links">
            <a href={`${window.location.origin}#about`}>About</a>
            <Link to="/" relative="">Experience</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/resume">Resume</Link> */}
          </div>
        </nav>
    </header>
    
   );
}
 
export default Navbar;