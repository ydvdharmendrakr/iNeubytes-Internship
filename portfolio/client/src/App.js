import Layout from "./components/Layout/Layout";
import About from './pages/About/About'
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from './pages/WorkExp/WorkExp'
import ScrollToTop from "react-scroll-to-top";
import {BrowserRouter as Main, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme]=useTheme()

  return (
    <>
    <div id={theme}>
       
      <Main>
        <ToastContainer />
        <Layout />
        <MobileNav/>
           <Routes >
                  <Route  path="/" element={<Home/>}/>
                  <Route  path="/about" element={<About/>}/>
                  <Route  path="/education" element={<Education/>}/>
                  <Route  path="/techstack" element={<TechStack/>}/>
                  <Route  path="/projects" element={<Projects/>}/>
                  <Route  path="/experince" element={<WorkExp/>}/>
                  <Route  path="/contact" element={<Contact/>}/>
           </Routes>
           <Footer/>
      </Main>
    </div>
      <ScrollToTop smooth color="white" style={{ backgroundColor: '#bdd7bdee', borderRadius: '90px'}} />
    </>
  );
}

export default App;
