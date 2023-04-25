import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/Pages/Home/Home';
import Header from './Layouts/components/Header/Header';
function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
