import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

// Distance the user must scroll before the button fades in.
const SHOW_AFTER = 600;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          right: 24px;
          /* Raised so it stacks above the Tawk.to chat bubble */
          bottom: 104px;
          z-index: 900;

          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.75);
          background: rgba(1, 1, 1, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #ffffff;
          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          /* Hidden state — faded out, nudged down, not clickable */
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
          transition: opacity 0.3s ease,
                      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.2s ease,
                      background 0.2s ease;
        }

        .back-to-top.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .back-to-top:hover {
          border-color: #ffffff;
          background: rgba(255,255,255,0.12);
        }

        .back-to-top svg { width: 20px; height: 20px; }

        @media (max-width: 767px) {
          .back-to-top {
            right: 16px;
            bottom: 88px;
            width: 44px;
            height: 44px;
          }
          .back-to-top svg { width: 18px; height: 18px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .back-to-top { transition: opacity 0.3s ease; transform: none; }
          .back-to-top.visible { transform: none; }
        }
      `}</style>

      <button
        className={`back-to-top${visible ? " visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
      >
        <ArrowUp strokeWidth={2.5} />
      </button>
    </>
  );
}
