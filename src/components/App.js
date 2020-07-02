import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../scss/main.scss";

import Layout from "../templates/LayoutWrap";
import Sidebar from "./Sidebar";
import Content from "./Content";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Content />
    </Layout>
  );
}

export default App;
