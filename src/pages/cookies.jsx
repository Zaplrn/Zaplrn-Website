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
              Zaplrn uses cookies, mobile device identifiers, and similar local
              storage technologies to enhance app performance, remember your
              preferences, and understand how you interact with our
              micro-learning platform and educational content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. Types of Technologies We Use
            </h2>

            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>
                <strong>Essential Storage:</strong> Required for keeping you
                securely logged in, protecting account switches between Learner
                and Creator profiles, and ensuring smooth short-form video
                playback.
              </li>

              <li>
                <strong>Performance & Tracking:</strong> Helps us measure video
                loading times, screen transition performance, application
                stability, and crash analytics to improve the overall learning
                experience.
              </li>

              <li>
                <strong>Functional Preferences:</strong> Remembers your selected
                learning categories, playback preferences, interface settings,
                and other personalization choices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. Third-Party Analytics
            </h2>

            <p>
              We may use trusted third-party analytics, crash monitoring, and
              content delivery services to better understand platform
              performance and optimize mobile streaming quality.
            </p>

            <p className="mt-3">
              These services may deploy cookies, device tokens, or similar
              technologies to collect technical performance information and
              improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. Managing Your Preferences
            </h2>

            <p>
              You can manage cookie preferences through your web browser
              settings and control mobile tracking permissions directly from
              your iOS or Android device settings.
            </p>

            <p className="mt-3">
              Please note that disabling certain essential cookies, storage
              technologies, or tracking tokens may affect core functionality,
              including video playback, authentication, content recommendations,
              and profile switching features.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
