import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About/About";
import Courses from "./Courses/Courses";
import Faculty from "./Faculty/Faculty";
import Notices from "./Notices/Notices";
import Contact from "./Contact/Contact"; 
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Faculty />
      <Notices/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default LandingPage;