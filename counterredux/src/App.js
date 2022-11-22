import logo from './logo.svg';
import './App.css';
import CounterComp from './component/counterComp';
import HookCounterComp from './component/hookCounterComp';
import {Provider} from 'react-redux'
import  {store} from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CounterComp />
      <HookCounterComp/>
    </div>
    </Provider>
  );
}

export default App;
