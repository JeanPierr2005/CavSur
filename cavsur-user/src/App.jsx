import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MatchesPage from "./pages/MatchesPage";
import MatchesFormPage from "./pages/MatchesFormPage";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import { MatchProvider } from "./context/MatchesContext";

function App() {
    return (
        <AuthProvider>
            <MatchProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />

                        {/* Cuando los usuarios esten logueados */}
                        <Route element={<ProtectedRoute />}>
                            <Route path="/matches" element={<MatchesPage />} />
                            <Route
                                path="/add-match"
                                element={<MatchesFormPage />}
                            />
                            <Route
                                path="/matches/:id"
                                element={<MatchesFormPage />}
                            />
                            <Route path="/profile" element={<ProfilePage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </MatchProvider>
        </AuthProvider>
    );
}

export default App;
