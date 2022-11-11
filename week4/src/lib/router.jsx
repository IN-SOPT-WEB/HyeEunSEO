import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from "../components/User";
import Search from "../components/Search";
import MainPage from "../pages/Main";

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<Search />}>
                    <Route path=":userId" element={<User />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
