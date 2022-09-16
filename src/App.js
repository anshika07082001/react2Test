import { Route, Router } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path='/' element={<Body/>}></Route>
      </Router> */}
      <Body/>
    </div>
  );
}

export default App;
