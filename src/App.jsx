import React from "react";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Home from "./components/Home";
import Card from "./components/Card";
import Shop from "./components/Shop";

const App = () => {
  return (
    <div className="overflow-hidden w-screen">
      <Navbar />
      <Bot />
      <Home />
      <Card />
      <Shop />
    </div>
  );
};

export default App;
