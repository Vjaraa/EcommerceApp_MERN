import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductPoleraNegra from "./pages/ProductPoleraNegra.jsx";
import ProductPoleraBlanca from "./pages/ProductPoleraBlanca.jsx";
import ProductPoleraGris from "./pages/ProductPoleraGris.jsx";
import ProductPoleraRosada from "./pages/ProductPoleraRosada.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route exact path="/ProductPoleraNegra" element={<ProductPoleraNegra/>}></Route>
        <Route exact path="/ProductPoleraBlanca" element={<ProductPoleraBlanca/>}></Route>
        <Route exact path="/ProductPoleraGris" element={<ProductPoleraGris/>}></Route>
        <Route exact path="/ProductPoleraRosada" element={<ProductPoleraRosada/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
