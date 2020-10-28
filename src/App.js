import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Greet name="Pranay" age="23">
        <button>view</button>
      </Greet>
      <Greet name="Prakash" age="60">
        <p>props children</p>
      </Greet>
      <Greet name="Gaikwad" age="100"/>
      <Welcome  name="pranay"/>
      <Welcome  name="there">
        <p>props children class component</p>
        <button>click</button>
      </Welcome>
    </div>
  );
}

export default App;
