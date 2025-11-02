import { skills } from '../data/portfolio';

const Skills = () => {
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Others',
  };

  return (
    <section id="skills" className="py-20 bg-mocha-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-mocha-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-mocha-blue mx-auto rounded"></div>
          <p className="mt-4 text-lg text-mocha-subtext0">Technologies I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, categorySkills]) => (
            <div
              key={key}
              className="bg-mocha-surface0 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-mocha-text mb-6 text-center">
                {categoryTitles[key as keyof typeof categoryTitles]}
              </h3>
              <div className="space-y-3">
                {categorySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-mocha-surface1 rounded-lg px-4 py-3 text-center hover:bg-mocha-blue/10 transition-colors duration-200"
                  >
                    <span className="text-mocha-text font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-mocha-subtext0 text-lg">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
