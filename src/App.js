import { useEffect, useState } from 'react';
import './App.css';
import LotrBook from './LotrBook';

function App() {
/*   const [chap, setChap] = useState ("1");
  const [data, setData] = useState("hello world");

  function PrintValue(e){
    e.preventDefault()
    console.log(chap)
  }
 */
  return (
    <div className="app">
      <div className="content">
        <h1>Lord of the rings api</h1>
        <LotrBook></LotrBook>
      </div>
    </div>
  );
}

export default App;
