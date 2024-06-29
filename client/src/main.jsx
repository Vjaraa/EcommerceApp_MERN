import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import ProductDetail from '../src/components/ProductDetail.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserRegister from "./components/UserRegister.jsx";
import LoginPage from './pages/LoginPage.jsx';
import SessionStartedPage from './pages/SessionStartedPage.jsx';
import { ShoppingCartProvider } from '../src/components/ShoppingCartContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<App/>}></Route>
          <Route exact path="/product/:id" element={<ProductDetail/>} />
          <Route exact path="/UserRegister" element={<UserRegister/>}></Route>
          <Route exact path="/LoginPage" element={<LoginPage/>}></Route>
          <Route exact path="/SessionStartedPage" element={<SessionStartedPage/>}></Route>
        </Routes>
      </Router>
    </ShoppingCartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);