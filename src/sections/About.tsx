import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaCheckCircle,
} from 'react-icons/fa';
import { bio } from '../data/portfolio';

const About = () => {
  const highlights = [
    {
      icon: <FaCode size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.',
    },
    {
      icon: <FaLightbulb size={32} />,
      title: 'Problem Solver',
      description: 'Creative solutions to complex technical challenges.',
    },
    {
      icon: <FaRocket size={32} />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-mocha-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-mocha-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-mocha-blue mx-auto rounded"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text */}
          <div className="space-y-6">
            <p className="text-lg text-mocha-subtext0 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant solutions to
              complex problems. With expertise in modern web technologies, I build applications that
              are not only functional but also provide exceptional user experiences.
            </p>
            <p className="text-lg text-mocha-subtext0 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-mocha-blue hover:bg-mocha-sapphire text-mocha-crust font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-mocha-surface0 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 text-mocha-lavender">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-mocha-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-mocha-subtext0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="text-mocha-lavender" size={32} />
            <h3 className="text-2xl sm:text-3xl font-bold text-mocha-text">
              Work Experience
            </h3>
          </div>
          <div className="space-y-8">
            {bio.experience.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className="bg-mocha-surface0 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-mocha-text mb-1">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        {IconComponent && (
                          <IconComponent size={20} className="text-mocha-lavender" />
                        )}
                        <p className="text-lg text-mocha-lavender font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-mocha-subtext0 font-medium mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-mocha-subtext0">
                        <FaCheckCircle className="text-mocha-green flex-shrink-0 mt-1" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap className="text-mocha-lavender" size={32} />
            <h3 className="text-2xl sm:text-3xl font-bold text-mocha-text">
              Education
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {bio.educations.map((edu, index) => (
              <div
                key={index}
                className="bg-mocha-surface0 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-mocha-text mb-2">
                  {edu.degree}
                </h4>
                <p className="text-lg text-mocha-lavender font-medium mb-2">
                  {edu.university}
                </p>
                <p className="text-mocha-subtext0 font-medium">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
