import { TrendingUp, TrendingDown, Server, Zap, Users, HardDrive } from 'lucide-react';

const stats = [
  {
    label: 'Active Servers',
    value: '127',
    change: '+12%',
    trend: 'up',
    icon: Server,
    color: 'cyan',
  },
  {
    label: 'CPU Usage',
    value: '64.3%',
    change: '-3.2%',
    trend: 'down',
    icon: Zap,
    color: 'purple',
  },
  {
    label: 'Active Users',
    value: '8,432',
    change: '+18%',
    trend: 'up',
    icon: Users,
    color: 'blue',
  },
  {
    label: 'Storage Used',
    value: '2.4TB',
    change: '+5.1%',
    trend: 'up',
    icon: HardDrive,
    color: 'green',
  },
];

const colorMap = {
  cyan: {
    bg: 'from-cyan-600/20 to-cyan-600/5',
    border: 'border-cyan-500/30',
    icon: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
  purple: {
    bg: 'from-purple-600/20 to-purple-600/5',
    border: 'border-purple-500/30',
    icon: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
  blue: {
    bg: 'from-blue-600/20 to-blue-600/5',
    border: 'border-blue-500/30',
    icon: 'text-blue-400',
    glow: 'shadow-blue-500/20',
  },
  green: {
    bg: 'from-green-600/20 to-green-600/5',
    border: 'border-green-500/30',
    icon: 'text-green-400',
    glow: 'shadow-green-500/20',
  },
};

export function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const colors = colorMap[stat.color as keyof typeof colorMap];
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <div
            key={stat.label}
            className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-5 shadow-lg ${colors.glow} backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2.5 bg-gray-900/50 rounded-lg ${colors.icon}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                <TrendIcon className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
