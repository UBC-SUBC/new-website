import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/hero-video.webm"
          style={{ 
            filter: 'brightness(0.4) contrast(1.1) saturate(0.8) hue-rotate(10deg)'
          }}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Light overlay for subtle darkening */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{ backgroundColor: 'rgba(0, 27, 72, 0.2)' }}
        ></div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
            Shift this and all hero section left later
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: '#D6E8EE' }}>
            desc 
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#001B48', color: '#D6E8EE' }}>
              b1
            </button>
            <button className="border px-8 py-3 rounded-lg hover:opacity-90 transition-opacity" style={{ borderColor: '#D6E8EE', color: '#D6E8EE' }}>
              b2
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
              About us
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#D6E8EE' }}>
              about text
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6"></div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section id="team-preview" className="py-20" style={{ backgroundColor: '#018ABE' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Our Team</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#D6E8EE' }}>
              remove this section later probably
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}></div>
                <h3 className="font-semibold" style={{ color: '#D6E8EE' }}>Team Member {i}</h3>
                <p className="text-sm" style={{ color: '#D6E8EE' }}>Role</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="/team" 
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#001B48', color: '#D6E8EE' }}
            >
              Team page button
            </a>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects-preview" className="py-20" style={{ backgroundColor: '#97CAD8' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001B48' }}>Projects</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#001B48' }}>
              Replace with 3d models later
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#02457A' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Sub 1</h3>
              <p className="mb-4" style={{ color: '#D6E8EE' }}>
                description
              </p>
              <div className="w-full h-48 rounded-lg mb-4" style={{ backgroundColor: '#018ABE' }}></div>
              <button 
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: '#D6E8EE', color: '#001B48' }}
              >
                Learn More
              </button>
            </div>
            <div className="rounded-lg p-6" style={{ backgroundColor: '#02457A' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Sub 2</h3>
              <p className="mb-4" style={{ color: '#D6E8EE' }}>
                description
              </p>
              <div className="w-full h-48 rounded-lg mb-4" style={{ backgroundColor: '#018ABE' }}></div>
              <button 
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: '#D6E8EE', color: '#001B48' }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <a 
              href="/projects" 
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#001B48', color: '#D6E8EE' }}
            >
              /projects href
            </a>
          </div>
        </div>
      </section>

      {/* Sponsorship CTA Section */}
      <section id="sponsorship-cta" className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D6E8EE' }}>Partner With Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#D6E8EE' }}>
            sponsor us yada yada // TODO add contact popup later
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/sponsorship" 
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#D6E8EE', color: '#001B48' }}
            >
              Become a Sponsor
            </a>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
              style={{ borderColor: '#D6E8EE', color: '#D6E8EE' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section id="join-cta" className="py-20" style={{ backgroundColor: '#001B48' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D6E8EE' }}>Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#D6E8EE' }}>
            Are you passionate about underwater robotics and engineering? 
            We're always looking for motivated students to join our team.
          </p>
          <a 
            href="/recruitment" 
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
          >
            Learn How to Join
          </a>
        </div>
      </section>
    </main>
  );
}
