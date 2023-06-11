import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <header>
      <nav className="navbar">
          <a href='#homepage'>
            <h1>Ammar Vora</h1>
          </a>
          <div className="links">
            <a href="#about">About</a>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>
    </header>
    
   );
}
 
export default Navbar;