import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MatchesPage from "./pages/MatchesPage";
import MatchesFormPage from "./pages/MatchesFormPage";
import RefereesPage from "./pages/RefereesPage";
import RefereesFormPage from "./pages/RefereesFormPage";
import EventsPage from "./pages/EventsPage";
import EventsFormPage from "./pages/EventsFormPage";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import { MatchProvider } from "./context/MatchesContext";
import { RefereeProvider } from "./context/RefereesContext";
import { EventProvider } from "./context/EventsContext";
import NavBar from "./components/NavBar";

function App() {
    
    return (
        <AuthProvider>
            <MatchProvider>
                <RefereeProvider>
                    <EventProvider>
                        <BrowserRouter>
                                <NavBar />  
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                    path="/register"
                                    element={<RegisterPage />}
                                />

                                {/* Cuando los usuarios esten logueados */}
                                <Route element={<ProtectedRoute />}>
                                    <Route
                                        path="/matches"
                                        element={<MatchesPage />}
                                    />
                                    <Route
                                        path="/add-match"
                                        element={<MatchesFormPage />}
                                    />
                                    <Route
                                        path="/matches/:id"
                                        element={<MatchesFormPage />}
                                    />

                                    {/* FIN DE LOS PARTIDOS */}
                                    <Route
                                        path="/referees"
                                        element={<RefereesPage />}
                                    />
                                    <Route
                                        path="/add-referee"
                                        element={<RefereesFormPage />}
                                    />
                                    <Route
                                        path="/referees/:id"
                                        element={<RefereesFormPage />}
                                    />

                                    {/* FIN DE ARBITROS */}
                                    <Route
                                        path="/events"
                                        element={<EventsPage />}
                                    />
                                    <Route
                                        path="/add-event"
                                        element={<EventsFormPage />}
                                    />
                                    <Route
                                        path="/events/:id"
                                        element={<EventsFormPage />}
                                    />

                                    {/* FIN DE ARBITROS */}
                                    <Route
                                        path="/profile"
                                        element={<ProfilePage />}
                                    />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </EventProvider>
                </RefereeProvider>
            </MatchProvider>
        </AuthProvider>
    );
}

export default App;
