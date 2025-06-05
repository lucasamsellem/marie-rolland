// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotographyPage from './pages/PhotographyPage';
import ManagementPage from './pages/ManagementPage';
import NotFoundPage from './pages/NotFoundPage';
import HeaderLayout from './layout/HeaderLayout';
import ManagedArtistPage from './pages/ManagedArtistPage';
import PhotographyCategoryPage from './pages/PhotographyCategoryPage';

export default function App() {
  return (
    <div>
      <HeaderLayout />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/photography' element={<PhotographyPage />} />
        <Route path='/photography/musicians' element={<PhotographyCategoryPage />} />
        <Route path='/photography/equestrian' element={<PhotographyCategoryPage />} />
        <Route path='/photography/my-universe' element={<PhotographyCategoryPage />} />
        <Route path='/management' element={<ManagementPage />} />
        <Route path='/management/:artistName' element={<ManagedArtistPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
