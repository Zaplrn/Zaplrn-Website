import React, { useState, useEffect, useRef } from "react";

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

    const stars = Array.from({ length: 120 }, () => ({
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ── Input field ───────────────────────────────────────────────────────────────
function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  textarea,
}) {
  const base = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "14px 16px",
    color: "#fff",
    fontFamily: "Gilroy",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
    resize: "none",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.35)";
    e.target.style.background = "rgba(255,255,255,0.07)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.background = "rgba(255,255,255,0.04)";
  };

  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "16px",
          color: "rgba(255,255,255,0.55)",
          marginBottom: "8px",
          fontFamily: "Gilroy",
        }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          style={base}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={base}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact form submitted", form);
    setStatus("Message sent! We'll get back to you shortly.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-wrap { animation: fadeUp 0.6s ease both; }
        .send-btn {
          width: 100%;
          padding: 15px;
          background: #010101;
          border: 1.5px solid rgba(255, 255, 255, 0.75);
          border-radius: 999px;
          color: #fff;
          font-family: 'Gilroy';
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
        }
        .send-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-1px);
        }
        .send-btn:active:not(:disabled) { transform: translateY(0); }
        .send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .social-btn {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .social-btn:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.06);
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.22);
        }

        .support-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          font-family: 'Gilroy';
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 32px;
        }
        .online-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80;
          flex-shrink: 0;
        }
        .pill-divider {
          width: 1px; height: 14px;
          background: rgba(255,255,255,0.2);
        }
        .join-link {
          color: rgba(255,255,255,0.9);
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#010101",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "200px",
          paddingBottom: "60px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <StarField />
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(80,80,180,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: "350px",
            height: "250px",
            background:
              "radial-gradient(ellipse, rgba(60,60,140,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div
          className="contact-wrap"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "640px",
          }}
        >
          {/* Support pill */}
          <div style={{ textAlign: "center" }}>
            <div className="support-pill" style={{ display: "inline-flex" }}>
              <span className="online-dot" />
              <span>4 Support online</span>
              <span className="pill-divider" />
              <span className="join-link">Join us</span>
            </div>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "Denton",
              fontSize: "clamp(36px, 6vw, 58px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.15,
              marginBottom: "14px",
              letterSpacing: "-0.02em",
            }}
          >
            Lets Have a Chat
          </h1>

          <p
            style={{
              fontFamily: "Gilroy",
              fontSize: "16px",
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "450px",
              margin: "0 auto 40px",
            }}
          >
            Reach out to us & our team will get back to you within 24 hours.
          </p>

          {/* Form */}
          <div
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Row 1 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <Field
                label="First name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Jonathan"
              />
              <Field
                label="Last name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="James"
              />
            </div>

            {/* Row 2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jonathan@gmail.com"
              />
              <Field
                label="Phone number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Message */}
            <Field
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey I have some issues activating my account..."
              textarea
            />

            {/* Submit */}
            <button
              className="send-btn"
              disabled={sending}
              onClick={handleSubmit}
            >
              {sending ? "Sending…" : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <p
                style={{
                  textAlign: "center",
                  color: "#4ade80",
                  fontFamily: "Gilroy",
                  fontSize: "14px",
                  marginTop: "4px",
                }}
              >
                {status}
              </p>
            )}
          </div>

          {/* Social icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              marginTop: "32px",
            }}
          >
            <a
              href="https://wa.me/918308111736?text=Hello%2C%20I%20want%20to%20talk%20about%20Zaplrn"
              className="social-btn"
              aria-label="X / Twitter"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.instagram.com/zaplrn.app"
              className="social-btn"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
