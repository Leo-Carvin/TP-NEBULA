import { TrendingUp, TrendingDown, Zap, DollarSign, Leaf, Activity } from 'lucide-react';

const stats = [
  {
    label: 'Total Consumption',
    value: '18,342',
    unit: 'kWh',
    change: '+8.2%',
    trend: 'up',
    icon: Zap,
    color: 'yellow',
  },
  {
    label: 'Energy Cost',
    value: '$2,847',
    unit: 'Today',
    change: '-5.4%',
    trend: 'down',
    icon: DollarSign,
    color: 'green',
  },
  {
    label: 'Carbon Footprint',
    value: '4.2',
    unit: 'tons CO₂',
    change: '-12.1%',
    trend: 'down',
    icon: Leaf,
    color: 'emerald',
  },
  {
    label: 'Peak Demand',
    value: '1,247',
    unit: 'kW',
    change: '+3.7%',
    trend: 'up',
    icon: Activity,
    color: 'orange',
  },
];

const colorMap = {
  yellow: {
    bg: 'from-yellow-600/20 to-yellow-600/5',
    border: 'border-yellow-500/30',
    icon: 'text-yellow-400',
    glow: 'shadow-yellow-500/20',
  },
  green: {
    bg: 'from-green-600/20 to-green-600/5',
    border: 'border-green-500/30',
    icon: 'text-green-400',
    glow: 'shadow-green-500/20',
  },
  emerald: {
    bg: 'from-emerald-600/20 to-emerald-600/5',
    border: 'border-emerald-500/30',
    icon: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
  },
  orange: {
    bg: 'from-orange-600/20 to-orange-600/5',
    border: 'border-orange-500/30',
    icon: 'text-orange-400',
    glow: 'shadow-orange-500/20',
  },
};

export function EnergyStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const colors = colorMap[stat.color as keyof typeof colorMap];
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        const trendColor = stat.trend === 'up' 
          ? (stat.label.includes('Cost') || stat.label.includes('Carbon') ? 'text-red-400' : 'text-green-400')
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
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
