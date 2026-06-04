export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-[#010101] text-white px-6 pt-40 pb-">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "Denton" }}
        >
          Community Guidelines
        </h1>

        <p className="text-gray-400 mb-8" style={{ fontFamily: "Gilroy" }}>
          These guidelines help keep Zaplrn safe, respectful, and helpful for
          everyone.
        </p>

        <div
          className="space-y-8 text-gray-300 leading-8"
          style={{ fontFamily: "Gilroy" }}
        >
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Be Respectful
            </h2>
            <p>
              Treat others professionally and respectfully. Harassment, hate
              speech, and abusive behavior are not permitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Share Useful Content
            </h2>
            <p>
              Contribute helpful learning resources and constructive feedback.
              Avoid spam, misleading information, and promotional content
              outside defined app features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Protect Privacy
            </h2>
            <p>
              Do not share personal or private information about others without
              consent. Respect confidentiality and data protection expectations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Follow Applicable Law
            </h2>
            <p>
              Do not post or share illegal content. This includes copyrighted
              material, defamatory statements, and content that violates local
              or international law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Enforcement
            </h2>
            <p>
              Zaplrn may remove content, warn users, or suspend accounts that
              violate these guidelines. We may also report abuse to authorities
              when required.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
