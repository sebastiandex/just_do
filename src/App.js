import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { createHashHistory } from 'history';
import SignUp from "./pages/SignUp/SignUp";
import MainWindow from "./pages/MainWindow/MainWindow";

export const history = createHashHistory();

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainWindow />} />
                <Route path="sign" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
