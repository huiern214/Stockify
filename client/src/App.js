import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WithNavbar from './components/WithNavbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home/Home';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import Analyze from './pages/Analyze';
import Report from './pages/Report';
import Learn from './pages/Learn';
import Profile from './pages/Profile';
import NotFound404 from './pages/NotFound404';
import StockPage from './pages/StockOverview/StockPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/stocks/:stockId" element={<StockPage/>} />
            <Route path="/news" element={<News />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/report" element={<Report />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
