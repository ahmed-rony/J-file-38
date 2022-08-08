import logo from './logo.svg';
import './App.css';
import Users from './component/Users/Users';
import { useState } from 'react';

function App() {
  const [familiar, setFamiliar] = useState(false)
  return (
    <div className="App">
      <h2>Is friend: {familiar.toString()}</h2>
      {/* "!familiar"- die jei value ache tar biporit-ta hobe; */}
      <button onClick={() => setFamiliar(!familiar)}>Toggler Friend</button>  
      <Users familiar={familiar}></Users>
    </div>
  );
}

export default App;
