import React from "react";

export default function GrowthSection() {
  return (
    <>
      <style>{`

        .growth-section {
          width: 100%;
          background-color: #0d0e0c;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 24px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .growth-text {
          width: 100%;
          max-width: 920px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          margin-bottom: 48px;
        }

        .growth-heading {
          font-family: 'Denton', serif;
          font-weight: 700;
          font-size: 48px; /* Mobile size */
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .growth-heading em { font-style: italic; }

        .growth-subtext {
          font-family: 'Gilroy', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin: 0;
          max-width: 560px;
        }

        /* GRID SYSTEM */
        .growth-grid {
          width: 100%;
          max-width: 1313px;
          display: grid;
          grid-template-columns: 1fr; /* Stacked on mobile */
          gap: 20px;
        }

        .growth-card {
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #111111;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          box-sizing: border-box;
        }

        .growth-card-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          background: rgba(255,255,255,0.02);
        }

        .growth-card-placeholder span {
          font-family: 'Gilroy', sans-serif;
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .growth-card-content {
          position: relative;
          z-index: 2;
        }

        .growth-card-title {
          font-family: 'Denton', serif;
          font-weight: 700;
          font-size: 22px;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .growth-card-desc {
          font-family: 'Gilroy', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
          margin: 0;
        }

        .growth-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
          z-index: 1;
        }

        /* DESKTOP REFINEMENTS */
        @media (min-width: 1024px) {
          .growth-section {
            padding-top: 128px;
            height: auto; /* Allow growth if needed */
            min-height: 1358px;
          }

          .growth-heading {
            font-size: 96px;
          }

          .growth-grid {
            grid-template-columns: repeat(12, 1fr);
            gap: 25px;
          }

          /* Defining the Bento Layout spans */
          .card-1, .card-2, .card-3 { grid-column: span 4; } /* 3 equal cards top row */
          .card-4 { grid-column: span 7; } /* Larger card bottom left */
          .card-5 { grid-column: span 5; } /* Medium card bottom right */
        }
      `}</style>

      <section className="growth-section">
        <div className="growth-text">
          <h2 className="growth-heading">
            One App.
            <br />
            <span>Unlimited Growth.</span>
          </h2>
          <p className="growth-subtext">
            Whether you want to master a new coding language, understand
            personal finance, or scale your business, Zaplrn gives it to you in
            60-second "Zaps."
          </p>
        </div>

        <div className="growth-grid">
          {/* Card 1 */}
          <div className="growth-card card-1">
            <div className="growth-card-placeholder">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span>Expert Creators</span>
            </div>
            <div className="growth-card-content">
              <h3 className="growth-card-title">Industry-Expert Creators</h3>
              <p className="growth-card-desc">
                We aren't a platform for influencers — we're a home for
                practitioners.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="growth-card card-2">
            <div className="growth-card-placeholder">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Dual Mode</span>
            </div>
            <div className="growth-card-content">
              <h3 className="growth-card-title">Dual-Mode Versatility</h3>
              <p className="growth-card-desc">
                Everyone has something to learn and something to teach.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="growth-card card-3">
            <div className="growth-card-placeholder">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span>Smart Notifications</span>
            </div>
            <div className="growth-card-content">
              <h3 className="growth-card-title">Smart Notifications</h3>
              <p className="growth-card-desc">
                Receive updates only when a Series you follow drops a new Zap.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="growth-card card-4">
            <div className="growth-card-placeholder">
              <span>Ecosystem Visual</span>
            </div>
            <div className="growth-card-content">
              <h3 className="growth-card-title">Discovery Ecosystems</h3>
              <p className="growth-card-desc">
                Browse dedicated categories like Tech, Business, or Art. Your
                feed is a reflection of your goals.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="growth-card card-5">
            <div className="growth-card-placeholder">
              <span>Metrics Visual</span>
            </div>
            <div className="growth-card-content">
              <h3 className="growth-card-title">Transparent Metrics</h3>
              <p className="growth-card-desc">
                See completion rates and progress. Master skills, don't just
                collect views.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
