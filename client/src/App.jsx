//import { Children, useState } from "react";

import Layout from "./Layouts/Layouts";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Layout>
        <Products></Products>
      </Layout>
    </>
  );
}

export default App;
