import './styles.css';
import Dropdown from './Dropdown';
import { useState } from 'react';
function App() {
  const[selected, setSelected]= useState("Choose One")
  return (
    <div className="App">
      {/* custom dropdwon */}
      <Dropdown selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
