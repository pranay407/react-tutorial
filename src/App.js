import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Form from './components/Form';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import NameList from './components/NameList';
import Parent from './components/Parent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Form />
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message></Message> */}
      {/* <Greet name="Pranay" age="23">
        <button>view</button>
      </Greet>
      <Greet name="Prakash" age="60">
        <p>props children</p>
      </Greet> */}
      {/* <Greet name="Gaikwad" age="100"/>
      <Welcome  name="pranay"/> */}
      {/* <Welcome  name="there">
        <p>props children class component</p>
        <button>click</button>
      </Welcome> */}
    </div>
  );
}

export default App;
