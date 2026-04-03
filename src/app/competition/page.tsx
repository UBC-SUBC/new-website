import Head from 'next/head';

export default function Contact() {
  const contactMethods = [
    {
      icon: "✉️",
      title: "Email Us",
      description: "For general inquiries and sponsorship opportunities",
      action: "hello@subc.ca",
      link: "mailto:hello@subc.ca"
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Follow our latest updates and stories",
      action: "@subc_ubc",
      link: "https://www.instagram.com/subc_ubc/"
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
        
        {/* Hero Section */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #018ABE, #02457A)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D6E8EE' }}>
              Get in Touch
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#D6E8EE' }}>
              We'd love to hear from you. Whether you are interested in joining, 
              sponsoring, or just want to chat about submarines, we are here.
            </p>
          </div>
        </section>

        {/* Contact Info Grid Section (Matches Executive Team Section style) */}
        <section className="py-20" style={{ backgroundColor: '#02457A' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Contact Channels</h2>
              <p className="text-lg" style={{ color: '#D6E8EE' }}>
                Reach out to us through any of the platforms below
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-8 rounded-lg transition-transform hover:-translate-y-1" style={{ backgroundColor: '#001B48' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#97CAD8' }}>
                    <span className="text-3xl">{method.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#D6E8EE' }}>{method.title}</h3>
                  <p className="mb-4 text-sm" style={{ color: '#D6E8EE', opacity: 0.8 }}>{method.description}</p>
                  
                  <a 
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline" 
                    style={{ color: '#97CAD8' }}
                  >
                    {method.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location / Map Section (Matches Departments Section style) */}
        <section className="py-20" style={{ backgroundColor: '#018ABE' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>Find Us on Campus</h2>
              <p className="text-lg" style={{ color: '#D6E8EE' }}>
                Wayne and William White Engineering Design Centre
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: '#001B48', padding: '1rem' }}>
              <div className="w-full h-96 bg-gray-300 rounded">
                 {/* Note: I used the EDC embed link here. 
                    If you have a specific Google Maps Embed URL, replace the src below.
                 */}
                <iframe
                  title="SUBC Location"
                  loading="lazy"
                  className="w-full h-full border-0 rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.399478332906!2d-123.25306668431016!3d49.26213037932876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672b10953188b%3A0x643666b6c0032274!2sWayne%20and%20William%20White%20Engineering%20Design%20Centre!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                  allowFullScreen=""
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                 <p style={{ color: '#D6E8EE' }}>2345 East Mall, Vancouver, BC V6T 1Z4</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Direct Message Section (Matches CTA Section style) */}
        <section className="py-20" style={{ backgroundColor: '#001B48' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D6E8EE' }}>
              Have a Specific Question?
            </h2>
            <p className="text-xl mb-8" style={{ color: '#D6E8EE' }}>
              Check out our social media for the latest updates, or send us an email directly.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="mailto:hello@subc.ca"
                className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block"
                style={{ backgroundColor: '#97CAD8', color: '#001B48' }}
              >
                Email Us
              </a>
              <a 
                href="https://www.facebook.com/ubc.submarine/"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block"
                style={{ borderColor: '#D6E8EE', color: '#D6E8EE' }}
              >
                Facebook
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}