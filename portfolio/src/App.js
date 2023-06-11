import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
              <Route path="/" element={ <Home /> }/>
          </Routes>
          <About />
          <Experience />

        </div>
      </div>
    </Router>
  );
}

export default App;
