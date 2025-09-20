import React from 'react';
import { Team } from '../types';
import { StarIcon } from './icons/StarIcon';

interface LeaderboardProps {
  teams: Team[];
  resetAllTimers: () => void;
}

const ROW_HEIGHT = 72; // pixels

// Helper to format seconds into MM:SS
const formatDuration = (totalSeconds: number) => {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      return '00:00';
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
};

const getRankClassNames = (rank: number) => {
  switch (rank) {
    case 1:
      return {
        bg: 'bg-yellow-400/20 dark:bg-yellow-400/10',
        border: 'border-yellow-500/50',
        text: 'text-yellow-500',
        icon: 'text-gold',
      };
    case 2:
      return {
        bg: 'bg-gray-400/20 dark:bg-gray-400/10',
        border: 'border-gray-500/50',
        text: 'text-gray-500 dark:text-gray-300',
        icon: 'text-silver',
      };
    case 3:
      return {
        bg: 'bg-amber-600/20 dark:bg-amber-600/10',
        border: 'border-amber-700/50',
        text: 'text-amber-700 dark:text-amber-500',
        icon: 'text-bronze',
      };
    default:
      return {
        bg: 'bg-white dark:bg-slate-800',
        border: 'border-transparent',
        text: 'text-slate-500 dark:text-slate-400',
        icon: 'text-transparent',
      };
  }
};

export const Leaderboard: React.FC<LeaderboardProps> = ({ teams, resetAllTimers }) => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200">Rankings</h2>
        <button
          onClick={resetAllTimers}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Reset All Timers
        </button>
      </div>
      {teams.length > 0 ? (
        <ul
          className="relative"
          style={{ height: `${teams.length * ROW_HEIGHT}px` }}
        >
          {teams.map((team, index) => {
            const rank = index + 1;
            const rankClasses = getRankClassNames(rank);
            return (
              <li
                key={team.id}
                className={`absolute w-full flex items-center p-4 transition-all duration-500 ease-in-out ${rankClasses.bg} border-b border-slate-200 dark:border-slate-700`}
                style={{
                  height: `${ROW_HEIGHT}px`,
                  transform: `translateY(${index * ROW_HEIGHT}px)`,
                }}
              >
                <div className="flex items-center w-16">
                  <span className={`text-lg font-bold w-8 text-center ${rankClasses.text}`}>
                    {rank}
                  </span>
                  <StarIcon className={`w-6 h-6 ${rankClasses.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-lg truncate" title={team.name}>
                    {team.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-700">
                    {formatDuration(team.durationSeconds)}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Time</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="p-8 text-center text-slate-500 dark:text-slate-400">
          <p>No teams yet. Add a team to get started!</p>
        </div>
      )}
    </div>
  );
};