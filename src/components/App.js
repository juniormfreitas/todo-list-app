import React from "react";
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
