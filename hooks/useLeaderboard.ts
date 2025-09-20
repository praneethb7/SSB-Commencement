import { useState, useMemo, useCallback } from 'react';
import { Team } from '../types';

const INITIAL_TEAMS: Team[] = [
  { id: 1, name: 'Team A', durationSeconds: 3.10 },
  { id: 2, name: 'Team B', durationSeconds: 2.45 },
  { id: 3, name: 'Team C', durationSeconds: 4.00 },
  { id: 4, name: 'Team D', durationSeconds: 2.20 },
  { id: 5, name: 'Team E', durationSeconds: 3.55 },
  { id: 6, name: 'Team F', durationSeconds: 2.05 },
  { id: 7, name: 'Team G', durationSeconds: 3.30 },
  { id: 8, name: 'Team H', durationSeconds: 4.15 },
  { id: 9, name: 'Team I', durationSeconds: 2.50 },
  { id: 10, name: 'Team J', durationSeconds: 3.05 },
];

export const useLeaderboard = () => {
  const [teams, setTeams] = useState<Team[]>(INITIAL_TEAMS);

  const updateTime = useCallback((id: number, seconds: number, milliseconds: number) => {
    if (isNaN(seconds) || isNaN(milliseconds)) return;
    // Convert to decimal seconds (e.g., 3.45 for 3 seconds and 450 milliseconds)
    const totalSeconds = seconds + (milliseconds / 1000);

    setTeams(currentTeams =>
      currentTeams.map(team =>
        team.id === id
          ? { ...team, durationSeconds: totalSeconds }
          : team
      )
    );
  }, []);

  const sortedTeams = useMemo(() => {
    return [...teams].sort((a, b) => {
      // If either team has 0 seconds, put them at the bottom
      if (a.durationSeconds === 0 && b.durationSeconds === 0) return 0;
      if (a.durationSeconds === 0) return 1;
      if (b.durationSeconds === 0) return -1;
      
      // For non-zero times, sort by duration (ascending)
      return a.durationSeconds - b.durationSeconds;
    });
  }, [teams]);

  const resetAllTimers = useCallback(() => {
    setTeams(currentTeams =>
      currentTeams.map(team => ({
        ...team,
        durationSeconds: 0
      }))
    );
  }, []);

  return { teams: sortedTeams, updateTime, resetAllTimers };
};