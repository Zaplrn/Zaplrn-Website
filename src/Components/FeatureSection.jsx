import React from "react";
import creatorImg from "../assets/creator-card.png";
import learnerImg from "../assets/learner-card.png";

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
          font-family: 'Denton', serif;
          font-weight: 700;
          font-size: 42px;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .fs2-cards {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .fs2-card {
          width: 100%;
          height: 560px;
          border-radius: 40px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: #050505;
          border: none;
          padding: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* Background Images */
        .fs2-card-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        /* --- EXACT FIGMA OVERLAY TEXT & ICONS --- */
        .card-text-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 50px 48px;
          box-sizing: border-box;
          text-align: left;
          /* Subtle vignette to match the dark bottom drop in Figma */
          background: linear-gradient(180deg, rgba(13,14,12,0.2) 0%, rgba(13,14,12,0) 40%, rgba(13,14,12,0.6) 100%);
        }

        .card-label-zone {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
        }

        .card-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
        }

        .card-label-text {
          font-family: 'Syne', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .card-main-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(38px, 4.5vw, 52px);
          line-height: 1.02;
          color: #ffffff;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          text-transform: lowercase; /* Matches lowercase style from screenshot */
        }

        .card-main-title em {
          font-style: italic;
          font-weight: 700;
        }

        .card-description {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          line-height: 1.45;
          margin: 0;
          max-width: 240px;
          color: rgba(255, 255, 255, 0.5); /* Crisp secondary text */
          text-transform: lowercase;
        }

        /* Pink Accent (Creators) */
        .theme-creator .card-label-zone { color: #ff2e93; }
        
        /* Purple Accent (Learners) */
        .theme-learner .card-label-zone { color: #9d5cff; }

        /* Desktop Layout Sync */
        @media (min-width: 1024px) {
          .fs2-section {
            min-height: 100vh;
            padding: 60px 40px;
          }
          .fs2-inner {
            gap: 60px;
          }
          .fs2-heading {
            font-size: 70px;
          }
          .fs2-cards {
            flex-direction: row;
            height: 720px;
            gap: 32px;
          }
          .fs2-card {
            flex: 1;
            height: 720px;
          }
          .fs2-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);
          }
          .card-text-overlay {
            padding: 64px 56px;
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
              <span>screen time?</span>
            </h2>
          </div>

          <div className="fs2-cards">
            {/* CREATOR CARD */}
            <button
              className="fs2-card theme-creator"
              onClick={(e) => handleCardClick(e, "creator")}
            >
              <img
                src={creatorImg}
                alt="For Creators"
                className="fs2-card-bg"
              />

              <div className="card-text-overlay">
                <div className="card-label-zone">
                  <div className="card-icon-wrap">
                    {/* Outline Profile/User Icon from Figma */}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="card-label-text">For Creators</span>
                </div>

                <h3 className="card-main-title">
                  create
                  <br />
                  something
                  <br />
                  <em>meaningful</em>
                </h3>

                <p className="card-description">
                  your ideas deserve <br></br> more than drafts
                </p>
              </div>
            </button>

            {/* LEARNER CARD */}
            <button
              className="fs2-card theme-learner"
              onClick={(e) => handleCardClick(e, "learner")}
            >
              <img
                src={learnerImg}
                alt="For Learners"
                className="fs2-card-bg"
              />

              <div className="card-text-overlay">
                <div className="card-label-zone">
                  <div className="card-icon-wrap">
                    {/* Outline Play Arrow Icon from Figma */}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="card-label-text">For Learners</span>
                </div>

                <h3 className="card-main-title">
                  learn
                  <br />
                  something
                  <br />
                  <em>useful</em>
                </h3>

                <p className="card-description">
                  small lessons. <br></br> real growth. <br></br> every day.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
