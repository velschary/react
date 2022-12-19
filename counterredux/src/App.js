import logo from './logo.svg';
import './App.css';
import CounterComp from './component/counterComp';
import HookCounterComp from './component/hookCounterComp';
import {Provider} from 'react-redux'
import  {store} from './store/store'
import Normalcounter from './component/normalcounter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CounterComp />
      <HookCounterComp/>
      <Normalcounter val={10} />
      <Normalcounter val={5}/>
    </div>
    </Provider>
  );
}

export default App;
