import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
