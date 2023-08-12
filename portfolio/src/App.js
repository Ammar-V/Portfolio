import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import ProjectPage from "./Components/ProjectPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <About />
                  <Experience />
                </>
              } />
              <Route path="/project" element={ <ProjectPage /> } />
          </Routes>
          

        </div>
      </div>
    </Router>
  );
}

export default App;
