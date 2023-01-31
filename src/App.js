import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Completed from "./pages/Completed";
import Important from "./pages/Important";
import Todos from "./pages/Todos";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "./redux/asyncActions/fetchTodos";

function App() {
  const sidebarOpened = useSelector((state) => state.sidebarOpened);
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <button className="toggleSidebar" onClick={() => handleSidebarToggle()}>
          {sidebarOpened ? (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA00lEQVR4nO2VQQ6CMBBF4QaKa61w/3MIceMWjUJ6kmcam2iAtlOqRhP+tjO8/F86k2WL/lLAGmiAC6AE9crWmp5CClkBR57SQOWp3wG3l/oTsJGAasbqppzxcGLOhqpDkBw4TzSOYLgh2G/kIdgwCgYxloIaZ9RTkfQeZ53jzPTsRRChszQnCTBtIp0FiYDpZEgEqPo05Kv3Mz/CwGPsA7++eocT6YMtU0ZQHzGCWskIakIQAcw/VD1rwhkFsAWu0WvCNhd2XbQRi68FDuLFt+jndAeWA5VI7Q+vywAAAABJRU5ErkJggg==" />
          ) : (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nO3UMQkAMAxE0S8sIiowYiKhjhoFLRQy3HAP/hyyHJhdBLCGCh4KOEOVxEemL4E9VEocMn3hUcWjanxqujte7aqL95oAAAAASUVORK5CYII=" />
          )}
        </button>
        <div className={"App-side " + (sidebarOpened ? "show" : "")}>
          <Sidebar />
        </div>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/important" element={<Important />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
