
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import { Element } from "react-scroll";
import Contact from "./components/ContactUs";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
    const intervalId = setInterval(fetchProjects, 2000); 
    return () => clearInterval(intervalId);
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <>
      <Router>
        <Header />
        <Element name="about-section">
          <About />
        </Element>
        <Element name="project-section">
          <Portfolio projects={projects} />
        </Element>

        <Element name="contact-section">
          <Contact/>
        </Element>
        <Footer />
      </Router>
    </>
  );
};

export default App;
