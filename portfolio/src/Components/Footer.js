import linkedin from '../linkedin.png';
import email from '../email.png';
import github from '../github.png';

const Footer = () => {
  return ( 
    <div id="footer">
      <div className="footer-content">
        <h2>Get in touch with me</h2>

        <div className="contact-links">
          <a href='https://www.linkedin.com/in/ammar-vora' target='none'><img className="contact-item" src={linkedin} alt="Contact me on LinkedIn"></img></a>
          <a href='mailto:ammarmust4@gmail.com' target='none'><img className="contact-item" src={email} alt="Contact me via Email"></img></a>
          <a href='https://www.github.com/Ammar-V' target='none'><img className="contact-item" src={github} alt="Check me out on GitHub"></img></a>

        </div>


      </div>
      <div className="copyright">
        <p>Copyright © 2023 Ammar Vora</p>
      </div>
    </div>



   );
}
 
export default Footer;