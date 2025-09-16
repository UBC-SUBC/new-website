export default function Recruitment() {
  const positions = [
    {
      title: "Mechanical Engineers",
      department: "Mechanical Design",
      description: "Design and develop submarine hull, propulsion systems, and mechanical components",
      requirements: [
        "Interest in mechanical engineering or related field",
        "Basic CAD experience (SolidWorks, Fusion 360, etc.)",
        "Understanding of fluid dynamics (preferred)",
        "Problem-solving mindset"
      ],
      commitment: "6-8 hours/week",
      location: "UBC Campus Workshops"
    },
    {
      title: "Electrical Engineers",
      department: "Electrical Systems",
      description: "Develop control systems, power distribution, and sensor integration",
      requirements: [
        "Electrical engineering or computer engineering background",
        "Circuit design and PCB layout experience",
        "Knowledge of microcontrollers (Arduino, Raspberry Pi)",
        "Understanding of power systems"
      ],
      commitment: "6-8 hours/week",
      location: "UBC Campus Labs"
    },
    {
      title: "Software Developers",
      department: "Software & Controls",
      description: "Create autonomous navigation systems, computer vision, and control algorithms",
      requirements: [
        "Programming experience (Python, C++, ROS)",
        "Interest in robotics and autonomous systems",
        "Computer vision knowledge (OpenCV preferred)",
        "Linux/Unix experience helpful"
      ],
      commitment: "6-8 hours/week",
      location: "Remote/Campus"
    },
    {
      title: "Business & Operations",
      department: "Business Development",
      description: "Manage sponsorships, outreach, marketing, and team operations",
      requirements: [
        "Strong communication and presentation skills",
        "Interest in business development or marketing",
        "Event planning experience (preferred)",
        "Social media and content creation skills"
      ],
      commitment: "4-6 hours/week",
      location: "Remote/Campus"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with your background, interests, and availability"
    },
    {
      step: "2",
      title: "Technical Interview",
      description: "Brief interview to discuss your experience and learn about your goals with SUBC"
    },
    {
      step: "3",
      title: "Project Assessment",
      description: "Complete a small technical challenge relevant to your area of interest"
    },
    {
      step: "4",
      title: "Team Onboarding",
      description: "Welcome to SUBC! Attend orientation and begin contributing to active projects"
    }
  ];

  const benefits = [
    {
      icon: "🛠️",
      title: "Hands-on Experience",
      description: "Work with real engineering challenges and cutting-edge technology"
    },
    {
      icon: "🏆",
      title: "Competition Experience",
      description: "Represent UBC in prestigious international underwater robotics competitions"
    },
    {
      icon: "👥",
      title: "Networking",
      description: "Connect with industry professionals, alumni, and like-minded peers"
    },
    {
      icon: "💡",
      title: "Skill Development",
      description: "Develop technical, leadership, and project management skills"
    },
    {
      icon: "📚",
      title: "Learning Opportunities",
      description: "Access to workshops, training sessions, and mentorship programs"
    },
    {
      icon: "🎯",
      title: "Career Advancement",
      description: "Build your resume with meaningful project experience and achievements"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior experience in robotics or submarines?",
      answer: "No prior experience is required! We welcome students from all backgrounds and provide training and mentorship to help you get started."
    },
    {
      question: "What is the time commitment?",
      answer: "We typically expect 4-8 hours per week depending on your role, with increased commitment during competition seasons (usually 2-3 months per year)."
    },
    {
      question: "Can I join if I'm not an engineering student?",
      answer: "Absolutely! We value diverse perspectives and welcome students from all faculties. Business, communications, and other disciplines are valuable to our team."
    },
    {
      question: "When do you recruit new members?",
      answer: "We have recruitment periods at the beginning of each semester (September and January), but exceptional candidates may be considered year-round."
    },
    {
      question: "Is there any cost to join?",
      answer: "There are no membership fees. All tools, materials, and training are provided by the club and our sponsors."
    }
  ];

  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #018ABE, #02457A)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
            Join Our Team
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: '#D6E8EE' }}>
            Ready to dive into the exciting world of underwater robotics? Join SUBC and be part 
            of a team that's pushing the boundaries of autonomous submarine technology.
            // TODO: add sponsorship package pdf link
          </p>
          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 text-lg"
            style={{ backgroundColor: '#001B48', color: '#D6E8EE' }}
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Open Positions</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              We're looking for passionate students to join our various departments
            </p>
          </div>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="rounded-lg p-8" style={{ backgroundColor: '#001B48' }}>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2" style={{ color: '#D6E8EE' }}>{position.title}</h3>
                        <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#97CAD8', color: '#001B48' }}>
                          {position.department}
                        </span>
                      </div>
                    </div>
                    <p className="mb-6" style={{ color: '#D6E8EE' }}>{position.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: '#D6E8EE' }}>Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <span className="mr-2 mt-1" style={{ color: '#97CAD8' }}>•</span>
                            <span style={{ color: '#D6E8EE' }}>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#D6E8EE' }}>Time Commitment</h4>
                      <p style={{ color: '#D6E8EE' }}>{position.commitment}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#D6E8EE' }}>Location</h4>
                      <p style={{ color: '#D6E8EE' }}>{position.location}</p>
                    </div>
                    <button 
                      className="w-full px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                      style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
                    >
                      Apply for this Position
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join SUBC */}
      <section className="py-20" style={{ backgroundColor: '#018ABE' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Why Join SUBC?</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              Discover the benefits of being part of our innovative team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg p-6 text-center" style={{ backgroundColor: '#001B48' }}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#D6E8EE' }}>{benefit.title}</h3>
                <p style={{ color: '#D6E8EE' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20" style={{ backgroundColor: '#97CAD8' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001B48' }}>Application Process</h2>
            <p className="text-lg" style={{ color: '#001B48' }}>
              Here's what to expect when you apply to join SUBC
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ backgroundColor: '#02457A', color: '#D6E8EE' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#001B48' }}>{step.title}</h3>
                <p style={{ color: '#001B48' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg p-6" style={{ backgroundColor: '#001B48' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#D6E8EE' }}>{faq.question}</h3>
                <p style={{ color: '#D6E8EE' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#001B48' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
            Ready to Make Waves?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#D6E8EE' }}>
            Join a team of passionate engineers and innovators working on the future of underwater robotics
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
            >
              Start Your Application
            </button>
            <button 
              className="border px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ borderColor: '#D6E8EE', color: '#D6E8EE' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}