import './App.css';
import GeneratedBox from './components/GeneratedBox';
import InputField from './components/InputField';

function App() {
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <InputField/>
      <GeneratedBox/>
    </div>
  );
}

export default App;
