import Link from 'next/link';

export default function Recruitment() {
  
  // Single source of truth for the application link
  const applicationLink = "https://docs.google.com/forms/d/e/1FAIpQLSd2cEicM3Kpwrb8nI2FqTmqmvl_Q6X6oG9YN-ngMNGNjfehEg/viewform?usp=header";

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with your background, interests, and a few relevant technical questions"
    },
    {
      step: "2",
      title: "Technical Interview",
      description: "Brief interview to discuss your experience and learn about your goals with SUBC"
    },
    {
      step: "3",
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
      description: "Represent UBC in prestigious international underwater submarine competitions"
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
            Recruitment closed on Sept 21, 2025. <br /> Check back September 2026 for our next recruitment cycle!
          </p>
          <a 
            href={applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 text-lg"
            style={{ backgroundColor: '#001B48', color: '#D6E8EE' }}
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Why Join SUBC (Shifted up to #02457A Background) */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
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

      {/* Application Process (Shifted up to #018ABE Background) */}
      <section className="py-20" style={{ backgroundColor: '#018ABE' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            {/* Text colors changed to light blue to contrast with medium blue background */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Application Process</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              Here's what to expect when you apply to join SUBC
            </p>
          </div>
          
          {/* CHANGED: lg:grid-cols-4 to lg:grid-cols-3 and added justify-center */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            
            {applicationProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ backgroundColor: '#001B48', color: '#D6E8EE' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#D6E8EE' }}>{step.title}</h3>
                <p style={{ color: '#D6E8EE' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs (Shifted up to #97CAD8 Background) */}
      <section className="py-20" style={{ backgroundColor: '#97CAD8' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            {/* Title changed to dark blue to contrast with the light blue background */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001B48' }}>Frequently Asked Questions</h2>
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

      {/* CTA Section (Shifted up to #02457A Background) */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
            Ready to Make Waves?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#D6E8EE' }}>
            Join a team of passionate engineers and innovators working on competition submarines.
          </p>
          <div className="flex gap-4 justify-center">
            {/* Changed from button to a to utilize the applicationLink variable */}
            <a 
              href={applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
            >
              Start Your Application
            </a>
            
            {/* Changed from button to Link to point to the contact page */}
            <Link 
              href="/contact"
              className="inline-block border px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ borderColor: '#D6E8EE', color: '#D6E8EE' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}