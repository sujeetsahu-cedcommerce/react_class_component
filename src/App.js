// import logo from './logo.svg';
import './App.css';
import Components from './Components';
import ArrowFunction from './ArrowFunction';
import OperatingSystem from './OperatingSystem';
import Manufaturers from './Manufaturers';
import {Console} from './Structure';
import { Playground } from './Structure';
import { Adventure } from './Structure';
function App() {
  return (
    <div className="parent">
     <Components></Components> 
     <ArrowFunction></ArrowFunction> 
     <OperatingSystem></OperatingSystem>
     <Manufaturers></Manufaturers>
     <Console/>
     <Playground/>
     <Adventure/>
    </div>
  );
}

export default App;
