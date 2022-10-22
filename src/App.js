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
    <div className="content">
      <h3>Lord of the rings api</h3>
      <LotrBook></LotrBook>

{/*       <input type="text" name="chap" onChange={e => setChap(e.target.value)}/>
      <button onClick={PrintValue}>Search</button> */}
      {/* <p>Books:
        <LotrBook id="5cf58077b53e011a64671583" chap="1"/>
      </p> */}
{/*       <p name="data">{data}</p> */}
    </div>
  );
}

export default App;
