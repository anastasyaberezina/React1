import logo from './logo.svg';
import './App.css';
import './Message.js';
import './Message.css'

function App() {
  const [text, setText] = useState("");
  function processing() {
    setText(inputId.value);
  }
  return <Message text={text} onTextChange={processing} />;
}


export default App;