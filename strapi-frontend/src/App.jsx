// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Photography from './pages/Photography';
import Management from './pages/Management';
import NotFound from './pages/NotFound';
import HeaderLayout from './layout/HeaderLayout';
import ManagedArtist from './pages/ManagedArtist';
import PhotographyCategoryPage from './pages/PhotographyCategoryPage';

export default function App() {
  return (
    <div>
      <HeaderLayout />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/photography' element={<Photography />} />
        {/* <Route path='/photography/:categorySlug' element={<PhotographyCategoryPage />} /> */}
        <Route path='/photography/musicians' element={<PhotographyCategoryPage />} />
        <Route path='/photography/equestrian' element={<PhotographyCategoryPage />} />
        <Route path='/photography/my-universe' element={<PhotographyCategoryPage />} />
        <Route path='/management' element={<Management />} />
        <Route path='/management/:artistName' element={<ManagedArtist />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
