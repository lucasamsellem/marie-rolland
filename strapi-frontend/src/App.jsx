// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Photography from './pages/Photography';
import Management from './pages/Management';
import NotFound from './pages/NotFound';
import HeaderLayout from './layout/HeaderLayout';
import Musicians from './pages/Musicians';
import Equestrian from './pages/Equestrian';
import Universe from './pages/Universe';
import ManagedArtist from './pages/ManagedArtist';

export default function App() {
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
        <Route path='/management/:artistName' element={<ManagedArtist />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
