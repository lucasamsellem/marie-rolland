import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotographyPage from './pages/PhotographyPage';
import ManagementPage from './pages/ManagementPage';
import NotFoundPage from './pages/NotFoundPage';
import HeaderLayout from './layout/HeaderLayout';
import ManagedArtistPage from './pages/ManagedArtistPage';
import PhotographyCategoryPage from './pages/PhotographyCategoryPage';
import LegalTermsPage from './pages/LegalTermsPage';
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';

function PageTransitionWrapper({ children }) {
  return (
    <motion.div
      key='page'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <HeaderLayout />

      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route
            path='/'
            element={
              <PageTransitionWrapper>
                <HomePage />
              </PageTransitionWrapper>
            }
          />
          <Route
            path='/about'
            element={
              <PageTransitionWrapper>
                <AboutPage />
              </PageTransitionWrapper>
            }
          />
          <Route path='/photography' element={<PhotographyPage />} />
          <Route path='/photography/musicians' element={<PhotographyCategoryPage />} />
          <Route path='/photography/equestrian' element={<PhotographyCategoryPage />} />
          <Route path='/photography/my-universe' element={<PhotographyCategoryPage />} />
          <Route
            path='/management'
            element={
              <PageTransitionWrapper>
                <ManagementPage />
              </PageTransitionWrapper>
            }
          />
          <Route
            path='/management/:artistName'
            element={
              <PageTransitionWrapper>
                <ManagedArtistPage />
              </PageTransitionWrapper>
            }
          />
          <Route
            path='/legal-terms'
            element={
              <PageTransitionWrapper>
                <LegalTermsPage />
              </PageTransitionWrapper>
            }
          />
          <Route
            path='*'
            element={
              <PageTransitionWrapper>
                <NotFoundPage />
              </PageTransitionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
