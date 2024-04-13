import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
