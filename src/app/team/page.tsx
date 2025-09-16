export default function Team() {
  const executives = [
    { name: "Team Member 1", position: "President", description: "Leading the club's vision and strategy" },
    { name: "Team Member 2", position: "Vice President", description: "Supporting operations and team coordination" },
    { name: "Team Member 3", position: "Technical Lead", description: "Overseeing submarine design and development" },
    { name: "Team Member 4", position: "Project Manager", description: "Managing timelines and deliverables" },
  ];

  const departments = [
    {
      name: "Mechanical Engineering",
      description: "Designing the submarine hull, propulsion systems, and mechanical components",
      members: ["Member 1", "Member 2", "Member 3", "Member 4"]
    },
    {
      name: "Electrical Engineering", 
      description: "Developing control systems, sensors, and electrical infrastructure",
      members: ["Member 5", "Member 6", "Member 7", "Member 8"]
    },
    {
      name: "Software Engineering",
      description: "Creating autonomous navigation, computer vision, and control algorithms",
      members: ["Member 9", "Member 10", "Member 11", "Member 12"]
    },
    {
      name: "Business & Operations",
      description: "Managing sponsorships, outreach, and organizational operations",
      members: ["Member 13", "Member 14", "Member 15", "Member 16"]
    }
  ];

  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #018ABE, #02457A)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
            Our Team
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#D6E8EE' }}>
            Meet the passionate students behind SUBC's success. Our diverse team 
            brings together expertise from multiple engineering disciplines.
            // TODO: need to think of how to format this page. for now just a placeholder like everything else
          </p>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">{/* Executive Team Section */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Executive Team</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              Our leadership team guides the strategic direction and day-to-day operations of SUBC
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((exec, index) => (
              <div key={index} className="text-center p-6 rounded-lg" style={{ backgroundColor: '#001B48' }}>
                <div className="w-24 h-24 rounded-full mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}></div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#D6E8EE' }}>{exec.name}</h3>
                <p className="font-medium mb-3" style={{ color: '#97CAD8' }}>{exec.position}</p>
                <p className="text-sm" style={{ color: '#D6E8EE' }}>{exec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20" style={{ backgroundColor: '#018ABE' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Our Departments</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              Specialized teams working together to bring our submarine to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="rounded-lg p-8" style={{ backgroundColor: '#001B48' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>{dept.name}</h3>
                <p className="mb-6" style={{ color: '#D6E8EE' }}>{dept.description}</p>
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#D6E8EE' }}>Team Members:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {dept.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: '#97CAD8' }}></div>
                        <span className="text-sm" style={{ color: '#D6E8EE' }}>{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20" style={{ backgroundColor: '#97CAD8' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001B48' }}>Join Our Team</h2>
            <p className="text-lg mb-8" style={{ color: '#001B48' }}>
              We're always looking for passionate students to join our mission
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#02457A' }}>
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#001B48' }}>Students Welcome</h3>
              <p style={{ color: '#001B48' }}>
                All UBC students are welcome, regardless of experience level or field of study
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#02457A' }}>
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#001B48' }}>Learn & Grow</h3>
              <p style={{ color: '#001B48' }}>
                Gain hands-on experience in engineering, project management, and teamwork
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#02457A' }}>
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#001B48' }}>Make Impact</h3>
              <p style={{ color: '#001B48' }}>
                Contribute to cutting-edge underwater robotics and compete internationally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#001B48' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
            Ready to Join Us?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#D6E8EE' }}>
            Take the first step towards an exciting journey in underwater robotics
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
            >
              Apply Now
            </button>
            <button 
              className="border px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ borderColor: '#D6E8EE', color: '#D6E8EE' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}