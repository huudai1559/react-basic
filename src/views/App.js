import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';


/**
 * 2 component: class component (*) / function component (function, arrow function) Vd: const = App () => {...}
 * 
 *  
 */

function App() {
  // JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! With React JS. (Nick Nguyen)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
