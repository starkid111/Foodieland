import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import { Routes, Route , useLocation } from 'react-router-dom';
import BlogList from './Pages/BlogList';
import Contact from './Pages/Contact';
import RecipeDetails from './Pages/RecipeDetails';
import BlogPost from './Pages/BlogPost';
import { useEffect } from 'react';
import About from './Pages/About';





  
function App() {
 
  const {pathname} = useLocation();

  useEffect(()=> {
       window.scrollTo({top:0 , behavior : "smooth"})
  },[pathname])


  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/BlogList' element={<BlogList/>} />
      <Route path='/Contact' element= {<Contact />} />
      <Route path='/Recipes/:id' element={<RecipeDetails />} />
      <Route path='/Blogs/:id'   element = {<BlogPost />} />
      <Route path='/About' element={<About />} />
       </Routes>
     <Footer /> 
    </div>
  );
}

export default App;
