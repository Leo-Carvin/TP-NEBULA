import { Building2, TrendingUp, TrendingDown } from 'lucide-react';

const zones = [
  {
    id: 1,
    name: 'Floor 1 - Lobby',
    consumption: 145,
    percentage: 18,
    change: '+5.2%',
    trend: 'up',
    color: 'cyan',
  },
  {
    id: 2,
    name: 'Floor 2 - Offices',
    consumption: 234,
    percentage: 29,
    change: '-3.1%',
    trend: 'down',
    color: 'green',
  },
  {
    id: 3,
    name: 'Floor 3 - Labs',
    consumption: 198,
    percentage: 24,
    change: '+8.7%',
    trend: 'up',
    color: 'purple',
  },
  {
    id: 4,
    name: 'Basement - Utilities',
    consumption: 167,
    percentage: 21,
    change: '-2.4%',
    trend: 'down',
    color: 'blue',
  },
  {
    id: 5,
    name: 'Roof - Solar/HVAC',
    consumption: 67,
    percentage: 8,
    change: '-12.5%',
    trend: 'down',
    color: 'emerald',
  },
];

const colorMap = {
  cyan: { bar: 'bg-cyan-500', text: 'text-cyan-400' },
  green: { bar: 'bg-green-500', text: 'text-green-400' },
  purple: { bar: 'bg-purple-500', text: 'text-purple-400' },
  blue: { bar: 'bg-blue-500', text: 'text-blue-400' },
  emerald: { bar: 'bg-emerald-500', text: 'text-emerald-400' },
};

export function ZoneBreakdown() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Zone Energy Breakdown</h3>
          <p className="text-sm text-gray-400 mt-1">Consumption by location</p>
        </div>
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Building2 className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
      
      <div className="space-y-4">
        {zones.map((zone) => {
          const colors = colorMap[zone.color as keyof typeof colorMap];
          const TrendIcon = zone.trend === 'up' ? TrendingUp : TrendingDown;
          const trendColor = zone.trend === 'up' ? 'text-red-400' : 'text-green-400';
          
          return (
            <div key={zone.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-200">{zone.name}</span>
                    <span className={`text-sm font-bold ${colors.text}`}>{zone.consumption} kWh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-800 rounded-full h-2">
                      <div 
                        className={`${colors.bar} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${zone.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">{zone.percentage}%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-1">
                <div className={`flex items-center space-x-1 text-xs font-medium ${trendColor}`}>
                  <TrendIcon className="w-3 h-3" />
                  <span>{zone.change} vs yesterday</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Total Summary */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/20 rounded-lg">
          <div>
            <p className="text-xs text-gray-400 mb-1">Total Facility Consumption</p>
            <p className="text-2xl font-bold text-cyan-400">811 kWh</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 mb-1">Today</p>
            <div className="flex items-center space-x-1 text-sm text-green-400">
              <TrendingDown className="w-4 h-4" />
              <span className="font-medium">-4.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
