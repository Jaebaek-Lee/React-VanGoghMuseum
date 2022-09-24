import './App.css';

function Header() {
  return(
    <h1><a href = "/">Thinking Vincent</a></h1>

  );
}

function App() {
  let a = 1
  const change = ()=> {
    a = a+1;
    console.log(a);
  }
  return (
    <div className="App" onClick={change}>
      <Header ></Header>
      {a}
    </div>
  );
}

export default App;
