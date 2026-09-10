import React from 'react';
import { Moon, Sun, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Theme Capsule matching reference UI */}
      <div className="bg-[#1F2430]/90 dark:bg-[#1A1E29]/95 border border-white/20 dark:border-white/10 rounded-full px-4 py-2.5 shadow-2xl backdrop-blur-xl flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark/light theme"
          className="text-gray-200 hover:text-white hover:scale-110 transition-transform flex items-center justify-center"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-[#FCD30A]" />
          ) : (
            <Moon className="w-5 h-5 text-white fill-white" />
          )}
        </button>

        <span className="h-4 w-[1px] bg-white/20"></span>

        <button
          onClick={toggleTheme}
          aria-label="Theme settings"
          className="text-gray-300 hover:text-white hover:rotate-90 transition-all duration-300"
          title="Toggle Theme"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
