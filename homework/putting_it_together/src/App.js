import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText={"Welcome to our roster page!"}/>
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={52} hairColor={"Brown"}/>
    </div>
  );
}
export default App;
