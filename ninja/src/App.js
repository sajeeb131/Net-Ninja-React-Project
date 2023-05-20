import "./App.css"
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className="content">
            <Homepage></Homepage>
        </div>
    </div>
  );
}

export default App;
