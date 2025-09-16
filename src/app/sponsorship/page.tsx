export default function Sponsorship() {
  const sponsorshipTiers = [
    {
      name: "Platinum",
      amount: "$5,000+",
      benefits: [
        "Logo prominently displayed on submarine hull",
        "Company name on team apparel",
        "Social media recognition throughout competition season",
        "Invitation to competition viewing events",
        "Technical presentation and submarine demonstration",
        "Priority for recruitment partnerships",
        "Annual report with project updates"
      ],
      color: "bg-purple-100 border-purple-300 text-purple-800"
    },
    {
      name: "Gold",
      amount: "$2,500+",
      benefits: [
        "Logo displayed on submarine",
        "Company name on competition banner",
        "Social media mentions",
        "Competition updates and results",
        "Annual report with project highlights",
        "Networking opportunities with team"
      ],
      color: "bg-yellow-100 border-yellow-300 text-yellow-800"
    },
    {
      name: "Silver",
      amount: "$1,000+",
      benefits: [
        "Logo on team website",
        "Company name in competition materials",
        "Thank you mention in presentations",
        "Annual project summary report",
        "Social media recognition"
      ],
      color: "bg-gray-100 border-gray-300 text-gray-800"
    },
    {
      name: "Bronze",
      amount: "$500+",
      benefits: [
        "Company name on team website",
        "Thank you mention in team communications",
        "Project summary updates",
        "Social media recognition"
      ],
      color: "bg-orange-100 border-orange-300 text-orange-800"
    }
  ];

  const currentSponsors = [
    { name: "Sponsor Company 1", tier: "Platinum", logo: "Logo 1" },
    { name: "Sponsor Company 2", tier: "Gold", logo: "Logo 2" },
    { name: "Sponsor Company 3", tier: "Silver", logo: "Logo 3" },
    { name: "Sponsor Company 4", tier: "Bronze", logo: "Logo 4" },
  ];

  const sponsorshipUses = [
    {
      category: "Hardware & Components",
      percentage: "40%",
      description: "Submarine hull, propulsion systems, sensors, and electronic components"
    },
    {
      category: "Competition & Travel",
      percentage: "30%",
      description: "Registration fees, transportation, accommodation, and competition logistics"
    },
    {
      category: "Tools & Equipment",
      percentage: "20%",
      description: "Manufacturing tools, testing equipment, and workshop materials"
    },
    {
      category: "Training & Development",
      percentage: "10%",
      description: "Workshops, training programs, and educational resources for team members"
    }
  ];

  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #018ABE, #02457A)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
            Sponsorship Opportunities
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#D6E8EE' }}>
            Partner with SUBC to support the next generation of engineers and innovators. 
            Join us in advancing underwater robotics technology while gaining valuable 
            exposure and recruitment opportunities.
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Why Sponsor SUBC?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}>
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Talent Pipeline</h3>
              <p style={{ color: '#D6E8EE' }}>
                Connect with top engineering students and identify future talent for your organization
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Innovation Partnership</h3>
              <p style={{ color: '#D6E8EE' }}>
                Support cutting-edge research and development in underwater robotics and automation
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}>
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Brand Visibility</h3>
              <p style={{ color: '#D6E8EE' }}>
                Gain exposure through competitions, social media, and university events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20" style={{ backgroundColor: '#018ABE' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Sponsorship Tiers</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              Choose the sponsorship level that best fits your organization's goals and budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="rounded-lg p-6 border-2 transition-all hover:scale-105" style={{ backgroundColor: '#001B48', borderColor: '#97CAD8' }}>
                <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#97CAD8', color: '#001B48' }}>
                  {tier.name}
                </div>
                <div className="text-3xl font-bold mb-6" style={{ color: '#D6E8EE' }}>{tier.amount}</div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <span className="mr-2 mt-1" style={{ color: '#97CAD8' }}>✓</span>
                      <span className="text-sm" style={{ color: '#D6E8EE' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="py-20" style={{ backgroundColor: '#97CAD8' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001B48' }}>How Your Investment is Used</h2>
            <p className="text-lg" style={{ color: '#001B48' }}>
              Transparency in how sponsorship funds directly support our mission
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {sponsorshipUses.map((use, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#02457A' }}>
                    <span className="text-lg font-bold" style={{ color: '#D6E8EE' }}>{use.percentage}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#001B48' }}>{use.category}</h3>
                    <p style={{ color: '#001B48' }}>{use.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg p-8" style={{ backgroundColor: '#02457A' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#D6E8EE' }}>Impact by the Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span style={{ color: '#D6E8EE' }}>Team Members Supported</span>
                  <span className="text-2xl font-bold" style={{ color: '#97CAD8' }}>50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: '#D6E8EE' }}>Competition Entries</span>
                  <span className="text-2xl font-bold" style={{ color: '#97CAD8' }}>5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: '#D6E8EE' }}>Years of Operation</span>
                  <span className="text-2xl font-bold" style={{ color: '#97CAD8' }}>8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: '#D6E8EE' }}>Awards Won</span>
                  <span className="text-2xl font-bold" style={{ color: '#97CAD8' }}>12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Our Valued Sponsors</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              v Tiered section showcasing sponsors not this v
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className="rounded-lg p-6 text-center" style={{ backgroundColor: '#001B48' }}>
                <div className="w-20 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#97CAD8' }}>
                  <span className="text-sm" style={{ color: '#001B48' }}>{sponsor.logo}</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#D6E8EE' }}>{sponsor.name}</h3>
                <span className="inline-block px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#97CAD8', color: '#001B48' }}>
                  {sponsor.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#001B48' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#D6E8EE' }}>
            Let's discuss how we can create a mutually beneficial partnership that advances 
            underwater robotics and supports engineering education.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
            >
              Contact Our Sponsorship Team
            </button>
            <button 
              className="border px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ borderColor: '#D6E8EE', color: '#D6E8EE' }}
            >
              Download Sponsorship Package
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}