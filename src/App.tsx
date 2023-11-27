import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AdminPage } from "./app/modules/admin/pages/AdminPage";
import { AppointmentsPage } from "./app/modules/appointments/pages/AppointmentsPage";
import { AuthPage } from "./app/modules/auth/pages/AuthPage";
import { HomePage } from "./app/modules/home/pages/HomePage";
import { ProfilePage } from "./app/modules/profile/pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
