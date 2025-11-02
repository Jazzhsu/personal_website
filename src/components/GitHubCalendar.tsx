import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

interface GitHubCalendarComponentProps {
  username: string;
}

const GitHubCalendarComponent = ({ username }: GitHubCalendarComponentProps) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(() => {
    // Initialize with current theme
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const updateColorScheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setColorScheme(isDark ? 'dark' : 'light');
    };

    // Initial check
    updateColorScheme();

    // Watch for theme changes on html element
    const observer = new MutationObserver(() => {
      updateColorScheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Also listen for media query changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = () => {
      updateColorScheme();
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const explicitTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="github-calendar-container">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          GitHub Contributions
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Activity over the last year
        </p>
      </div>
      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          key={colorScheme}
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme={'dark'}
          theme={explicitTheme}
        />
      </div>
      <style>{`
        .github-calendar-container .react-activity-calendar {
          color: rgb(255, 255, 255);
        }

        .github-calendar-container .react-activity-calendar__count {
          fill: rgb(255, 255, 255);
        }

        .github-calendar-container .react-activity-calendar__legend-colors {
          color: rgb(255, 255, 255);
        }

        .github-calendar-container .react-activity-calendar text {
          fill: rgb(255, 255, 255);
        }
      `}</style>
    </div>
  );
};

export default GitHubCalendarComponent;
