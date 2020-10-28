import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message></Message> */}
      {/* <Greet name="Pranay" age="23">
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
      </Welcome> */}
    </div>
  );
}

export default App;
