import "./CommingSoonModel.css";
import { X } from "lucide-react";

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="cs-overlay">
      <div className="cs-modal">
        {/* Close */}
        <button className="cs-close" onClick={onClose}>
          <X size={22} />
        </button>

        {/* Content */}
        <div className="cs-content">
          <h2>App Launching Soon</h2>

          <p className="sub">Zaplrn mobile apps are currently under review.</p>

          <p className="desc">
            Our Android and iOS apps will be available on Google Play Store and
            App Store very soon. Stay tuned for the official launch.
          </p>
        </div>

        {/* Decorative Glow */}
        <div className="cs-glow-left"></div>
        <div className="cs-glow-right"></div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
