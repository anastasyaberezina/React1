import './Message.css';

function Message(props) {
    return (
      <div>
        <input type="text" id="inputId" />
        <button onClick={props.onTextChange}>text</button>
        <p>{props.text}</p>
      </div>
    );
  }