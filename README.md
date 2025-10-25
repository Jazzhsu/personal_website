# Personal Portfolio Website Template

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This template provides a clean and professional design to showcase your projects, skills, and experience.

## Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Dark Mode Support**: Automatic dark mode styling using Tailwind CSS
- **Smooth Animations**: Smooth scrolling and hover effects for better user experience
- **Clean Code**: TypeScript for type safety, ESLint and Prettier for code quality
- **Easy Customization**: Well-organized code structure for easy modifications
- **SEO Ready**: Semantic HTML structure for better search engine optimization

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Linting**: ESLint
- **Formatting**: Prettier

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Navbar.tsx      # Navigation bar component
├── sections/           # Page sections
│   ├── Hero.tsx       # Hero/landing section
│   ├── About.tsx      # About section
│   ├── Projects.tsx   # Projects showcase
│   ├── Skills.tsx     # Skills display
│   └── Contact.tsx    # Contact information
├── types/             # TypeScript type definitions
│   └── index.ts       # Shared types
├── data/              # Data files
│   └── portfolio.ts   # Portfolio data (projects, skills, etc.)
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository or use this template:
```bash
git clone <repository-url>
cd mywebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**`src/sections/Hero.tsx`**
- Replace "Your Name" with your actual name
- Update the title/role description
- Modify the bio text
- Update social media links

**`src/sections/About.tsx`**
- Customize the about text
- Modify the highlights to match your strengths

**`src/sections/Contact.tsx`**
- Update email address
- Add your social media URLs

### 2. Projects

Edit `src/data/portfolio.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'path/to/image.jpg',
    tags: ['React', 'TypeScript', 'etc'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://your-project.com',
  },
  // Add more projects...
];
```

### 3. Skills

Update the skills array in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Git', category: 'tools' },
  // Add more skills...
];
```

Categories: `frontend`, `backend`, `tools`, `other`

### 4. Colors and Styling

The template uses Tailwind CSS. To customize colors:

- Primary color: Currently uses blue (`blue-600`, `blue-700`, etc.)
- To change, find and replace color classes throughout the components
- For more extensive theming, refer to [Tailwind CSS documentation](https://tailwindcss.com/docs)

### 5. Images

Replace placeholder images in `src/data/portfolio.ts` with your own:
- Use absolute URLs or import images and place them in `src/assets/`
- Recommended image sizes:
  - Project thumbnails: 400x300px
  - Avatar: 200x200px

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Create new site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## Performance Optimization

- All components use React best practices
- Images should be optimized before adding
- Code splitting is handled by Vite automatically
- Consider using WebP format for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this template and customize it for your needs. If you find bugs or have suggestions, please open an issue.

## License

This template is open source and available under the MIT License.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with ❤️ using React + TypeScript + Tailwind CSS**
