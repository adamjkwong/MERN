import Main from './views/Main';
import { Router } from "@reach/router";
import SingleProductDisplay from './components/SingleProductDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <SingleProductDisplay path="/:id"/>
      </Router>
    </div>
  );
}
export default App;