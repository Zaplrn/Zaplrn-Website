export default function AccountDeletionPolicy() {
  return (
    <div className="min-h-screen bg-[#010101] text-white px-6 pt-40 pb-20">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "Denton" }}
        >
          Account Deletion Policy
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
              At Zaplrn, we value your data autonomy. You have the right to
              request the deletion of your account and personal data at any
              time. This policy explains how account deletion works and what
              happens to your information after a deletion request is submitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. How to Initiate Account Deletion
            </h2>

            <p>
              You can delete your account directly within the Zaplrn application
              by navigating to:
            </p>

            <p className="mt-3 text-white">
              Settings → Account Control → Delete Profile
            </p>

            <p className="mt-3">
              Alternatively, you may submit a deletion request from your
              registered email address by contacting :{" "}
              <a href="mailto:support@zaplrn.com">support@zaplrn.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. What Happens to Your Data (For Learners)
            </h2>

            <p>
              Once your deletion request is verified and confirmed, we will
              permanently remove or anonymize your personal information from our
              active systems.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Profile information and account details.</li>
              <li>Learning progress and completion metrics.</li>
              <li>Skills dashboard and achievement records.</li>
              <li>Learning streaks and engagement history.</li>
              <li>Chat conversations and related communication data.</li>
            </ul>

            <p className="mt-4">
              This process is typically completed within 30 days of
              confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. The Continuity Clause (For Creators)
            </h2>

            <p>
              To protect the learning journeys of active users, Zaplrn applies a
              continuity policy for creators who have published educational
              content and structured learning Series.
            </p>

            <p className="mt-3">When a creator account is deleted:</p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Personal profile information is permanently removed.</li>
              <li>Creator verification status is revoked.</li>
              <li>Monetization and promotion features are disabled.</li>
              <li>Future publishing access is terminated.</li>
            </ul>

            <p className="mt-4">
              However, if active learners are currently enrolled in or have
              bookmarked a published Series, associated educational video assets
              may remain available in a read-only, non-monetized archive for up
              to 90 days to avoid disruption to ongoing learning paths.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              4. Log and Backup Retention
            </h2>

            <p>
              Certain technical logs, security records, payment-related records,
              and encrypted backups may be retained for a limited period to meet
              legal, regulatory, tax, accounting, security, and fraud-prevention
              requirements.
            </p>

            <p className="mt-3">
              Such retained information is isolated from active user systems and
              will not be used for marketing, personalization, or community
              engagement purposes.
            </p>

            <p className="mt-3">
              Backup and regulatory retention periods will not exceed 90 days
              unless a longer period is required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              5. Contact Us
            </h2>

            <p>
              If you have questions regarding account deletion, data retention,
              or privacy rights, please contact :{" "}
              <a href="mailto:support@zaplrn.com">support@zaplrn.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
