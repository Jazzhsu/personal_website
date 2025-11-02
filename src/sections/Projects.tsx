import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-mocha-mantle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-mocha-text mb-4">
            Projects (Under Construction...)
          </h2>
          <div className="w-20 h-1 bg-mocha-blue mx-auto rounded"></div>
          <p className="mt-4 text-lg text-mocha-subtext0">
            Here are some of my recent works
          </p>
        </div>

        {/* Projects - Conditional Layout */}
        <div className="relative">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            }}
            modules={[Pagination, Mousewheel]}
            className="projects-swiper"
          >
            {projects.map(project => (
              <SwiperSlide key={project.id} className="!w-[350px] sm:!w-[380px]">
                <div className="bg-mocha-surface0 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-mocha-surface1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-mocha-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-mocha-subtext0 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-mocha-blue/20 text-mocha-lavender text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-mocha-subtext0 hover:text-mocha-lavender transition-colors"
                        >
                          <FaGithub size={20} />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-mocha-subtext0 hover:text-mocha-lavender transition-colors"
                        >
                          <FaExternalLinkAlt size={18} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
