import './App.css';
import LotrBook from './LotrBook';

function App() {

  return (
    <div className="content">
      <h3>Lord of the rings api</h3>
      <p>Books:
        <LotrBook id="5cf58077b53e011a64671583" chap="1"/>
      </p>
    </div>
  );
}

export default App;
