import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <header>
      <nav className="navbar">
          <Link to='/'>
            <h1>Ammar Vora</h1>
          </Link>
          <div className="links">
            <Link to="/" relative="">About</Link>
            <Link to="/" relative="">Experience</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>
    </header>
    
   );
}
 
export default Navbar;