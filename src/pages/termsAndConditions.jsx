export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#010101] text-white px-6 pt-40 pb-20">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "Denton" }}
        >
          Terms & Conditions
        </h1>
        <p className="text-gray-400 mb-8" style={{ fontFamily: "Gilroy" }}>
          Last Updated: June 2026
        </p>

        <div
          className="space-y-8 text-gray-300 leading-8"
          style={{ fontFamily: "Gilroy" }}
        >
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. Introduction
            </h2>
            <p>
              These Terms and Conditions govern your use of the Zaplrn mobile
              application and website. By accessing or using Zaplrn, you agree
              to comply with these Terms and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. Eligibility
            </h2>
            <p>
              You must be at least 13 years of age (or the minimum legal age
              required in your jurisdiction) to use Zaplrn. If you are a minor,
              you may only use the service under the supervision of a parent or
              legal guardian who agrees to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. Account Registration & Dual Profiles
            </h2>
            <p>
              Zaplrn features a unified account system that allows users to
              switch seamlessly between Learner and Creator profiles. You are
              solely responsible for maintaining the confidentiality of your
              account credentials.
            </p>

            <p className="mt-3">
              All activity conducted through your account, whether in Learner
              mode or Creator mode, remains your responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              4. Intellectual Property & Video Content
            </h2>

            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>
                <strong>Creator Rights:</strong> Creators retain ownership and
                copyright of the short-form videos ("Zaps") and curated learning
                collections ("Series") they upload.
              </li>

              <li>
                <strong>Platform License:</strong> By uploading content to
                Zaplrn, you grant us a worldwide, non-exclusive, royalty-free
                license to host, stream, distribute, cache, and display your
                content to users through the platform.
              </li>

              <li>
                <strong>Learner Usage:</strong> Content available on Zaplrn is
                intended for personal educational use only. Users may not
                download, copy, redistribute, or commercially exploit video
                content without explicit permission from both the creator and
                the platform.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              5. Purchases, Subscriptions & Paid Promotions
            </h2>
            <p>
              Any financial transactions made within Zaplrn, including
              subscriptions and creator-paid promotional tools used to increase
              content reach, are processed through authorized third-party app
              stores or payment gateways.
            </p>

            <p className="mt-3">
              Fees paid for internal promotional services, algorithmic boosts,
              or advertising features are final and non-refundable unless
              otherwise required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              6. Educational Disclaimer & Limitation of Liability
            </h2>
            <p>
              Zaplrn is a micro-learning community platform that enables
              creators to share educational content and knowledge.
            </p>

            <p className="mt-3">
              We do not independently verify or guarantee the accuracy,
              completeness, or reliability of technical instructions, financial
              insights, coding frameworks, career advice, or any other content
              shared by creators.
            </p>

            <p className="mt-3">
              Zaplrn is provided on an "as is" and "as available" basis. To the
              fullest extent permitted by law, Zaplrn shall not be liable for
              any direct, indirect, incidental, consequential, or special
              damages, including financial loss, data loss, or career outcomes
              resulting from reliance on information obtained through the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              7. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account,
              including both Learner and Creator access, immediately and without
              prior notice if you violate these Terms, breach our Community
              Guidelines, or engage in behavior that harms the Zaplrn ecosystem
              or its users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              8. Contact
            </h2>
            <p>
              If you have questions regarding these Terms and Conditions, please
              contact us at :{" "}
              <a
                href="mailto:support@zaplrn.com"
                className="mt-3 text-white font-medium hover:underline"
              >
                support@zaplrn.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
