import "./App.css";
import HeadBar from "./components/HeadBar";
import LeftNavBar from "./components/LeftNavBar";

function App() {
  return (
    <div className="admin-dashboard" style={{ display: "flex" }}>
      <LeftNavBar />
      <HeadBar />
    </div>
  );
}

export default App;
