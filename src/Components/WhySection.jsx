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
          padding-top: 100px;
          padding-bottom: 100px;
          box-sizing: border-box;
        }

        /* TEXT BLOCK — 920 × 234 */
        .why-text {
          width: 920px;
          min-height: 234px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
          margin-bottom: 60px;
        }

        .why-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 88px;
          line-height: 1.0;
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

        /* MAIN CONTENT — 1300 × 984 */
        .why-body {
          width: 1300px;
          height: 984px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Circle background */
        .why-circles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 750px;
          height: 750px;
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }

        /* Phone placeholder — 331 × 675 */
        .why-phone {
          position: absolute;
          width: 331px;
          height: 675px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
        }

        .why-phone-label {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Feature point — icon inline with text */
        .why-point {
          position: absolute;
          z-index: 3;
        }

        /* Left points: text on left, icon on right */
        .why-point-left .why-point-inner {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          gap: 12px;
          text-align: right;
        }

        .why-point-left .why-point-texts {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        /* Right points: icon on left, text on right */
        .why-point-right .why-point-inner {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 12px;
          text-align: left;
        }

        .why-point-right .why-point-texts {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .why-point-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .why-point-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 17px;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .why-point-desc {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <section className="why-section">
        {/* TEXT BLOCK */}
        <div className="why-text">
          <h2 className="why-heading">
            Why Zaplrn Solution
            <br />
            <em>to Your Problems</em>
          </h2>
          <p className="why-subtext">
            The platforms we used to love have become noisy. It's time for a
            space where your attention is an investment, not a product.
          </p>
        </div>

        {/* MAIN BODY */}
        <div className="why-body">
          {/* Circle background removed — plain black */}

          {/* PHONE PLACEHOLDER */}
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
            <span className="why-phone-label">331 × 675</span>
          </div>

          {/* ── LEFT POINTS ── text left, icon right */}

          {/* Top left — "Clean Mind" Guarantee — 252×72 */}
          <div
            className="why-point why-point-left"
            style={{
              left: "80px",
              top: "280px",
              width: "252px",
              height: "72px",
            }}
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
                  width="16"
                  height="16"
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

          {/* Bottom left — Zero "Algorithm Anxiety" — 230×94 */}
          <div
            className="why-point why-point-left"
            style={{
              left: "170px",
              top: "550px",
              width: "230px",
              height: "94px",
            }}
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
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22" y2="12" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── RIGHT POINTS ── icon left, text right */}

          {/* Top right — From "Passive Watching" to "Active Doing" — 305×94 */}
          <div
            className="why-point why-point-right"
            style={{
              right: "60px",
              top: "280px",
              width: "305px",
              height: "94px",
            }}
          >
            <div className="why-point-inner">
              <div className="why-point-icon">
                <svg
                  width="16"
                  height="16"
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
                  Structured Series and Integrated Mastery Chat
                </p>
              </div>
            </div>
          </div>

          {/* Bottom right — Content with a "Shelf-Life" — 216×94 */}
          <div
            className="why-point why-point-right"
            style={{
              right: "190px",
              top: "540px",
              width: "216px",
              height: "94px",
            }}
          >
            <div className="why-point-inner">
              <div className="why-point-icon">
                <svg
                  width="16"
                  height="16"
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
