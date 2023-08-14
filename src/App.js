import './App.css';
import Search from './components/search';
import Lolct from './components/lolct';
import SocialButtons from './components/social';
import "./index.css";
import Translate from './components/translate';
import { store } from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Lolct />
      <Translate />
      <Search />
      <SocialButtons />
    </Provider>
  );
}

export default App;
