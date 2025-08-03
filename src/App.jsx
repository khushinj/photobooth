// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WebcamCapture from './components/WebcamCapture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/camera" element={<WebcamCapture />} />
      </Routes>
    </Router>
  );
}

export default App;
