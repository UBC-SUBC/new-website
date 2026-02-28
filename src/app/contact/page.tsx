import Head from 'next/head';

export default function Contact() {
  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      action: "hello@subc.ca",
      link: "mailto:hello@subc.ca"
    },
    {
      icon: "📘",
      title: "Facebook",
      action: "@ubc.submarine",
      link: "https://www.facebook.com/ubc.submarine/"
    },
    {
      icon: "📸",
      title: "Instagram",
      action: "@subc_ubc",
      link: "https://www.instagram.com/subc_ubc/"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      action: "UBC Submarine",
      link: "https://www.linkedin.com/company/ubc-submarine"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Drop by our workshop on campus",
      action: "Get Directions",
      link: "https://maps.google.com/maps?z=16&q=engineering%2Bdesign%2Bcentre%2B2345%2Beast%2Bmall%2C%2Bvancouver%2C%2Bbc%2Bv6t%2B1z4" // Replaced with anchor to map section
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us — SUBC</title>
      </Head>

      <main className="min-h-screen pt-16" style={{ backgroundColor: '#2a2a2a' }}>
        
        {/* Section 1: Hero & Contact Channels */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #018ABE, #02457A)' }}>
          <div className="max-w-6xl mx-auto px-4 text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
              Get in Touch
            </h1>
            
            {/* Integrated, concise wording */}
            <p className="text-xl max-w-3xl mx-auto mb-16" style={{ color: '#D6E8EE' }}>
              Whether you're looking to join, sponsor, or have a specific question, we'd love to hear from you! Send us an email or follow our socials for the latest updates.
            </p>

            {/* 5 Contact Blocks moved here */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-6 rounded-lg transition-transform hover:-translate-y-1 shadow-lg" style={{ backgroundColor: '#001B48' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#97CAD8' }}>
                    <span className="text-2xl">{method.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#D6E8EE' }}>{method.title}</h3>
                  <a 
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm hover:underline break-words" 
                    style={{ color: '#97CAD8' }}
                  >
                    {method.action}
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 2: Location / Map (Moved up to the #02457A section) */}
        <section className="py-20" style={{ backgroundColor: '#02457A' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Find Us on Campus</h2>
              <p className="text-lg" style={{ color: '#D6E8EE' }}>
                Wayne and William White Engineering Design Centre
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: '#001B48', padding: '1rem' }}>
              <div className="w-full h-96 bg-gray-300 rounded">
                 {/* Google Maps Embed */}
                <iframe
                  title="SUBC Location"
                  loading="lazy"
                  className="w-full h-full border-0 rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.399478332906!2d-123.25306668431016!3d49.26213037932876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672b10953188b%3A0x643666b6c0032274!2sWayne%20and%20William%20White%20Engineering%20Design%20Centre!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                  allowFullScreen = {true}
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                 <p style={{ color: '#D6E8EE' }}>2345 East Mall, Vancouver, BC V6T 1Z4</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}