import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';
import Input from './components/Input';



function App() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        alert(`You entered: ${inputValue}`);
    };
  const [count, setCount] = useState(0)

  return (
      <>
          <div style={styles.container}>
              <h1>React Input and Button Example</h1>
              <Input placeholder="Enter some text..." onChange={handleInputChange}/>
              <Button text="Show Alert" onClick={handleButtonClick}/>
          </div>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  );
}
const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
    },
};


export default App
