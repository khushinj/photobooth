// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WebCamCapture from './components/WebCamCapture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/camera" element={<WebCamCapture />} />
      </Routes>
    </Router>
  );
}

export default App;
