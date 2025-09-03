// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import OnboardingPage from './pages/OnboardingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal con layout */}
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        
        {/* Página 404 sin layout (para experiencia completa) */}
        <Route path="*" element={<NotFoundPage />} />
        
        {/* Página de formulario */}
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
    </Router>
  );
}

export default App;