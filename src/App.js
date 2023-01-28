import './App.css';
import {ResponsiveDrawer} from "./components/Drawer/ResponsiveDrawer";
import {StudentsDataGrid} from "./components/DataGrid/StudentsDataGrid/StudentsDataGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveDrawer>
          <StudentsDataGrid />
        </ResponsiveDrawer>
      </header>
    </div>
  );
}

export default App;