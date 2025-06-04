import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Photography from './pages/Photography';
import Management from './pages/Management';
import NotFound from './pages/NotFound';
import HeaderLayout from './layout/HeaderLayout';
import Musicians from './pages/Musicians';
import Equestrian from './pages/Equestrian';
import Universe from './pages/Universe';
import { useEffect } from 'react';

const LOCALHOST_URL = 'http://localhost:1337/api';

export default function App() {
  useEffect(() => {
    const getGlobalSettings = async () => {
      try {
        const data = await fetch(`${LOCALHOST_URL}/global-setting`);
        const settings = await data.json();
        document.body.style.fontFamily = settings?.data.fontFamily;
      } catch (error) {
        console.log(error);
      }
    };
    getGlobalSettings();
  }, []);

  return (
    <div>
      <HeaderLayout />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/photography' element={<Photography />}>
          <Route path='musicians' element={<Musicians />} />
          <Route path='equestrian' element={<Equestrian />} />
          <Route path='universe' element={<Universe />} />
        </Route>
        <Route path='/management' element={<Management />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
