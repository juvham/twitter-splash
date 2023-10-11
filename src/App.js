import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function BlueLayer() {
  return <div className='blue-layer'></div>;
}
function WhiteLayer({ hide }) {
  return <div className={`white-layer ${hide ? 'hide' : ''}`}></div>;
}
function App() {
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  return (
    <>
      <BlueLayer></BlueLayer>
      <div className={`App mask-class ${show ? 'scale-out' : ''}`}>
        <WhiteLayer hide={show}></WhiteLayer>
        <header
          className={`App-header ${show ? 'show' : ''}`}
          onAnimationEnd={() => {
            setStart(true);
          }}>
          <img
            src={logo}
            className={`App-logo ${start ? 'rotate' : ''}`}
            alt='logo'
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
