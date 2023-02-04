import './App.css';
import {ResponsiveDrawer} from "./components/Drawer/ResponsiveDrawer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ResponsiveDrawer>
                    Api Documentation
                </ResponsiveDrawer>
            </header>
        </div>
    );
}

export default App;