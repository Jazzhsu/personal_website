import { bio, socialLinks } from '../data/portfolio';

const Contact = () => {
  const fullName = `${bio.firstName} ${bio.lastName}`;
  const emailLink =
    socialLinks.find(link => link.name === 'Email')?.url || 'mailto:your.email@example.com';

  const colorMap: Record<string, string> = {
    GitHub: 'hover:text-gray-900 dark:hover:text-gray-100',
    LinkedIn: 'hover:text-blue-700',
    Email: 'hover:text-red-500',
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            I'm always open to new opportunities and collaborations
          </p>
        </div>

        {/* Contact Content */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 sm:p-12">
          <div className="text-center space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              I'd love to hear from you. Feel free to reach out through any of the platforms below!
            </p>

            {/* Email Button */}
            <div className="pt-6">
              <a
                href={emailLink}
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Me an Email
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-gray-600 dark:text-gray-400 mb-6">Or connect with me on:</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  const hoverColor = colorMap[link.name] || 'hover:text-blue-600';
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className={`text-gray-600 dark:text-gray-400 ${hoverColor} transition-colors transform hover:scale-110`}
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
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
