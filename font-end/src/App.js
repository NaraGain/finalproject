import logo from './logo.svg';
import './App.css';

function App() {

const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://localhost:4000")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  
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
