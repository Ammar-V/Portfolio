import intro_img from '../website_intro.png';

const Home = () => {
  return ( 
    <div id="homepage">
      <div id="title-div">
        <h1>Welcome to my Portfolio!</h1>
      </div>
      <img id="front-img" src={intro_img} alt="Intro to Ammar Vora"></img>
      {/* <button>Let me walk you through my Journey</button> */}
    </div>
   );
}
 
export default Home;