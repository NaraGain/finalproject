import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      <div className="task-box">
        <span>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."   />
        <button>Add Task</button>
        </span>
       
        <div className="output-panel">
      <h2>Task </h2>
      </div>
      </div>
    
      </header>
    </div>
  );
}

export default App;
