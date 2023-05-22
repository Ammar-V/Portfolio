import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <header>
      <nav className="navbar">
          <Link to='/'>
            <h1>Ammar Vora</h1>
          </Link>
          <div className="links">
            {/* <Link to="/">Ammar Vora</Link> */}
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/portfolio">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>
    </header>
    
   );
}
 
export default Navbar;