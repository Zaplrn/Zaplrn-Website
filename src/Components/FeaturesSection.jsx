import React from "react";

export default function FeaturesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Syne:wght@400;500;600&display=swap');

        .feat-section {
          width: 100%;
          height: 1020px;
          background-color: #0d0e0c;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .feat-text {
          position: absolute;
          left: 260px;
          width: 920px;
          height: 244px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
          z-index: 2;
        }

        .feat-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 80px;
          line-height: 1.05;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .feat-heading em { font-style: italic; }

        .feat-subtext {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin: 0;
          text-align: center;
        }

        /* BIG CARD */
        .feat-card {
          position: absolute;
          left: 25px;
          top: 200px;
          width: 1392px;
          height: 802px;
          background-color: #0d0e0c;
          overflow: hidden;
          z-index: 1;
        }

        /* Phone placeholder */
        .feat-phone {
          position: absolute;
          width: 408px;
          height: 613px;
          left: 490px;
          top: 95px;
          transform: rotate(-23.95deg);
          transform-origin: center center;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          z-index: 2;
        }

        .feat-phone-label {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .feat-info-card {
          position: absolute;
          width: 406px;
          height: 120px;
          background: #0d0e0c;
          border: 1px solid #ADACAC;
          border-radius: 14px;
          padding: 24px 26px;
          box-sizing: border-box;
          z-index: 3;
        }

        .feat-info-title {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 10px 0;
        }

        .feat-info-desc {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          line-height: 1.65;
          margin: 0;
        }
      `}</style>

      <section className="feat-section">
        {/* TEXT BLOCK */}
        <div className="feat-text">
          <h2 className="feat-heading">
            from content creator
            <br />
            <em>to knowledge leader</em>
          </h2>
          <p className="feat-subtext">
            At Zaplrn, we've built a home where your wisdom isn't just "content"
            —<br />
            it's a curriculum. We don't just give you views; we give you a
            legacy.
          </p>
        </div>

        {/* BIG CARD — left:25, top:242, 1392×802 */}
        <div className="feat-card">
          {/* PHONE — left:490, top:95 inside card, 408×613, rotate:-23.95deg */}
          <div className="feat-phone">
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

          {/* LEFT — TOP: The Series Architect | left:28, top:48, 406×120 */}
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

          {/* LEFT — MIDDLE: Integrated Mastery Chat | left:28, top:310, 406×120 */}
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

          {/* LEFT — BOTTOM: Deep-Dive Analytics | left:28, top:562, 406×120 */}
          <div
            className="feat-info-card"
            style={{ left: "70px", top: "562px" }}
          >
            <p className="feat-info-title">Deep-Dive Analytics</p>
            <p className="feat-info-desc">
              Don't just track "views." See how many users completed your
              Series, where they got stuck, and how their skills are improving.
            </p>
          </div>

          {/* RIGHT — TOP: 60-Second Learning | right:28, top:48, 406×120 */}
          <div
            className="feat-info-card"
            style={{ right: "80px", top: "120px" }}
          >
            <p className="feat-info-title">60-Second "Concentrated" Learning</p>
            <p className="feat-info-desc">
              We challenge you to be the best version of yourself. By limiting
              Zaps to 60 seconds.
            </p>
          </div>

          {/* RIGHT — MIDDLE: Intentional Reach | right:28, top:310, 406×120 */}
          <div
            className="feat-info-card"
            style={{ right: "20px", top: "340px" }}
          >
            <p className="feat-info-title">Intentional Reach</p>
            <p className="feat-info-desc">
              Our discovery engine puts your expertise in front of people. You
              don't find them; they find you.
            </p>
          </div>

          {/* RIGHT — BOTTOM: Your Digital Campus | right:28, top:562, 406×120 */}
          <div
            className="feat-info-card"
            style={{ right: "80px", top: "562px" }}
          >
            <p className="feat-info-title">Your Digital Campus</p>
            <p className="feat-info-desc">
              Your profile on Zaplrn isn't just a bio; it's a school. Organize
              your Zaps by category — ZAPLRN, your professional portfolio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
