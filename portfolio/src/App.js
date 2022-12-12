import { useDispatch } from 'react-redux';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navegator from './components/Navegator';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { setPercentage } from './store/actions';

function App() {
  const doc = document.documentElement;
  const dispatch = useDispatch();

  window.addEventListener('scroll', function() {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));
    dispatch(setPercentage(value));
  })

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
