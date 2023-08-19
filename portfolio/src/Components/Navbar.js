import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [opacity, setOpacity] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const [hamburger, setHamburger] = useState(false);
  /* TODO: When clicking outside the hamburger menu, the menu should close*/

  const threshold = 600;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        let newOpacity = window.scrollY / 600;
        newOpacity = Math.min(0.95, newOpacity);
        if (hamburger) newOpacity = 0.95;

        setOpacity(newOpacity);
      }
      );

      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      })
      
    }
  }, [hamburger]);

  useEffect(() => {
    let newOpacity =  window.scrollY / 600;
    newOpacity = Math.min(0.95, newOpacity);
    
    if (hamburger) newOpacity = 0.95;
    setOpacity(newOpacity);


  }, [hamburger]);


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
          <div className="hamburger">
            <p onClick={ () => setHamburger(!hamburger) }>☰</p>
          </div>
        }
      </nav>
      {
          width <= threshold && hamburger &&

          <div className="links" style={ {backgroundColor: `rgba(242, 242, 242, ${opacity})`} }>
            <a href={`${window.location.origin}#about`}>About</a>
            <Link to="/" relative="">Experience</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/resume">Resume</Link> */}
          </div>
        }
    </header>
    
   );
}
 
export default Navbar;