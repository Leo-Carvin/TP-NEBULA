import { TrendingUp, TrendingDown, Zap, Factory, Leaf, CloudRain } from 'lucide-react';

const stats = [
  {
    label: 'Energy Consumption',
    value: '2,847',
    unit: 'GW',
    change: '+3.8%',
    trend: 'up',
    icon: Zap,
    color: 'cyan',
    subtext: 'Global demand',
  },
  {
    label: 'Total Production',
    value: '3,124',
    unit: 'GW',
    change: '+5.2%',
    trend: 'up',
    icon: Factory,
    color: 'blue',
    subtext: 'Active generation',
  },
  {
    label: 'Renewable Energy',
    value: '42.8',
    unit: '%',
    change: '+8.3%',
    trend: 'up',
    icon: Leaf,
    color: 'green',
    subtext: 'Of total production',
  },
  {
    label: 'CO₂ Emissions',
    value: '18.4',
    unit: 'Mt/day',
    change: '-6.7%',
    trend: 'down',
    icon: CloudRain,
    color: 'purple',
    subtext: 'Carbon footprint',
  },
];

const colorMap = {
  cyan: {
    bg: 'from-cyan-600/20 to-cyan-600/5',
    border: 'border-cyan-500/30',
    icon: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
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
  purple: {
    bg: 'from-purple-600/20 to-purple-600/5',
    border: 'border-purple-500/30',
    icon: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
};

export function EnergyStatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const colors = colorMap[stat.color as keyof typeof colorMap];
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        const trendColor = stat.trend === 'up' 
          ? (stat.label.includes('CO₂') ? 'text-green-400' : 'text-green-400')
          : 'text-green-400';
        
        return (
          <div
            key={stat.label}
            className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-5 shadow-lg ${colors.glow} backdrop-blur-sm hover:scale-105 transition-transform`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2.5 bg-gray-900/50 rounded-lg ${colors.icon}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-medium ${trendColor}`}>
                <TrendIcon className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="flex items-baseline space-x-1 mb-1">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <span className="text-sm text-gray-400">{stat.unit}</span>
            </div>
            <p className="text-sm font-medium text-gray-300 mb-1">{stat.label}</p>
            <p className="text-xs text-gray-500">{stat.subtext}</p>
          </div>
        );
      })}
    </div>
  );
}
