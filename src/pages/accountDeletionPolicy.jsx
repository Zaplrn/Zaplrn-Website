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
              Zaplrn allows users to request deletion of their account and
              personal data. This page explains what happens when you request
              deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              How to Request Deletion
            </h2>
            <p>
              Send a request to support@zaplrn.com with your account email and a
              clear statement that you want your account deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              What Will Be Deleted
            </h2>
            <p>
              We will delete your account profile, personal data, and content
              associated with your account where possible, subject to legal and
              operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Data Retention
            </h2>
            <p>
              Some information may remain in backups or logs for a limited
              period to comply with legal obligations and to protect the service
              from fraud and abuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Timing</h2>
            <p>
              Account deletion requests are typically processed within a
              reasonable time frame, depending on the nature of the request and
              any required verifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Contact</h2>
            <p>
              If you have questions about account deletion, please contact
              support@zaplrn.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
