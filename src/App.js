import Home from "./components/Home";
import { BrowserRouter, Route } from 'react-router-dom';
import OrganizeUserManage from "./components/OrganizerUserManage/OrganizeUserManage";
import PhotographerUserManage from "./components/PhotographerUserManage/PhotographerUserManage";
import PhotoStudioManage from "./components/PhotoStudioManage/PhotoStudioManage";
import Login from "./components/Login/Login";
import RestoreAccount from "./components/Login/RestoreAccount";
import ConfirmKey from "./components/Login/ConfirmKey";
import PhotographerUserList from "./components/PhotographerUserManage/PhotographerUserList";
import OrganizeUserList from "./components/OrganizerUserManage/OrganizeUserList";
import NewPassword from "./components/Login/NewPassword";
import EventManageStudio from "./components/EventManage/EventManageStudio";
import EventRegisterOrganizer from "./components/EventManage/EventRegisterOrganizer";
import PhotographyUpload from "./components/PhotographyManage/PhotographyUpload";
import PhotographyList from "./components/PhotographyManage/PhotographyList";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/restore_account" component={RestoreAccount}/>
      <Route exact path="/confirm_key" component={ConfirmKey}/>
      <Route exact path="/new_password" component={NewPassword}/>
      <Route exact path="/event_organizer_user_manage" component={OrganizeUserManage}/>
      <Route exact path="/event_organizer_user_list" component={OrganizeUserList}/>
      <Route exact path="/photographer_user_manage" component={PhotographerUserManage}/>
      <Route exact path="/photographer_user_list" component={PhotographerUserList}/>
      <Route exact path="/photo_studio_manage" component={PhotoStudioManage}/>
      <Route exact path="/event_manage_studio" component={EventManageStudio}/>
      <Route exact path="/event_manage_organizer" component={EventRegisterOrganizer}/>
      <Route exact path="/photography_manage/:code_event" component={PhotographyUpload}/>
      <Route exact path="/event_manage/:code_event" component={PhotographyList}/>
    </BrowserRouter>
  );
}

export default App;
