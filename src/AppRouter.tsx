import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import LearnPage from "./components/pages/LearnPage/LearnPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}
