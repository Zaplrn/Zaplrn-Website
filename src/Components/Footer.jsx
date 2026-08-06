import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-6 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500" style={{ fontFamily: "Gilroy" }}>
          Designed & Developed by{" "}
          <a
            href="https://inspia.in"
            target="_blank"
            rel="noopener noreferrer"
            title="Inspia Technologies — website design and development"
            className="text-white hover:text-gray-300"
          >
            Inspia Technologies
          </a>
        </div>

        <nav
          aria-label="Legal and support"
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          style={{ fontFamily: "Gilroy" }}
        >
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>

          <Link
            to="/terms-and-conditions"
            className="text-gray-400 hover:text-white"
          >
            Terms & Conditions
          </Link>

          <Link to="/cookie-policy" className="text-gray-400 hover:text-white">
            Cookie Policy
          </Link>

          <Link
            to="/community-guidelines"
            className="text-gray-400 hover:text-white"
          >
            Community Guidelines
          </Link>

          <Link
            to="/account-deletion"
            className="text-gray-400 hover:text-white"
          >
            Account Deletion
          </Link>

          <Link to="/contact" className="text-gray-400 hover:text-white">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
