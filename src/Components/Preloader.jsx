import React, { useEffect, useState, useRef } from "react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  // Total duration of the preloader in ms
  const DURATION = 2800;

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      // Ease-out cubic for a natural feel: fast start, smooth finish
      const t = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const currentProgress = Math.round(eased * 100);

      setProgress(currentProgress);

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Hold briefly at 100% then exit
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => {
            onComplete?.();
          }, 600); // match fade-out duration
        }, 300);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes preloader-fade-out {
          from { opacity: 1; }
          to   { opacity: 0; pointer-events: none; }
        }

        .preloader-root {
          position: fixed;
          inset: 0;
          background: #0d0e0c;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px 40px;
          box-sizing: border-box;
        }

        .preloader-root.exiting {
          animation: preloader-fade-out 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Percentage label */
        .preloader-percent {
          font-family: 'Gilroy', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.04em;
          text-align: right;
          margin-bottom: 10px;
          /* Align with the right edge of the bar track */
          padding-right: 0;
          font-variant-numeric: tabular-nums;
        }

        /* Progress bar track */
        .preloader-track {
          width: 100%;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.12);
          position: relative;
          overflow: hidden;
        }

        /* Progress bar fill */
        .preloader-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #ffffff;
          transition: width 0.05s linear;
          /* Subtle glow at the leading edge */
          box-shadow: 0 0 8px 1px rgba(255,255,255,0.4);
        }

        /* Optional: faint brand wordmark centered */
        .preloader-brand {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Denton', serif;
          font-weight: 700;
          font-size: clamp(32px, 6vw, 72px);
          color: rgba(255,255,255,0.04);
          letter-spacing: -0.02em;
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .preloader-root {
            padding: 36px 24px;
          }
        }
      `}</style>

      <div className={`preloader-root${!visible ? " exiting" : ""}`}>
        {/* Percentage top-right of bar */}
        <div className="preloader-percent">{progress}%</div>

        {/* Progress bar */}
        <div
          className="preloader-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="preloader-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </>
  );
}
