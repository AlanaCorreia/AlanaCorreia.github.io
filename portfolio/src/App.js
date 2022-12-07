import { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navegator from './components/Navegator';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  console.log(window.location.href);

  useEffect(() => {
    console.log('a');
  }, [Header, Navegator])
  return (
    <div className="App">
      <Header />
      <Navegator />
      <Content />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
