import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import Login from "./pages/authentication/Login";
import SplashScreen from "./pages/SplashScreen";
import Logout from "./pages/authentication/Logout";
import Register from "./pages/authentication/Register";
import VerificationPage from "./pages/authentication/VerificationPage";
import ForgetPasswordPage from "./pages/authentication/ForgetPasswordPage";
import ResetPasswordPage from "./pages/authentication/ResetPasswordPage";
import GsmControlPage from "./pages/settings/GsmControlPage";
import ZoneSettingsPage from "./pages/settings/ZoneSettingsPage";
import RemoteSettingsPage from "./pages/settings/RemoteSettingsPage";
import ZoneStatePage from "./pages/settings/ZoneStatePage";
import WiredZoneSettingsPage from "./pages/settings/WiredZoneSettingsPage";
import WirelessZoneSettingsPage from "./pages/settings/WirelessZoneSettingsPage";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 50)
  }, [])
  
  if (!isReady) {
    return (
      <MainLayout splash={true}>
        <SplashScreen />
      </MainLayout>
    );
  }


  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/register" Component={Register} />
          <Route path="/verification" Component={VerificationPage} />
          <Route path="/forget-password" Component={ForgetPasswordPage} />
          <Route path="/reset-password" Component={ResetPasswordPage} />
          <Route path="/login" Component={Login} />
          <Route path="/logout" Component={Logout} />
          {/* Settings Pages */}
          <Route path="/gsm-control" Component={GsmControlPage} />
          <Route path="/zone-settings" Component={ZoneSettingsPage} />
          <Route path="/wiredzone-settings" Component={WiredZoneSettingsPage} />
          <Route path="/wirelesszone-settings" Component={WirelessZoneSettingsPage} />
          <Route path="/zone-state" Component={ZoneStatePage} />
          <Route path="/remote-settings" Component={RemoteSettingsPage} />
          {/* End Settings Pages */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
