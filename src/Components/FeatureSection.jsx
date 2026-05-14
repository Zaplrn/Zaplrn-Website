import React from "react";

export default function FeatureSection2() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Syne:wght@400;500;600&display=swap');

        .fs2-section {
          width: 100%;
          min-height: 1173px;
          background-color: #0d0e0c;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 40px 40px;
          box-sizing: border-box;
        }

        .fs2-inner {
          width: 1204px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
        }

        .fs2-text {
          width: 760px;
          min-height: 237px;
          display: flex;
          padding-top: 64px;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .fs2-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 70px;
          line-height: 1.0;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .fs2-heading em {
          font-style: italic;
        }

        .fs2-cards {
          width: 1100px;
          height: 680px;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 60px;
        }

        /* Each card is a clickable image placeholder */
        .fs2-card {
          flex: 1;
          height: 680px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          display: block;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .fs2-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5);
        }

        /* Placeholder fills entire card */
        .fs2-card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1.5px dashed rgba(255,255,255,0.12);
          border-radius: 24px;
          flex-direction: column;
          gap: 12px;
        }

        .fs2-card-placeholder svg {
          opacity: 0.25;
        }

        /* Once you have real images, replace placeholder with:
           <img src={yourImage} style={{width:'100%',height:'100%',objectFit:'cover'}} />
        */
      `}</style>

      <section className="fs2-section">
        <div className="fs2-inner">
          {/* TOP TEXT — 760 × 237 */}
          <div className="fs2-text">
            <h2 className="fs2-heading">
              so what do you want
              <br />
              from your
              <br />
              <em>screen time?</em>
            </h2>
          </div>

          {/* CARDS ROW — 1178 × 680 */}
          <div className="fs2-cards">
            {/* LEFT CARD — replace href with actual route later */}
            <a className="fs2-card" href="#creators">
              {/* 
                Replace this placeholder div with:
                <img src={creatorCardImg} alt="For Creators" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              */}
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
                Card Image — For Creators
              </div>
            </a>

            {/* RIGHT CARD — replace href with actual route later */}
            <a className="fs2-card" href="#learners">
              {/*
                Replace this placeholder div with:
                <img src={learnerCardImg} alt="For Learners" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              */}
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
                Card Image — For Learners
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
