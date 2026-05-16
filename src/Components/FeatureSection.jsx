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
          border: 3px solid rgba(173, 172, 172, 0.8);
        }

        .fs2-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;

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
              <span>screen time?</span>
            </h2>
          </div>

          <div className="fs2-cards">
            {/* CREATOR CARD — logic unchanged */}
            <button
              className="fs2-card"
              onClick={(e) => handleCardClick(e, "creator")}
            >
              <img src={creatorImg} alt="For Creators" />
            </button>

            {/* LEARNER CARD — logic unchanged */}
            <button
              className="fs2-card"
              onClick={(e) => handleCardClick(e, "learner")}
            >
              <img src={learnerImg} alt="For Learners" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
