import './App.css';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Podcast from './Pages/Podcast/Podcast'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/podcast"} element={<Podcast />}>
            <Route path={":podcastId"} element={<Podcast />}/>
          </Route>
          <Route path={"/About"} element={<About />} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    
  );
}

export default App;
