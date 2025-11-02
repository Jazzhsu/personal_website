import GitHubCalendar from 'react-github-calendar';

interface GitHubCalendarComponentProps {
  username: string;
}

const GitHubCalendarComponent = ({ username }: GitHubCalendarComponentProps) => {
  return (
    <div className="github-calendar-container">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-mocha-text mb-1">
          GitHub Contributions
        </h3>
        <p className="text-sm text-mocha-subtext0">
          Activity over the last year
        </p>
      </div>
      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme={'dark'}
        />
      </div>
      <style>{`
        .github-calendar-container .react-activity-calendar {
          color: #cdd6f4;
        }

        .github-calendar-container .react-activity-calendar__count {
          fill: #cdd6f4;
        }

        .github-calendar-container .react-activity-calendar__legend-colors {
          color: #cdd6f4;
        }

        .github-calendar-container .react-activity-calendar text {
          fill: #cdd6f4;
        }
      `}</style>
    </div>
  );
};

export default GitHubCalendarComponent;
