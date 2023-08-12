import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import ProjectPage from "./Components/ProjectPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
              <Route path="/projects/:id" element={ <ProjectPage /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
