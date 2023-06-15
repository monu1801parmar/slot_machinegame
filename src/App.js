import React from "react";
import Slot from "./Slot";
import './App.css'

function App()
{
  return<>
  
  <h1 className="head" >Welcome to 🎰 <span style={{fontWeight:'bold'}}>Slot Machine Game 🎰</span> </h1>
  <div className="main">
  <div className="container">
  <Slot x='😄' y='🎅' z='😄' />
  <Slot x='🍌' y='🎅🍎' z='🍎' />
  <Slot x='🎅' y='🎅' z='🎅' />
  <Slot x='😀' y='🫠' z='😊'/>
  </div>
  </div>
  </>
}

export default App;