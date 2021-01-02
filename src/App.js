import Home from "./components/Home";
import { BrowserRouter, Route } from 'react-router-dom';
import OrganizeUserManage from "./components/OrganizerUserManage/OrganizeUserManage";
import PhotographerUserManage from "./components/PhotographerUserManage/PhotographerUserManage";
import PhotoStudioManage from "./components/PhotoStudioManage/PhotoStudioManage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/event_organizer_user_manage" component={OrganizeUserManage}/>
      <Route exact path="/photographer_user_manage" component={PhotographerUserManage}/>
      <Route exact path="/photo_studio_manage" component={PhotoStudioManage}/>
    </BrowserRouter>
  );
}

export default App;
