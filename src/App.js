import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Home from './Pages/AdminHome';
import Search from './Pages/Search';
import Report from './Pages/CreateReport';
import Field from './Pages/CreateField';
import Newuser from './Pages/CreateAccount';
import Logout from './Pages/LogOut';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from 'react';


/*
const Auth = ({App}) =>{
  const useAuthorize = () =>{
    const [errors, updateErrors] = useState(null);

    function signin(user, pass){
      fetch('../server/index.js',{
        method: "POST",
        body: JSON.stringify({
          email: `'${user}'`,
          Password: `'${pass}'`,
      }).then(res=>{
        return res
      })
      }

      )
    }
  }
  const Authorization = useAuthorize();
  <athcontext.Provider value={Authorization}>{App}</athcontext.Provider>
}


*/

export const Usercontext = createContext('');
function App() {
  const [login, changelogin] = useState('Hello World');

  const childtoparent = (data)=>{
    let data1 = `${data.first} ${data.last}`
    changelogin(data1)
  }
  console.log(login)
  return(
    <div>
      <Usercontext.Provider value={login}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login childtoparent={childtoparent}/>} />
            <Route path="/user" element={<Newuser />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/field" element={<Field />} />
            <Route path="/report" element={<Report data={login}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </Usercontext.Provider>
    </div>
  );
}
export default App;