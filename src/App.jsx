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
import Seo from "./seo/Seo";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Renders null — updates document.head only, so it cannot affect paint. */}
      <Seo />
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
          /* Tailwind's preflight resets h1 to inherit font-size/weight, so
             swapping the bare text for a real <h1> is visually identical while
             giving the 404 the single H1 every page needs. */
          <main
            role="main"
            className="min-h-screen bg-[#010101] text-white flex items-center justify-center"
          >
            <h1>Page not found</h1>
          </main>
        }
      />
    </Routes>
    </>
  );
}

export default App;
