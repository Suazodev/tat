import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { AboutPage } from "./app/modules/about/pages/AboutPage";
import { AdminPage } from "./app/modules/admin/pages/AdminPage";
import { AppointmentsPage } from "./app/modules/appointments/pages/AppointmentsPage";
import { AuthPage } from "./app/modules/auth/pages/AuthPage";
import { HomePage } from "./app/modules/home/pages/HomePage";
import { ProfilePage } from "./app/modules/profile/pages/ProfilePage";
import { Appbar } from "./app/shared/components/appbar/Appbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
