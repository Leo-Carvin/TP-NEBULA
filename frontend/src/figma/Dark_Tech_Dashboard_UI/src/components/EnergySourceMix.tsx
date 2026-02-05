import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Leaf, Zap } from 'lucide-react';

const energyData = [
  { name: 'Solar', value: 18.5, color: '#eab308' },
  { name: 'Wind', value: 24.3, color: '#06b6d4' },
  { name: 'Hydro', value: 16.8, color: '#3b82f6' },
  { name: 'Nuclear', value: 10.2, color: '#a855f7' },
  { name: 'Natural Gas', value: 20.4, color: '#f59e0b' },
  { name: 'Coal', value: 8.6, color: '#64748b' },
  { name: 'Other', value: 1.2, color: '#6b7280' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
        <p className="text-sm font-semibold text-gray-200 mb-1">{payload[0].name}</p>
        <p className="text-lg font-bold" style={{ color: payload[0].payload.color }}>
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="space-y-2 mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-300">{entry.value}</span>
          </div>
          <span className="font-semibold text-gray-200">{entry.payload.value}%</span>
        </div>
      ))}
    </div>
  );
};

export function EnergySourceMix() {
  const renewablePercentage = energyData
    .filter(item => ['Solar', 'Wind', 'Hydro'].includes(item.name))
    .reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Energy Source Mix</h3>
          <p className="text-sm text-gray-400 mt-1">Global generation</p>
        </div>
        <div className="p-2 bg-green-500/10 rounded-lg">
          <Leaf className="w-5 h-5 text-green-400" />
        </div>
      </div>
      
      {/* Pie Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={energyData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              animationDuration={1000}
            >
              {energyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute top-[200px] left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs text-gray-400">Total</p>
          <p className="text-2xl font-bold text-cyan-400">100%</p>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-4">
        <CustomLegend payload={energyData.map((item, index) => ({
          value: item.name,
          color: item.color,
          payload: item,
        }))} />
      </div>
      
      {/* Renewable Summary */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Leaf className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Renewable Energy</p>
              <p className="text-xl font-bold text-green-400">{renewablePercentage.toFixed(1)}%</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Non-Renewable</p>
            <p className="text-lg font-semibold text-orange-400">
              {(100 - renewablePercentage).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
