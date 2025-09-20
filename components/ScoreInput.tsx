import React, { useState, useMemo } from 'react';
import { Team } from '../types';

interface ScoreInputProps {
  teams: Team[];
  onUpdateTime: (id: number, minutes: number, seconds: number) => void;
}

export const ScoreInput: React.FC<ScoreInputProps> = ({ teams, onUpdateTime }) => {
  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [error, setError] = useState('');

  const sortedTeamsForDropdown = useMemo(() => {
    // Creates a stable, alphabetically sorted list for the dropdown
    return [...teams].sort((a, b) => a.name.localeCompare(b.name));
  }, [teams]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const minsNum = parseInt(minutes, 10);
    const secsNum = parseInt(seconds, 10);
    const teamIdNum = parseInt(selectedTeamId, 10);

    if (!selectedTeamId) {
      setError('Please select a team.');
      return;
    }
    if (isNaN(minsNum) || minutes.trim() === '' || isNaN(secsNum) || seconds.trim() === '') {
      setError('Please enter a valid time.');
      return;
    }
     if (minsNum < 0 || secsNum < 0 || secsNum > 59) {
        setError('Please enter a valid time (seconds must be 0-59).');
        return;
    }
    
    onUpdateTime(teamIdNum, minsNum, secsNum);
    setSelectedTeamId('');
    setMinutes('');
    setSeconds('');
    setError('');
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
      <h2 className="text-xl font-bold mb-4 text-slate-700 dark:text-slate-200">Record Time</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="teamSelect" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
            Team
          </label>
          <select
            id="teamSelect"
            value={selectedTeamId}
            onChange={(e) => setSelectedTeamId(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-brand-700 focus:border-brand-700 transition"
          >
            <option value="" disabled>Select a team</option>
            {sortedTeamsForDropdown.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="minutes" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
              Minutes
            </label>
            <input
              id="minutes"
              type="number"
              min="0"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="e.g., 5"
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-brand-700 focus:border-brand-700 transition"
            />
          </div>
          <div>
            <label htmlFor="seconds" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
              Seconds
            </label>
            <input
              id="seconds"
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              placeholder="e.g., 30"
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:ring-brand-700 focus:border-brand-700 transition"
            />
          </div>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-brand-700 text-white font-bold py-2 px-4 rounded-md hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-700 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900 transition-transform transform hover:scale-105"
        >
          Add Time!
        </button>
      </form>
    </div>
  );
};