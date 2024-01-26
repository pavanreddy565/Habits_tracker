import logo from './logo.svg';
import './App.css';

function Background(){
  return (
    <div className='now'>
      <div className='back'></div>
      <div className="container">
          <div className="log"></div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
     <Background/>
     {/* <p>hello</p> */}
    </div>
  );
}

export default App;
