import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/team', label: 'Team' },
      { href: '/projects', label: 'Projects' },
    ],
    'Get Involved': [
      { href: '/sponsorship', label: 'Sponsorship' },
      { href: '/recruitment', label: 'Recruitment' },
      { href: '/contact', label: 'Contact' },
    ],
    'Connect': [
      { href: 'mailto:hello@subc.ca', label: 'Email' },
      { href: 'https://www.facebook.com/ubc.submarine/', label: 'Facebook', isExternal: true },
      { href: 'https://www.instagram.com/subc_ubc/', label: 'Instagram', isExternal: true },
      { href: 'https://www.linkedin.com/company/ubc-submarine/posts/?feedView=all', label: 'LinkedIn', isExternal: true },
    ]
  };

  return (
    <footer style={{ background: 'linear-gradient(to bottom, #02457A, #001B48, #000000)' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* SUBC Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#D6E8EE' }}>SUBC</h3>
              <p className="text-sm" style={{ color: '#D6E8EE' }}>
                //TODO: add mailing list feature
              </p>
            </div>
            <div className="text-sm" style={{ color: '#D6E8EE' }}>
              <p>2345 East Mall</p>
              <p>Vancouver, BC, V6T 1Z4, Canada</p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#D6E8EE' }}>{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="hover:text-white transition-colors text-sm"
                      style={{ color: '#D6E8EE' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={{ borderTopColor: '#02457A' }} className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0" style={{ color: '#D6E8EE' }}>
              <p>&copy; {currentYear} SUBC - UBC's Submarine Design Team. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="hover:text-white transition-colors" style={{ color: '#D6E8EE' }}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors" style={{ color: '#D6E8EE' }}>
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors" style={{ color: '#D6E8EE' }}>
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t text-center" style={{ borderTopColor: '#02457A' }}>
          <p className="text-xs" style={{ color: '#D6E8EE' }}>
            SUBC is a registered student organization at the University of British Columbia.
            <br />
            Built with passion for submarines by the SUBC team. 🤿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;