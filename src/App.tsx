import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import DemoPage from './demos/DemoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/demo/:id" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
