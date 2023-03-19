import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Home from './Pages/AdminHome';
import Search from './Pages/Search';
import Report from './Pages/CreateReport';
import Field from './Pages/CreateField';
import Newuser from './Pages/CreateAccount';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<Newuser />} />
          <Route path="/field" element={<Field />} />
          <Route path="/report" element={<Report />} />
          <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
