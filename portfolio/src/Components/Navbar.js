import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link>
        <h1>Ammar Vora</h1>
      </Link>
      <div className="links">
        {/* <Link to="/">Ammar Vora</Link> */}
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;