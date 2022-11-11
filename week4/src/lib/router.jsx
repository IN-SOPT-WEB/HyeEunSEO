import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from "../components/User";
import MainPage from "../pages/Main";

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/search" element={<MainPage />}>
                    <Route path=":userId" element={<User />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
