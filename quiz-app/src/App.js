//import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router , Route} from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    // <div className="App">
    //   <h1>HELLO</h1>
    // </div>
    <Router>
            <Route path="/" component={Home}/>  
    </Router>
  );
}

export default App;
