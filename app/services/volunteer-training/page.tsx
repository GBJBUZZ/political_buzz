export default function VolunteerTrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000629] via-[#001845] to-[#3377FF] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Volunteer Mobilization & Training
            </h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] mb-8">
              Building Your Ground Army - 340+ Trained Volunteers Per Campaign
            </p>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000629] mb-12 text-center">
            Comprehensive Training Program
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Campaign Planning",
                sessions: "3-5 sessions",
                topics: ["Strategy overview", "Role assignment", "Timeline management", "Goal setting"],
              },
              {
                title: "Communication Skills",
                sessions: "2-3 sessions",
                topics: ["Voter interaction", "Issue handling", "Persuasion techniques", "Local language"],
              },
              {
                title: "Digital Tools",
                sessions: "2 sessions",
                topics: ["Mobile app usage", "Data entry", "Social media", "Reporting systems"],
              },
              {
                title: "Field Operations",
                sessions: "3-4 sessions",
                topics: ["Door-to-door tactics", "Event management", "Material distribution", "Safety protocols"],
              },
              {
                title: "Polling Day",
                sessions: "2 sessions",
                topics: ["Booth management", "Voter assistance", "Legal compliance", "Result tracking"],
              },
              {
                title: "Leadership Development",
                sessions: "2 sessions",
                topics: ["Team management", "Conflict resolution", "Motivation", "Performance tracking"],
              },
            ].map((module, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#000629] mb-2">{module.title}</h3>
                <p className="text-[#3377FF] font-semibold mb-4">{module.sessions}</p>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#000629]">
                      <span className="text-[#3377FF]">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-16 bg-[#E1F2FE]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000629] mb-12 text-center">
            Volunteer Network Structure
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#3377FF] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-[#000629]">Ward Leads (17 per campaign)</h3>
                  <p className="text-[#000629]">Senior coordinators managing ward-level operations</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#FFCF45] text-[#000629] rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-[#000629]">Volunteers (20 per ward = 340 total)</h3>
                  <p className="text-[#000629]">Ground-level activists executing daily campaign activities</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#72E9CD] text-[#000629] rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-[#000629]">Performance Dashboard</h3>
                  <p className="text-[#000629]">Real-time tracking and weekly performance reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3377FF] to-[#000629]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build Your Winning Team</h2>
          <a
            href="/contact"
            className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors"
          >
            Start Training Program
          </a>
        </div>
      </section>
    </div>
  )
}
