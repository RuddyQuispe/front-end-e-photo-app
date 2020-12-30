import Home from "./components/Home";
import { BrowserRouter, Route } from 'react-router-dom';
import OrganizeUserManage from "./components/OrganizerUserManage/OrganizeUserManage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/event_organizer_user_manage" component={OrganizeUserManage}/>
    </BrowserRouter>
  );
}

export default App;
