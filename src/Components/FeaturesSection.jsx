import React from "react";

export default function FeaturesSection() {
  return (
    <>
      <style>{`
      
        .feat-section {
          width: 100%;
          background-color: #0d0e0c;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          padding: 80px 24px;
        }

        .feat-text {
          width: 100%;
          max-width: 920px;
          margin: 0 auto 60px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
          z-index: 10;
          position: relative;
        }

        .feat-heading {
          font-family: 'Denton', serif;
          font-weight: 700;
          font-size: 42px;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .feat-heading em { font-style: italic; }

        .feat-subtext {
          font-family: 'Gilroy', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin: 0;
          max-width: 600px;
        }

        /* CARD CONTAINER */
        .feat-card-container {
          width: 100%;
          max-width: 1392px;
          margin: 0 auto;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feat-info-card {
          width: 100%;
          background: #0d0e0c;
          border: 1px solid rgba(173, 172, 172, 0.4);
          border-radius: 14px;
          padding: 24px;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }

        .feat-info-card:hover {
          border-color: #ffffff;
        }

        .feat-info-title {
          font-family: 'Gilroy', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 10px 0;
        }

        .feat-info-desc {
          font-family: 'Gilroy', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin: 0;
        }

        /* Phone visual hidden on mobile to save space */
        .feat-phone-visual {
          display: none;
        }

        /* DESKTOP STYLES (Restores your original layout) */
        @media (min-width: 1200px) {
          .feat-section {
            height: 1020px;
            padding: 0;
          }

          .feat-text {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 60px;
            margin: 0;
          }

          .feat-heading {
            font-size: 80px;
          }

          .feat-card-container {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 240px;
            height: 802px;
            width: 1392px;
            display: block; /* Disable flex column */
          }

          .feat-info-card {
            position: absolute;
            width: 406px;
          }

          .feat-phone-visual {
            display: flex;
            position: absolute;
            width: 408px;
            height: 613px;
            left: 492px;
            top: 95px;
            transform: rotate(-23.95deg);
            border-radius: 40px;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 12px;
            border: 1px solid rgba(255,255,255,0.05);
            background: rgba(255,255,255,0.02);
          }

          .feat-phone-label {
            font-family: 'Gilroy', sans-serif;
            font-size: 11px;
            color: rgba(255,255,255,0.2);
            text-transform: uppercase;
          }
        }
      `}</style>

      <section className="feat-section">
        <div className="feat-text">
          <h2 className="feat-heading">
            from content creator
            <br />
            <span>to knowledge leader</span>
          </h2>
          <p className="feat-subtext">
            At Zaplrn, we've built a home where your wisdom isn't just "content"
            — it's a curriculum. We don't just give you views; we give you a
            legacy.
          </p>
        </div>

        <div className="feat-card-container">
          {/* Phone (Desktop Only) */}
          <div className="feat-phone-visual">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.5"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" />
            </svg>
            <span className="feat-phone-label">Phone Screen</span>
          </div>

          {/* Cards */}
          <div
            className="feat-info-card"
            style={{ left: "70px", top: "120px" }}
          >
            <p className="feat-info-title">The Series Architect</p>
            <p className="feat-info-desc">
              Stop posting random clips that disappear. Chain your Zaps into a
              structured Series.
            </p>
          </div>

          <div
            className="feat-info-card"
            style={{ left: "20px", top: "340px" }}
          >
            <p className="feat-info-title">Integrated Mastery Chat</p>
            <p className="feat-info-desc">
              Bridge the gap between "Follower" and "Student." Use our built-in
              chat to offer direct mentorship.
            </p>
          </div>

          <div
            className="feat-info-card"
            style={{ left: "70px", top: "562px" }}
          >
            <p className="feat-info-title">Deep-Dive Analytics</p>
            <p className="feat-info-desc">
              See how many users completed your Series, where they got stuck,
              and how their skills are improving.
            </p>
          </div>

          <div
            className="feat-info-card"
            style={{ right: "40px", top: "120px" }}
          >
            <p className="feat-info-title">60-Second "Concentrated" Learning</p>
            <p className="feat-info-desc">
              We challenge you to be the best version of yourself by limiting
              Zaps to 60 seconds.
            </p>
          </div>

          <div
            className="feat-info-card"
            style={{ right: "2px", top: "340px" }}
          >
            <p className="feat-info-title">Intentional Reach</p>
            <p className="feat-info-desc">
              Our discovery engine puts your expertise in front of people. You
              don't find them; they find you.
            </p>
          </div>

          <div
            className="feat-info-card"
            style={{ right: "30px", top: "562px" }}
          >
            <p className="feat-info-title">Your Digital Campus</p>
            <p className="feat-info-desc">
              Organize your Zaps by category — your profile on Zaplrn is your
              professional portfolio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
