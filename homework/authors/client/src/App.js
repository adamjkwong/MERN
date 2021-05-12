import Main from './views/Main';
import { Router } from "@reach/router";
import AuthorDisplayEdit from './components/AuthorDisplayEdit';
import AuthorForm from './components/AuthorForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <AuthorDisplayEdit path="/edit/:id"/>
        <AuthorForm path="/new"/>
      </Router>
    </div>
  );
}
export default App;