export default function Projects() {
  const currentProjects = [
    {
      title: "SUB1",
      description: "sub1 description",
      status: "In Development",
      technologies: ["ROS", "Computer Vision", "Python", "Arduino"],
      timeline: "2024-2025"
    },
  ];

  const pastProjects = [
    {
      title: "Competition AUV 2023",
      description: "Our competition submarine that participated in the International AUV Competition, achieving notable performance in autonomous navigation tasks.",
      achievements: ["3rd Place Navigation", "Innovation Award"],
      technologies: ["OpenCV", "ROS", "Python"],
      year: "2023"
    },
    {
      title: "Prototype Submarine v1",
      description: "Our first fully functional prototype that established the foundation for future designs and competition entries.",
      achievements: ["Successful Pool Testing", "First Autonomous Mission"],
      technologies: ["Arduino", "Basic Sensors", "Manual Control"],
      year: "2022"
    }
  ];

  const technicalSpecs = [
    { category: "Dimensions", value: "Length: 1.5m, Width: 0.8m, Height: 0.6m" },
    { category: "Weight", value: "45 kg (with ballast)" },
    { category: "Propulsion", value: "6 thruster configuration" },
    { category: "Sensors", value: "Cameras, Sonar, IMU, Pressure sensors" },
    { category: "Computing", value: "NVIDIA Jetson Nano" },
    { category: "Operating Depth", value: "Up to 10 meters" }
  ];

  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #018ABE, #02457A)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
            Our Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#D6E8EE' }}>
            Explore our cutting-edge submarine designs and underwater robotics innovations. 
            From competition vehicles to research prototypes, discover how we're pushing 
            the boundaries of autonomous underwater technology.
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Current Project</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              This is the page where I will go crazy and add the 3d stuff, especially pages for each project. Need to add routing per project.
              Maybe make a util function to add project.
              Refer to 3d carousel design later
            </p>
          </div>
          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="rounded-lg p-8" style={{ backgroundColor: '#001B48' }}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-semibold mr-4" style={{ color: '#D6E8EE' }}>{project.title}</h3>
                      <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#97CAD8', color: '#001B48' }}>
                        {project.status}
                      </span>
                    </div>
                    <p className="mb-6" style={{ color: '#D6E8EE' }}>{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2" style={{ color: '#D6E8EE' }}>Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 rounded text-sm" style={{ backgroundColor: '#97CAD8', color: '#001B48' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm" style={{ color: '#97CAD8' }}>Timeline: {project.timeline}</p>
                  </div>
                  <div className="rounded-lg h-64 flex items-center justify-center" style={{ backgroundColor: '#97CAD8' }}>
                    <span style={{ color: '#001B48' }}>Project Image Placeholder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20" style={{ backgroundColor: '#018ABE' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Technical Specifications</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              Make it like an apple product page?
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="rounded-lg p-6" style={{ backgroundColor: '#001B48' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#D6E8EE' }}>{spec.category}</h3>
                <p style={{ color: '#D6E8EE' }}>{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="py-20" style={{ backgroundColor: '#97CAD8' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#001B48' }}>Past Projects</h2>
            <p className="text-lg" style={{ color: '#001B48' }}>
              carousel, 3d webgl floating text
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pastProjects.map((project, index) => (
              <div key={index} className="rounded-lg p-8" style={{ backgroundColor: '#02457A' }}>
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-semibold mr-4" style={{ color: '#D6E8EE' }}>{project.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#97CAD8', color: '#001B48' }}>
                    {project.year}
                  </span>
                </div>
                <p className="mb-6" style={{ color: '#D6E8EE' }}>{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: '#D6E8EE' }}>Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1" style={{ color: '#D6E8EE' }}>
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#D6E8EE' }}>Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 rounded text-sm" style={{ backgroundColor: '#97CAD8', color: '#001B48' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20" style={{ backgroundColor: '#02457A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Project Gallery</h2>
            <p className="text-lg" style={{ color: '#D6E8EE' }}>
              collage or carousel, come up with fun design
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="rounded-lg h-48 flex items-center justify-center transition-all hover:scale-105 cursor-pointer" style={{ backgroundColor: '#018ABE' }}>
                <span style={{ color: '#D6E8EE' }}>Gallery Image {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20" style={{ backgroundColor: '#001B48' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
            Get Involved
          </h2>
          <p className="text-xl mb-8" style={{ color: '#D6E8EE' }}>
            Want to contribute to our next submarine project? Join our team and help us innovate!
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
            >
              Join the Team
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