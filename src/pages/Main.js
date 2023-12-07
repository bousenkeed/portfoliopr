import Header from './header/header';
import './Main.css';
import Contacts from './contacts/contacts';
import Home from './home/home';
import Skills from './skills/skills';
import Footer from './footer/footer';
import Projects from './projects/projects'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      );
}

      export default Main;
