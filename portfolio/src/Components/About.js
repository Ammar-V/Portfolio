import me from "../me.jpg"

const About = () => {
  return ( 
    <div id="about" className="section">
      <h2>About me - Who am I?</h2>
      <div className="about-content">
        <div className="about-description">

          <p>
            This is a bunch of Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis quibusdam excepturi hic eum? Nemo quidem deserunt dolorum id, modi, nostrum ratione temporibus ab ex optio voluptatem quo facere corporis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae iure nostrum dolorum. Sapiente maxime commodi omnis alias saepe perspiciatis, atque, accusamus aut, eaque praesentium corrupti ea aliquam cum neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus tempore ab repellat, voluptatem eaque dolor sequi natus nobis quisquam alias omnis placeat expedita doloremque excepturi quam soluta? Quos, amet.
          </p>
          {
          /*
            Add tiles for the skills sections and education 
          */
          }
          <div className="education">
            <h3>Education</h3>
            University of Toronto - Bachelor's in Applied Science and Engineering: <br />
            Computer Engineering
          </div>
        
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Python, C++, Java, Node.js</li>
              <li>Machine Learning</li>
              <li>Backend Development</li>
              <li>Assembly</li>
            </ul>
          </div>
        
          <h4>Want a more compact version of my experience? Check out my Resume.</h4>
        </div>
        
        <img className="profile-picture" src={me} alt="Ammar Vora"/>

      </div>
      
    </div>
   );
}
 
export default About;