import Header from "./components/template/Header";
import Main from "./components/template/Main";
import Navbar from "./components/template/Navbar";

function App() {
  return (
    <div className="dash">
      <Navbar/>
      <div className="dash-app">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
