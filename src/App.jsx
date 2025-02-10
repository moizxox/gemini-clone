import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

const App = () => {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <Main />
    </section>
  );
};

export default App;
