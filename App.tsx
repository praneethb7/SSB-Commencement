import React from 'react';
import { useLeaderboard } from './hooks/useLeaderboard';
import { Leaderboard } from './components/Leaderboard';
import { ScoreInput } from './components/ScoreInput';
import { ThemeToggle } from './components/ThemeToggle';


const App: React.FC = () => {
  const { teams, updateTime } = useLeaderboard();

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <header className="relative text-center mb-8">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          <div className="flex justify-center items-center gap-4">
            <img 
              src="https://yt3.googleusercontent.com/JQsY5KVT79hwjofIVu_6jlOWGvdDJ3C-40iw09_ub03qcNnf9Gyay-WVZGovBrckScZJvVhmEw=s160-c-k-c0x00ffffff-no-rj"
              alt="SSB Logo"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-700">
              SSB Commencement
            </h1>
          </div>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            Activity Leaderboard
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <ScoreInput teams={teams} onUpdateTime={updateTime} />
          </div>
          <div className="md:col-span-2">
            <Leaderboard teams={teams} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;