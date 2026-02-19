import { Search, Bell, Settings, RefreshCw, Globe } from 'lucide-react';

export function TopBar() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <header className="h-16 bg-[#0f172a] border-b border-gray-800 flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center space-x-4 flex-1">
        <div>
          <h1 className="text-xl font-semibold">Global Electricity Monitoring</h1>
          <p className="text-xs text-gray-400 mt-0.5">{currentDate}</p>
        </div>
      </div>
      
      {/* Center - Live Stats */}
      <div className="hidden lg:flex items-center space-x-6 px-6 py-2 bg-[#1e293b] border border-gray-700 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div>
            <p className="text-xs text-gray-400">Global Load</p>
            <p className="text-sm font-semibold text-cyan-400">2,847 GW</p>
          </div>
        </div>
        <div className="w-px h-8 bg-gray-700" />
        <div>
          <p className="text-xs text-gray-400">Grid Frequency</p>
          <p className="text-sm font-semibold text-green-400">50.02 Hz</p>
        </div>
        <div className="w-px h-8 bg-gray-700" />
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-purple-400" />
          <div>
            <p className="text-xs text-gray-400">Coverage</p>
            <p className="text-sm font-semibold text-purple-400">89.2%</p>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-3">
        <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors">
          <RefreshCw className="w-5 h-5" />
        </button>
        <button className="relative p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
