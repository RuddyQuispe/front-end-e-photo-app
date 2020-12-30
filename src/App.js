import Home from "./components/Home";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
