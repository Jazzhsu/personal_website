import { bio, socialLinks } from '../data/portfolio';

const Contact = () => {
  const fullName = `${bio.firstName} ${bio.lastName}`;
  const emailLink =
    socialLinks.find(link => link.name === 'Email')?.url || 'mailto:your.email@example.com';

  const colorMap: Record<string, string> = {
    GitHub: 'hover:text-mocha-text',
    LinkedIn: 'hover:text-mocha-blue',
    Email: 'hover:text-mocha-red',
  };

  return (
    <section id="contact" className="py-20 bg-mocha-mantle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-mocha-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-mocha-blue mx-auto rounded"></div>
          <p className="mt-4 text-lg text-mocha-subtext0">
            I'm always open to new opportunities and collaborations
          </p>
        </div>

        {/* Contact Content */}
        <div className="bg-mocha-surface0 rounded-lg shadow-xl p-8 sm:p-12">
          <div className="text-center space-y-6">
            <p className="text-lg text-mocha-subtext0 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              I'd love to hear from you. Feel free to reach out through any of the platforms below!
            </p>

            {/* Email Button */}
            <div className="pt-6">
              <a
                href={emailLink}
                className="inline-block px-8 py-4 bg-mocha-blue hover:bg-mocha-sapphire text-mocha-crust font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Me an Email
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-mocha-subtext0 mb-6">Or connect with me on:</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  const hoverColor = colorMap[link.name] || 'hover:text-mocha-blue';
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className={`text-mocha-subtext0 ${hoverColor} transition-colors transform hover:scale-110`}
                      aria-label={link.name}
                    >
                      <IconComponent size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-mocha-subtext0">
          <p>
            &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
