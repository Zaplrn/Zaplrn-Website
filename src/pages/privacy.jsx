export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#010101] text-white px-6 pt-40 pb-20">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-8"
          style={{ fontFamily: "Denton" }}
        >
          Privacy Policy
        </h1>

        <p className="text-gray-400 mb-8" style={{ fontFamily: "Gilroy" }}>
          Last Updated: June 2026
        </p>

        <div
          className="space-y-8 text-gray-300 leading-8"
          style={{ fontFamily: "Gilroy" }}
        >
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              To power your personalized learning experience, Zaplrn collects:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Account Details:</strong> Name, email address, username,
                and profile aesthetics.
              </li>
              <li>
                <strong>Growth Metrics:</strong> Your selected industry
                interests, skill tags, tracked Series, lesson completion rates,
                and learning streaks to fuel our Discovery Engine.
              </li>
              <li>
                <strong>Communication Data:</strong> Text logs transmitted
                through our Integrated Mastery Chat to ensure community safety
                and prevent spam.
              </li>
              <li>
                <strong>Device & Usage Analytics:</strong> IP address, operating
                system, app crashes, and playback interaction data to optimize
                mobile video streaming.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. How We Collect Information
            </h2>
            <p>
              We collect data directly from your inputs, including registration,
              chat messages, and profile adjustments. We also collect
              information automatically through app interactions as you browse
              and engage with content across the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>

            <p>
              We use your information to provide and improve the Zaplrn learning
              experience, including:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Delivering a personalized, distraction-free horizontal and
                vertical learning feed.
              </li>
              <li>
                Authenticating seamless profile switching between student and
                mentor modes.
              </li>
              <li>
                Providing analytics and progress insights for creators and
                educators.
              </li>
              <li>
                Diagnosing technical streaming issues and delivering critical
                app updates.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Data Sharing and No-Sale Commitment
            </h2>
            <p>
              Zaplrn strictly does not sell your personal information, learning
              activity, or scrolling history to third-party data brokers.
            </p>

            <p className="mt-3">
              We only share information with trusted service providers who
              assist us with hosting video content, processing payments,
              maintaining infrastructure, and analyzing platform performance.
              These providers operate under strict confidentiality and security
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Cookies and Local Storage
            </h2>
            <p>
              We use cookies, mobile device tokens, and similar technologies to
              remember your preferences, such as volume settings, theme choices,
              and login sessions, ensuring a seamless experience across your
              digital campus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your account information and personal growth metrics for
              as long as your account remains active.
            </p>

            <p className="mt-3">
              If you request account deletion, your information will be removed
              in accordance with our Account Deletion Policy and applicable
              legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have any questions, privacy concerns, or requests regarding
              your personal data, please contact us at : {" "}
              <a
                href="mailto:support@zaplrn.com"
                className="mt-3 text-white font-medium hover:underline"
              >
                support@zaplrn.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
