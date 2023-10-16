import Statistics from "./components/Statistics";
import "./App.css";
import HeadBar from "./components/HeadBar";
import LeftNavBar from "./components/LeftNavBar";

function App() {
  return (
    <div
      className="admin-dashboard"
      style={{ display: "flex", backgroundColor: "lightgrey" }}
    >
      <LeftNavBar />
      <div
        className="ui"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "-webkit-fill-available",
        }}
      >
        <HeadBar />
        <Statistics />
      </div>
    </div>
  );
}

export default App;
