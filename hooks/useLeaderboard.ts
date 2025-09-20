import { useState, useMemo, useCallback } from 'react';
import { Team } from '../types';

const INITIAL_TEAMS: Team[] = [
  { id: 1, name: 'Team A', durationSeconds: 3 * 60 + 10 },
  { id: 2, name: 'Team B', durationSeconds: 2 * 60 + 45 },
  { id: 3, name: 'Team C', durationSeconds: 4 * 60 + 0 },
  { id: 4, name: 'Team D', durationSeconds: 2 * 60 + 20 },
  { id: 5, name: 'Team E', durationSeconds: 3 * 60 + 55 },
  { id: 6, name: 'Team F', durationSeconds: 2 * 60 + 5 },
  { id: 7, name: 'Team G', durationSeconds: 3 * 60 + 30 },
  { id: 8, name: 'Team H', durationSeconds: 4 * 60 + 15 },
  { id: 9, name: 'Team I', durationSeconds: 2 * 60 + 50 },
  { id: 10, name: 'Team J', durationSeconds: 3 * 60 + 5 },
];

export const useLeaderboard = () => {
  const [teams, setTeams] = useState<Team[]>(INITIAL_TEAMS);

  const updateTime = useCallback((id: number, minutes: number, seconds: number) => {
    if (isNaN(minutes) || isNaN(seconds)) return;
    const totalSeconds = minutes * 60 + seconds;

    setTeams(currentTeams =>
      currentTeams.map(team =>
        team.id === id
          ? { ...team, durationSeconds: totalSeconds }
          : team
      )
    );
  }, []);

  const sortedTeams = useMemo(() => {
    return [...teams].sort((a, b) => a.durationSeconds - b.durationSeconds);
  }, [teams]);

  return { teams: sortedTeams, updateTime };
};