import { useState, useEffect, useRef } from "react";
import PlayStoreImg from "../assets/footer-PlayStore-Icon.png";
import AppStoreImg from "../assets/footer-AppStore-Icon.png";
import ComingSoonModal from "./modelComponent/CommingSoonModel";

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseX: 0,
      baseY: 0,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.25 + 0.05,
      vx: 0,
      vy: 0,
    }));

    const prevMouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.dx = e.clientX - prevMouse.x;
      mouse.dy = e.clientY - prevMouse.y;

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      prevMouse.x = e.clientX;
      prevMouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        if (mouse.active) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;

            star.vx += (dx / distance) * force * 0.15;
            star.vy += (dy / distance) * force * 0.15;
          }
        }

        star.vx *= 0.96;
        star.vy *= 0.96;

        star.x += star.vx;
        star.y += star.vy;
        star.y -= star.speed;

        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export default function DownloadCTA() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section
      className="w-full bg-[#010101] px-5 sm:px-6 relative overflow-hidden"
      aria-labelledby="download-heading"
    >
      <StarField />

      <div className="max-w-4xl mx-auto text-center pb-16 sm:pb-20 relative z-10">
        <h2
          id="download-heading"
          className="text-white text-[38px] sm:text-5xl md:text-7xl font-serif font-bold tracking-tight sm:tracking-tighter leading-[1.12] sm:leading-[1.1] mb-6 sm:mb-8"
          style={{ fontFamily: "Denton" }}
        >
          ready to turn your scroll <br className="hidden md:block" />
          <em style={{fontWeight: '200'}}>into a superpower?</em>
        </h2>
        <p
          className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12"
          style={{ fontFamily: "Gilroy" }}
        >
          We built Zaplrn because we got tired of losing hours to mindless
          feeds. We took the vertical, fast-paced video format everyone loves
          and re-engineered it to respect your time. By connecting real industry
          practitioners with ambitious minds, we’re turning daily screen time
          into a structured professional asset—one 60-second Zap at a time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          {/* Play Store Button */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="flex items-center justify-center cursor-pointer gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full max-w-70 sm:w-auto sm:max-w-none"
          >
            <img
              src={PlayStoreImg}
              alt=""
              aria-hidden="true"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
              className="w-6 h-6 object-contain"
            />
            <span
              className="font-semibold text-base"
              style={{ fontFamily: "Gilroy" }}
            >
              Play Store
            </span>
          </button>

          {/* App Store Button */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="flex items-center justify-center cursor-pointer gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full max-w-70 sm:w-auto sm:max-w-none"
          >
            <img
              src={AppStoreImg}
              alt=""
              aria-hidden="true"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
              className="w-6 h-6 object-contain"
            />
            <span
              className="font-semibold text-base"
              style={{ fontFamily: "Gilroy" }}
            >
              App Store
            </span>
          </button>
        </div>
        <ComingSoonModal
          isOpen={showComingSoon}
          onClose={() => setShowComingSoon(false)}
        />
      </div>
    </section>
  );
}
