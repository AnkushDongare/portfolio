import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/blogs' element={<BlogsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
