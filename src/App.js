import './App.css';
import Search from './components/search';
import Lolct from './components/lolct';
import Music from './components/music';
import SocialButtons from './components/social';
import "./index.css";

function App() {
  return (
    <div className="App">
      <Lolct />
      <Music />
      <Search />
      <SocialButtons />
    </div>
  );
}

export default App;
