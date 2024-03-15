import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WithNavbar from './components/WithNavbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import Analyze from './pages/Analyze';
import Learn from './pages/Learn';
import Profile from './pages/Profile';
import NotFound404 from './pages/NotFound404';

function App() {
  const stock={
    'name':'Tesla Inc',
    'symbol':'TSLA',
    'price':178.9,
    'imageUrl':teslaicon,
    'changes':3.07,
    'isIncreasing':true
  }

  const response={
    "symbol":'TSLA',
    "historical":[
      {"date":"2024-01-01","price":10},
      {"date":"2024-01-02","price":9},
      {"date":"2024-01-03","price":12},
      {"date":"2024-01-04","price":25},
      {"date":"2024-01-05","price":12},
      {"date":"2024-01-06","price":1},
      {"date":"2024-01-07","price":4},
      {"date":"2024-01-08","price":3},
      {"date":"2024-01-09","price":15},
      {"date":"2024-01-10","price":19},
    ]
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/stocks/:stockId" element={<StockDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/analyze" element={<Analyze />} />
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
