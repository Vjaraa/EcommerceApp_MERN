import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductDetail from '../src/components/ProductDetail.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate,
} from "react-router-dom";
import UserRegister from "./components/UserRegister.jsx";
import LoginPage from './pages/LoginPage.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route exact path="/product/:id" element={<ProductDetail/>} />
        <Route exact path="/UserRegister" element={<UserRegister/>}></Route>
        <Route exact path="/LoginPage" element={<LoginPage/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);