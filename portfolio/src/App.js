import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import ProjectPage from "./Components/ProjectPage";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Resume />
        <Navbar />
          <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <div className="content">
                    <About />
                    <Experience />
                  </div>
                </>
              } />
              <Route path="/projects/:id" element={ <ProjectPage /> } />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
