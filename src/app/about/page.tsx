export default function About() {
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #018ABE, #02457A)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
            About SUBC
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#D6E8EE' }}>
            The UBC Submarine Club is a student-led organization dedicated to advancing 
            underwater robotics and submarine technology through innovation, collaboration, 
            and hands-on learning.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
                Our Mission
              </h2>
              <p className="text-lg mb-6" style={{ color: '#D6E8EE' }}>
                We strive to provide UBC students with practical engineering experience 
                through the design, construction, and operation of autonomous underwater vehicles (AUVs).
              </p>
              <p className="text-lg" style={{ color: '#D6E8EE' }}>
                Our team participates in international competitions, conducts research, 
                and fosters a community of passionate engineers and innovators.
              </p>
            </div>
            <div className="rounded-lg h-80 flex items-center justify-center" style={{ backgroundColor: '#97CAD8' }}>
              <span style={{ color: '#001B48' }}>Mission Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" style={{ backgroundColor: '#018ABE' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#001B48' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}>
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Excellence</h3>
              <p style={{ color: '#D6E8EE' }}>
                We pursue excellence in engineering design, project management, 
                and team collaboration.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#001B48' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Innovation</h3>
              <p style={{ color: '#D6E8EE' }}>
                We embrace cutting-edge technology and creative problem-solving 
                to push the boundaries of underwater robotics.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#001B48' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}>
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#D6E8EE' }}>Collaboration</h3>
              <p style={{ color: '#D6E8EE' }}>
                We believe in the power of teamwork and cross-disciplinary 
                collaboration to achieve our goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20" style={{ backgroundColor: '#97CAD8' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001B48' }}>Our History</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#001B48' }}></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#001B48' }}>get some dates and lore in here</h3>
                  <p style={{ color: '#001B48' }}>
                    SUBC was established with the vision of bringing together 
                    passionate students interested in underwater robotics.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#001B48' }}></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#001B48' }}>First Competition</h3>
                  <p style={{ color: '#001B48' }}>
                    yada yada.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#001B48' }}></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#001B48' }}>bullet</h3>
                  <p style={{ color: '#001B48' }}>
                    TODO: add util function to parse json for adding bullet points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#001B48' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
            Get in Touch
          </h2>
          <p className="text-xl mb-8" style={{ color: '#D6E8EE' }}>
            Interested in learning more about SUBC? We'd love to hear from you!
          </p>
          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}