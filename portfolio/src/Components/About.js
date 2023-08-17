import me from "../pics/me.jpg"

const About = () => {
  return ( 
    <div id="about" className="section">
      <h2>About me - Who am I?</h2>
      <div className="about-content">
        <div className="about-description">

          <p>
            Hey 👋 my name is Ammar! My passion for building things drives my interest in computers, software, and machine learning.
            <br />
            <br />
            As a Computer Engineering student at the University of Toronto, I seek to combine my determination to solve complex problems with my curiosity about how and why things work. Whether it is building an autonomous rover, working on the perception system of a self-driving car, or using computer vision to solve complex medical tasks, I'm always interested in learning about how I can apply my knowledge to practical issues around me. Through my work, I have come to understand the principles of engineering design, teamwork, and above all, the importance of creating a system for feedback.
            <br />
            <br />
            If you want to learn more about my experiences, discuss potential collaborations, or just want to chat about things related to ML and robotics, feel free to contact me!
          </p>
          {
          /*
            Add tiles for the skills sections and education 
          */
          }
          {/* <div className="education">
            <h3>Education</h3>
            University of Toronto - Bachelor's in Applied Science and Engineering: <br />
            Computer Engineering
          </div> */}
        
          {/* <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Python, C/C++, Java, Node.js</li>
              <li>Machine Learning</li>
              <li>Backend Development</li>
              <li>Assembly</li>
            </ul>
          </div> */}
        
          <h4>Want a more compact version of my experience? Check out my Resume.</h4>
        </div>
        
        <img className="profile-picture" src={me} alt="Ammar Vora"/>

      </div>
      
    </div>
   );
}
 
export default About;