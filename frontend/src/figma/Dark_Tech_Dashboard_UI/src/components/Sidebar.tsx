import { LayoutDashboard, Globe, Zap, TrendingUp, MapPin, Database, Bell, Settings, BarChart3, Activity } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Globe, label: 'Global Network', active: false },
  { icon: Zap, label: 'Live Monitoring', active: false },
  { icon: TrendingUp, label: 'Analytics', active: false },
  { icon: MapPin, label: 'Regions', active: false },
  { icon: Database, label: 'Data Sources', active: false },
  { icon: BarChart3, label: 'Reports', active: false },
  { icon: Bell, label: 'Anomalies', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#0f172a] border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg">GridWatch</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all ${
                item.active
                  ? 'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-400 border border-cyan-500/20'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      {/* System Status */}
      <div className="mx-3 mb-4 p-4 bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-green-400">System Status</span>
        </div>
        <p className="text-sm font-bold text-gray-200">All Grids Online</p>
        <p className="text-xs text-gray-400 mt-1">247 Stations Active</p>
      </div>
      
      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
            OP
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Grid Operator</p>
            <p className="text-xs text-gray-400 truncate">Admin Access</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
