import React from "react";
import card1Img from "../assets/growth-card1.png";
import card2Img from "../assets/growth-card2.png";
import card3Img from "../assets/growth-card3.png";
import card4Img from "../assets/growth-card4.png";
import card5Img from "../assets/growth-card5.png";

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
          font-size: 48px;
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

        .growth-grid {
          width: 100%;
          max-width: 1313px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .growth-card {
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #0d0e0c;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          box-sizing: border-box;
        }

        /* Image top-aligned, exact dimensions */
        .growth-card-img {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          object-fit: cover;
          z-index: 0;
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
          z-index: 1;
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
          z-index: 3;
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
          z-index: 2;
        }

        @media (min-width: 1024px) {
          .growth-section {
            padding-top: 128px;
            height: auto;
            min-height: 1358px;
          }
          .growth-heading { font-size: 96px; }
          .growth-grid {
            grid-template-columns: repeat(12, 1fr);
            gap: 25px;
          }
          .card-1, .card-2, .card-3 { grid-column: span 4; }
          .card-4 { grid-column: span 7; }
          .card-5 { grid-column: span 5; }
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
          {/* Card 1 — image: 414×288 */}
          <div className="growth-card card-1">
            <img
              src={card1Img}
              alt=""
              className="growth-card-img"
              style={{ width: "410px", height: "250px" }}
            />
            <div className="growth-card-content">
              <h3 className="growth-card-title">Industry-Expert Creators</h3>
              <p className="growth-card-desc">
                We aren't a platform for "influencers"— <br></br> we’re a home
                for practitioners.
              </p>
            </div>
          </div>

          {/* Card 2 — image: 384×326 */}
          <div className="growth-card card-2">
            <img
              src={card2Img}
              alt=""
              className="growth-card-img"
              style={{ width: "380px", height: "310px" }}
            />
            <div className="growth-card-content mb-5">
              <h3 className="growth-card-title">Dual-Mode Versatility</h3>
              <p className="growth-card-desc">
                On Zaplrn you don't need two accounts. We believe <br></br>{" "}
                everyone has something to learn and something to teach.
              </p>
            </div>
          </div>

          {/* Card 3 — image: 414×326 */}
          <div className="growth-card card-3">
            <img
              src={card3Img}
              alt=""
              className="growth-card-img"
              style={{ width: "414px", height: "326px" }}
            />
            <div className="growth-card-content">
              <h3 className="growth-card-title">Smart Notifications</h3>
              <p className="growth-card-desc">
                We don't nag you with random pings.  Receive notifications only
                when a Series you follow is updated or when a creator you trust
                drops a new "Zap."
              </p>
            </div>
          </div>

          {/* Card 4 — image: 465×277 */}
          <div className="growth-card card-4">
            <img
              src={card4Img}
              alt=""
              className="growth-card-img"
              style={{
                width: "465px",
                height: "277px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div className="growth-card-placeholder">
              <span>Ecosystem Visual</span>
            </div>
            <div className="growth-card-content">
              <h3 className="growth-card-title">Discovery Ecosystems</h3>
              <p className="growth-card-desc">
                Browse dedicated categories like Tech , Business, or Art.{" "}
                <br></br>Your feed isa reflection of your goals, nota
                distraction.
              </p>
            </div>
          </div>

          {/* Card 5 — image: 505×282 */}
          <div className="growth-card card-5">
            <img
              src={card5Img}
              alt=""
              className="growth-card-img"
              style={{ width: "505px", height: "282px" }}
            />
            <div className="growth-card-content">
              <h3 className="growth-card-title">Transparent Metrics</h3>
              <p className="growth-card-desc">
                For Creators, See completion rates and student progress. For
                Learners, it’s showing exactly what skills you've mastered
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
