export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#010101] text-white px-6 pt-40 pb-20">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "Denton" }}
        >
          Cookie Policy
        </h1>

        <p className="text-gray-400 mb-8" style={{ fontFamily: "Gilroy" }}>
          Last Updated: June 2026
        </p>

        <div
          className="space-y-8 text-gray-300 leading-8"
          style={{ fontFamily: "Gilroy" }}
        >
          <section>
            <p>
              Zaplrn uses cookies and similar technologies to improve the app
              experience, analyze usage, and remember your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              What Cookies We Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential cookies:</strong> Required for basic app
                functionality and security.
              </li>
              <li>
                <strong>Performance cookies:</strong> Help us understand how the
                app is used and improve performance.
              </li>
              <li>
                <strong>Functional cookies:</strong> Remember your preferences
                and settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Third-Party Cookies
            </h2>
            <p>
              We may use third-party analytics and service providers to help us
              improve Zaplrn. These providers may also store cookies on your
              device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Managing Cookies
            </h2>
            <p>
              You can control cookies through your browser or mobile device
              settings. Disabling certain cookies may limit some features or
              prevent the app from functioning properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy as we improve the app. We will
              post any changes here with the effective date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
