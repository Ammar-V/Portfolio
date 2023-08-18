import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [opacity, setOpacity] = useState(0.5);
  const [width, setWidth] = useState(0);

  const threshold = 600;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        let newOpacity = window.scrollY / 600;
        newOpacity = Math.min(0.95, newOpacity);
        
        setOpacity(newOpacity);
      }
      );

      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      })
      
    }
  }, []);


  return ( 
    <header style={ {backgroundColor: `rgba(242, 242, 242, ${opacity})`} }>
      <nav className="navbar">
          <Link to='/'>
            <h1>Ammar Vora</h1>
          </Link>
          {
            width > threshold &&
            
            <div className="links">
              <a href={`${window.location.origin}#about`}>About</a>
              <Link to="/" relative="">Experience</Link>
              <Link to="/contact">Contact</Link>
              {/* <Link to="/resume">Resume</Link> */}
            </div>
          }

          {
            width <= threshold &&
            <div className="links">
              <a href='/'>☰</a>
            </div>
          }
        </nav>
    </header>
    
   );
}
 
export default Navbar;