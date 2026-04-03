export default function Competitions() {
  // 1. THE DATA ARRAY
  const pastCompetitions = [
    {
      year: "2024",
      title: "eISR 2024 – Beagle",
      location: "",
      awards: ["Tied 9th Place"],
      description: [
        "Competing with our latest Beagle model at the European International Submarine Races.",
      ],
      images: [
        "/Competition_Photo/2024(1)_copy.jpg",
        "/Competition_Photo/2024(2)_copy.jpg",
      ],
      video: "/Competition_Photo/2024_copy.mp4",
    },
    {
      year: "2023",
      title: "17th ISR – 2023 ( Beagle )",
      location: "",
      awards: [],
      description: [
        "The Beagle introduced a recumbent pedaling position — inspired by our Icarus design — to improve pilot ergonomics and power output despite a larger hull volume.",
        "To simplify the drivetrain in this configuration, the pilot faces the stern, positioning the pedals near the propeller shaft, assisted by an electronic vision system for navigation.",
        "All systems were housed in a CFRP hull with an adjustable aluminum frame to accommodate different pilots and pedaling setups.",
      ],
      images: [
        "/Competition_Photo/2023(1)_copy.jpg",
        "/Competition_Photo/2023(2)_copy.jpg",
        "/Competition_Photo/2023(3)_copy.png",
      ],
      video: "",
    },
    {
      year: "2021",
      title: "16th vISR ( Virtual ) – 2021",
      location: "Virtual",
      awards: [
        "1st Place – Drivetrain Design Challenge",
        "2nd Place – Human Factors Engineering Process",
        "2nd Place – Future Submarine Design Challenge",
      ],
      description: [
        "Featured a special message from Astronaut Megan McArthur on the vISR.",
      ],
      images: [],
      video: "/Competition_Video/2021(2)_copy.mp4",
    },
    {
      year: "2018",
      title: "eISR 2018",
      location: "Gosport, England",
      awards: [
        "3rd Overall Design (2018 & 2020)",
        "10th Overall Performance",
        "Perseverance Award",
      ],
      description: [
        "SUBC took on the challenge of a full redesign — the first in over a decade — aiming for our fastest submarine yet. Focused on propulsion optimization, pilot ergonomics, and full control-system redevelopment.",
        "Converted from linear → rotary drive input. Designed new propeller blades optimized for the carbon-fiber hull. Automated buoyancy control for improved pilot focus.",
      ],
      images: [
        "/Competition_Photo/2018(1)_copy.png",
        "/Competition_Photo/2018(2)_copy.png",
      ],
      video: "",
    },
    {
      year: "2017",
      title: "14th ISR – 2017",
      location: "Bethesda, Maryland, USA",
      awards: [
        "1st at International Conference on Engineering Design",
        "Honorary Mention for Best Design Outline",
      ],
      description: [
        "Rigorously tested propeller blades to determine the optimum angle of attack.",
        "Resized control surfaces to provide finer steering.",
        "Developed a robust, pilot-friendly buoy system to expedite safety inspection.",
      ],
      images: [
        "/Competition_Photo/2017(1)_copy.png",
        "/Competition_Photo/2017(2)_copy.png",
        "/Competition_Photo/2017(3)_copy.png",
      ],
      video: "",
    },
    {
      year: "2016",
      title: "eISR 8 – 2016 (Skookumchuck Mk II)",
      location: "Gosport, England",
      awards: ["1st in Presentation", "5th in Design", "7th Overall"],
      description: [
        "2015–2016 was a defining year, laying the foundation for future success. After relocating twice, the team focused on growth and expansion, achieving an 800% membership increase.",
        "Despite major logistical and managerial challenges, the team completed and tested Skookumchuck Mk II, UBC’s first submarine in the water in four years.",
        "This project marked the culmination of years of effort to build a world-class human-powered submarine, offering students a unique and lasting engineering experience.",
      ],
      images: ["/Competition_Photo/2016(1)_copy.png"],
      video: "/Competition_Video/2016_copy.mp4",
    },
  ];

  // 2. THE PAGE LAYOUT
  return (
    <main className="min-h-screen pt-16" style={{ backgroundColor: "#2a2a2a" }}>
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #018ABE, #02457A)" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#D6E8EE" }}
          >
            Past Competitions
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#D6E8EE" }}>
            Explore SUBC’s history of innovation, design, and competition — from
            early prototypes to modern carbon-fiber submarines.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20" style={{ backgroundColor: "#02457A" }}>
        {/* CHANGED THIS TO max-w-6xl SO IT IS MUCH WIDER */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {pastCompetitions.map((comp, index) => (
              <div
                key={index}
                className="rounded-xl p-8 shadow-2xl"
                style={{ backgroundColor: "#001B48" }}
              >
                {/* Header: Title and Year */}
                <div className="border-b border-gray-600 pb-4 mb-8">
                  <h2
                    className="text-4xl font-bold tracking-wide"
                    style={{ color: "#D6E8EE" }}
                  >
                    {comp.title}
                  </h2>
                  {comp.location && (
                    <p
                      className="text-xl mt-2 font-light"
                      style={{ color: "#97CAD8" }}
                    >
                      📍 {comp.location}
                    </p>
                  )}
                </div>

                {/* --- THE NEW SPLIT VIEW LAYOUT --- */}
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* LEFT SIDE: Text & Awards */}
                  <div className="flex flex-col justify-center">
                    <div className="space-y-4 mb-8">
                      {comp.description.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-lg leading-relaxed"
                          style={{ color: "#D6E8EE" }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {comp.awards.length > 0 && (
                      <div
                        className="p-6 rounded-xl shadow-inner"
                        style={{ backgroundColor: "#018ABE" }}
                      >
                        <h3
                          className="text-2xl font-bold mb-4 flex items-center gap-2"
                          style={{ color: "#D6E8EE" }}
                        >
                          🏆 Achievements
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                          {comp.awards.map((award, aIndex) => (
                            <li
                              key={aIndex}
                              className="text-base font-medium"
                              style={{ color: "#D6E8EE" }}
                            >
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* RIGHT SIDE: Massive Media Gallery */}
                  <div className="flex flex-col gap-4">
                    {comp.video && (
                      <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg border-2 border-gray-700">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={comp.video} type="video/mp4" />
                        </video>
                      </div>
                    )}

                    {comp.images?.length > 0 && (
                      <div
                        className={`grid ${comp.images.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-4`}
                      >
                        {comp.images?.map((imgSrc, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg border-2 border-gray-700"
                          >
                            <img
                              src={imgSrc}
                              alt={`${comp.year} competition media`}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
