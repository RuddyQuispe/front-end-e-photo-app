import Footer from "./components/template/Footer";
import Header from "./components/template/Header";
import Main from "./components/template/Main";
import Sidebar from "./components/template/Sidebar";

function App() {
  return (
    <div className="wrapper sidebar_minimize">
      <Header></Header>
      {/* Sidebar */}
      <Sidebar></Sidebar>
      <div className="main-panel">
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
