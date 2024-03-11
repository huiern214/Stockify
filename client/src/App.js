import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import SignInSide from './components/SignInSide';
// import SignUpSide from './components/SignUpSide';
import Home from './components/Home';
// import Profile from './components/Profile';
import NotFound404 from './components/NotFound404';
import WithNavbar from './components/WithNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ToastContainer /> */}
        <Routes >
          {/* <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUpSide />} /> */}

          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
