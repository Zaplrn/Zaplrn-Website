import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/privacy";
import TermsAndConditions from "./pages/termsAndConditions";
import CookiePolicy from "./pages/cookies";
import ContactUs from "./pages/contactUs";
import AccountDeletionPolicy from "./pages/accountDeletionPolicy";
import CommunityGuidelines from "./pages/communityGuidelines";
import PageShell from "./Components/PageShell";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<PageShell />}>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/account-deletion" element={<AccountDeletionPolicy />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
      </Route>
      <Route
        path="/terms"
        element={<Navigate to="/terms-and-conditions" replace />}
      />
      <Route
        path="/cookies"
        element={<Navigate to="/cookie-policy" replace />}
      />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-[#010101] text-white flex items-center justify-center">
            Page not found
          </div>
        }
      />
    </Routes>
    </>
  );
}

export default App;
