import './App.css';
import React, {useState} from 'react';

function Header(props) {
  return(
    <h1><a href = "/" className = "animated" onClick={event => {
      event.preventDefault();
      props.onChangeMode();
      document.querySelector('body').style.backgroundColor = '#1A1B28';
      document.querySelector('a').style.color = 'white';
    }}>{props.title}</a></h1>
  );
}

function Nav(props) {
  const list = [];
  return(
    <ul>
      {props.list}
    </ul>
  )
}

function App() {
  const [mode, setMode] = useState('THINKING VINCENT');
  if (mode === 'THINKING VINCENT') {
    
  }
  return (
    <div className="App">
      <Header title = "Thinking Vincent" onChangeMode = {() => {setMode('THINKING VINCENT');}}></Header>
      <Nav></Nav>
    </div>
  );
}

export default App;
