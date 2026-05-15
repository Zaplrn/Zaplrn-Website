import React from "react";

export default function WhySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Syne:wght@400;500;600&display=swap');

        .why-section {
          width: 100%;
          background-color: #0d0e0c;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 20px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .why-text {
          width: 100%;
          max-width: 920px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .why-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(40px, 8vw, 88px);
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .why-heading em { font-style: italic; }

        .why-subtext {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          margin: 0;
          max-width: 500px;
        }

        /* --- BODY CONTAINER --- */
        .why-body {
          width: 100%;
          max-width: 1300px;
          height: auto;
          min-height: 600px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .why-body {
            height: 984px;
            flex-direction: row;
            justify-content: center;
          }
        }

        /* --- PHONE PLACEHOLDER --- */
        .why-phone {
          width: 280px;
          height: 570px;
          border-radius: 36px;
          overflow: hidden;
          border: 1.5px dashed rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          z-index: 2;
          order: 1; /* Center on mobile */
        }

        @media (min-width: 1024px) {
          .why-phone {
            position: absolute;
            width: 331px;
            height: 675px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .why-phone-label {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }

        /* --- FEATURE POINTS --- */
        .why-point {
          width: 100%;
          max-width: 320px;
          z-index: 3;
        }

        @media (min-width: 1024px) {
          .why-point { position: absolute; }
        }

        .why-point-inner {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .why-point-texts {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* Desktop Point Directions */
        @media (min-width: 1024px) {
          .why-point-left .why-point-inner {
            flex-direction: row;
            text-align: right;
            justify-content: flex-end;
          }
          .why-point-left .why-point-texts { align-items: flex-end; }
          
          .why-point-right .why-point-inner {
            flex-direction: row;
            text-align: left;
            justify-content: flex-start;
          }
          .why-point-right .why-point-texts { align-items: flex-start; }
        }

        /* Mobile Point Logic */
        @media (max-width: 1023px) {
          .why-point-inner {
            flex-direction: row-reverse !important; /* Icon left, Text right for mobile consistency */
            text-align: left !important;
          }
          .why-point-texts { align-items: flex-start !important; }
          .why-point:nth-child(even) { order: 2; } /* Put some below phone */
          .why-point:nth-child(odd) { order: 0; }  /* Put some above phone */
        }

        .why-point-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .why-point-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 20px;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .why-point-desc {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>

      <section className="why-section">
        <div className="why-text">
          <h2 className="why-heading">
            Why Zaplrn Solution
            <br />
            <em>to Your Problems</em>
          </h2>
          <p className="why-subtext">
            It's time for a space where your attention is an investment, not a
            product.
          </p>
        </div>

        <div className="why-body">
          {/* PHONE */}
          <div className="why-phone">
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
            <span className="why-phone-label">App Preview</span>
          </div>

          {/* POINT 1 */}
          <div
            className="why-point why-point-left"
            style={{ left: "60px", top: "240px" }}
          >
            <div className="why-point-inner">
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  The "Clean Mind"
                  <br />
                  Guarantee
                </h4>
                <p className="why-point-desc">feeling better, not drained</p>
              </div>
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M4 6h16M4 12h16M4 18h16M9 6v12M15 6v12" />
                </svg>
              </div>
            </div>
          </div>

          {/* POINT 2 */}
          <div
            className="why-point why-point-left"
            style={{ left: "110px", top: "580px" }}
          >
            <div className="why-point-inner">
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  Zero "Algorithm
                  <br />
                  Anxiety"
                </h4>
                <p className="why-point-desc">
                  Content with intent and categories
                </p>
              </div>
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </div>

          {/* POINT 3 */}
          <div
            className="why-point why-point-right"
            style={{ right: "40px", top: "240px" }}
          >
            <div className="why-point-inner">
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  From "Passive Watching"
                  <br />
                  to "Active Doing"
                </h4>
                <p className="why-point-desc">
                  Structured Series and Mastery Chat
                </p>
              </div>
            </div>
          </div>

          {/* POINT 4 */}
          <div
            className="why-point why-point-right"
            style={{ right: "120px", top: "580px" }}
          >
            <div className="why-point-inner">
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              </div>
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  Content with a<br />
                  "Shelf-Life"
                </h4>
                <p className="why-point-desc">
                  timeless wisdom over trending noise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
