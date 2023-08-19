import intro_img from '../website_intro.png';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { section } = useParams();

  useEffect(() => {
    if (section === 'home') {
      const homeElem = document.getElementById('homepage');
      homeElem.scrollIntoView();
    }

  }, [section]);

  return ( 
    <div id="homepage">
      {/* <a id="homepage-click" href="../#homepage" alt={"homepage click"} style={{display: 'none'}}>_</a> */}
      <div id="title-div">
        <h1>Welcome to my Portfolio!</h1>
      </div>
      { window.innerWidth > 1000 && <img id="front-img" src={intro_img} alt="Intro to Ammar Vora"></img> }
      {/* <button>Let me walk you through my Journey</button> */}
    </div>
   );
}
 
export default Home;