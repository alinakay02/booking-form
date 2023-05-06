import React from "react";
import { createRoot } from 'react-dom/client';
//import { Comments, Navigation } from './Components.js';

function App() {
  return (
      <select name="select_tower" id="tower" required="required">
        <option value=""></option>
        <option value="А">A</option>
        <option value="Б">Б</option>
      </select>
  );
}

export default App;
