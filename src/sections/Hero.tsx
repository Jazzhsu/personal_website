import { bio, socialLinks } from '../data/portfolio';
import GitHubCalendarComponent from '../components/GitHubCalendar';

const Hero = () => {
  const fullName = `${bio.firstName} ${bio.lastName}`;
  const initials = `${bio.firstName[0]}${bio.lastName[0]}`;
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mocha-crust to-mocha-base"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Avatar/Image placeholder */}
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-mocha-blue to-mocha-mauve flex items-center justify-center text-mocha-crust text-5xl sm:text-6xl font-bold shadow-xl">
              {initials}
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mocha-text">
              Hi, I'm <span className="text-mocha-lavender">{fullName}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-mocha-subtext0 font-light">
              {bio.title}
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-mocha-subtext0 leading-relaxed">
            {bio.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-mocha-blue hover:bg-mocha-sapphire text-mocha-crust font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-mocha-surface0 text-mocha-lavender font-medium rounded-lg shadow-lg hover:shadow-xl border-2 border-mocha-lavender transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-mocha-subtext0 hover:text-mocha-lavender transition-colors transform hover:scale-110"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

          {/* GitHub Contribution Calendar */}
          {bio.githubUsername && (
            <div className="mt-12 bg-mocha-crust rounded-xl shadow-xl p-6 max-w-4xl mx-auto">
              <GitHubCalendarComponent username={bio.githubUsername} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
