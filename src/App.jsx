import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, CompetitiveProgramming, Footer} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Works />
      <CompetitiveProgramming />
      <Experience />
      <div className="relative z-0">
      <Tech />
        <StarsCanvas />
        <Contact />
      </div>
      <Footer />
    </div>
     <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;