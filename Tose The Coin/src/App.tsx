import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const CoinTossPage = lazy(() => import('./pages/CoinTossPage').then(module => ({ default: module.CoinTossPage })));
const SpinWheelPage = lazy(() => import('./pages/SpinWheelPage').then(module => ({ default: module.SpinWheelPage })));
const DiceRollPage = lazy(() => import('./pages/DiceRollPage').then(module => ({ default: module.DiceRollPage })));
const RandomNumberPage = lazy(() => import('./pages/RandomNumberPage').then(module => ({ default: module.RandomNumberPage })));
const YesNoPage = lazy(() => import('./pages/YesNoPage').then(module => ({ default: module.YesNoPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(module => ({ default: module.TermsPage })));
const CookiesPage = lazy(() => import('./pages/CookiesPage').then(module => ({ default: module.CookiesPage })));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage').then(module => ({ default: module.DisclaimerPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div className="flex-center" style={{ minHeight: '80vh' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin-toss" element={<CoinTossPage />} />
          <Route path="/spin-wheel" element={<SpinWheelPage />} />
          <Route path="/dice-roll" element={<DiceRollPage />} />
          <Route path="/random-number" element={<RandomNumberPage />} />
          <Route path="/yes-no" element={<YesNoPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieConsent />
    </Router>
  );
}

export default App;
