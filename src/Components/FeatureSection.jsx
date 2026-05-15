import React from "react";

export default function FeatureSection2({ onSelect }) {
  const handleCardClick = (e, role) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(role);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Syne:wght@400;500;600&display=swap');

        .fs2-section {
          width: 100%;
          min-height: auto;
          background-color: #0d0e0c;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          box-sizing: border-box;
        }

        .fs2-inner {
          width: 100%;
          max-width: 1204px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .fs2-text {
          width: 100%;
          max-width: 760px;
          text-align: center;
        }

        .fs2-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 42px;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .fs2-heading em {
          font-style: italic;
        }

        .fs2-cards {
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .fs2-card {
          width: 100%;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: transparent;
          border: none;
          padding: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .fs2-card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1.5px dashed rgba(255,255,255,0.12);
          border-radius: 24px;
          gap: 12px;
        }

        /* Desktop Adjustments */
        @media (min-width: 1024px) {
          .fs2-section {
            min-height: 1173px;
            padding: 40px;
          }
          .fs2-inner {
            gap: 80px;
          }
          .fs2-heading {
            font-size: 70px;
          }
          .fs2-cards {
            flex-direction: row;
            height: 680px;
            gap: 60px;
          }
          .fs2-card {
            flex: 1;
            height: 680px;
          }
          .fs2-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 24px 60px rgba(255,255,255,0.05);
          }
        }
      `}</style>

      <section className="fs2-section">
        <div className="fs2-inner">
          <div className="fs2-text">
            <h2 className="fs2-heading">
              so what do you want
              <br />
              from your
              <br />
              <em>screen time?</em>
            </h2>
          </div>

          <div className="fs2-cards">
            {/* CREATOR CARD */}
            <button
              className="fs2-card"
              onClick={(e) => handleCardClick(e, "creator")}
            >
              <div className="fs2-card-placeholder">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <span>For Creators</span>
              </div>
            </button>

            {/* LEARNER CARD */}
            <button
              className="fs2-card"
              onClick={(e) => handleCardClick(e, "learner")}
            >
              <div className="fs2-card-placeholder">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>For Learners</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
