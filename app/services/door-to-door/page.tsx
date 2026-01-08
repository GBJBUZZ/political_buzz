export default function DoorToDoorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000629] via-[#001845] to-[#3377FF] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Door-to-Door Campaigns</h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] mb-8">
              Personal Touch, Maximum Impact - Connecting with Every Voter
            </p>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000629] mb-12 text-center">Our Door-to-Door Strategy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Household Mapping",
                description: "Complete constituency mapping with family-wise voter data and issue tracking",
              },
              {
                title: "Volunteer Training",
                description:
                  "Comprehensive training for field agents on communication, data collection, and issue resolution",
              },
              {
                title: "Material Distribution",
                description: "Strategic distribution of campaign materials, manifestos, and voter slips",
              },
              {
                title: "Feedback Collection",
                description: "Real-time voter sentiment tracking and issue identification through mobile app",
              },
              {
                title: "Follow-up System",
                description: "Systematic follow-up with undecided voters and issue resolution tracking",
              },
              {
                title: "Data Analytics",
                description: "Daily performance dashboards and voter engagement metrics",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#000629] mb-3">{item.title}</h3>
                <p className="text-[#000629]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-gradient-to-r from-[#3377FF] to-[#000629]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">100% Constituency Coverage</h2>
            <p className="text-lg mb-8">
              Our systematic approach ensures every household is reached multiple times throughout the campaign period
              with personalized messaging and issue-based engagement.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors"
            >
              Plan Your Campaign
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
