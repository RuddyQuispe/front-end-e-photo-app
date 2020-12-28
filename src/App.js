import Content from "./components/template/Content";
import Footer from "./components/template/Footer";
import Navbar from "./components/template/Navbar";
import ScrollbarModal from "./components/template/ScrollbarModal";
import Sidebar from "./components/template/Sidebar";

function App() {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Content />
          </div>
          <Footer />
        </div>
      </div>
      <ScrollbarModal />
    </div>
  );
}

export default App;
